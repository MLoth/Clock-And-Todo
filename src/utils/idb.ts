// TODO: Make more generic
// TODO: Look for type annotation IDB Transaction callbacks

const DB_NAME: string = "tododb",
	DB_VERSION: number = 1;
let DB: IDBDatabase;

// import ibd from '../utils/idb';
// ibd.deleteTodo(id);

export default {
	async getDb(): Promise<IDBDatabase> {
		return new Promise((resolve, reject) => {
			if (DB) {
				return resolve(DB);
			}
			console.log("OPENING DB", DB);
			const request: IDBOpenDBRequest = window.indexedDB.open(DB_NAME, DB_VERSION);

			request.onerror = (e: any) => {
				console.log("Error opening db", e);
				reject("Error");
			};

			request.onsuccess = (e: any) => {
				if (e.target) {
					DB = e.target.result;
					resolve(DB);
				}
			};

			request.onupgradeneeded = (e: any) => {
				console.log("onupgradeneeded");
				if (e.target) {
					const db = e.target.result;
					db.createObjectStore("todos", {
						autoIncrement: true,
						keyPath: "id"
					});
				}
			};
		});
	},

	async deleteTodo(todo: any) {
		const db = await this.getDb();

		return new Promise(resolve => {
			const trans: IDBTransaction = db.transaction(["todos"], "readwrite");
			trans.oncomplete = () => {
				resolve();
			};

			const store: IDBObjectStore = trans.objectStore("todos");
			store.delete(todo.id);
		});
	},

	async getIdbItems(entity: string) {
		let db = await this.getDb();

		return new Promise(resolve => {
			let trans: IDBTransaction = db.transaction([entity], "readonly");
			let store: IDBObjectStore = trans.objectStore(entity);

			let genericItems: Array<any> = [];

			trans.oncomplete = () => {
				resolve(genericItems);
			};



			store.openCursor().onsuccess = (e: any): void => {
				let cursor = e.target.result;
				if (cursor) {
					genericItems.push(cursor.value);
					cursor.continue();
				}
			};
		});
	},

	async saveTodo(todo: any) {
		let db = await this.getDb();

		return new Promise(resolve => {
			let trans: IDBTransaction = db.transaction(["todos"], "readwrite");
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore("todos");
			store.put(todo);
		});
	}
};
