const DB_NAME = "tododb",
	DB_VERSION = 1;
let DB;

// import ibd from '../utils/idb';
// ibd.deleteTodo(id);

export default {
	async getDb() {
		return new Promise((resolve, reject) => {
			if (DB) {
				return resolve(DB);
			}
			console.log("OPENING DB", DB);
			const request = window.indexedDB.open(DB_NAME, DB_VERSION);

			request.onerror = e => {
				console.log("Error opening db", e);
				reject("Error");
			};

			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};

			request.onupgradeneeded = e => {
				console.log("onupgradeneeded");
				const db = e.target.result;
				db.createObjectStore("todos", {
					autoIncrement: true,
					keyPath: "id"
				});
			};
		});
	},

	async deleteTodo(todo) {
		const db = await this.getDb();

		return new Promise(resolve => {
			const trans = db.transaction(["todos"], "readwrite");
			trans.oncomplete = () => {
				resolve();
			};

			const store = trans.objectStore("todos");
			store.delete(todo.id);
		});
	},

	async getTodos() {
		let db = await this.getDb();

		return new Promise(resolve => {
			let trans = db.transaction(["todos"], "readonly");
			trans.oncomplete = () => {
				resolve(todos);
			};

			let store = trans.objectStore("todos");
			let todos = [];

			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;
				if (cursor) {
					todos.push(cursor.value);
					cursor.continue();
				}
			};
		});
	},

	async saveTodo(todo) {
		let db = await this.getDb();

		return new Promise(resolve => {
			let trans = db.transaction(["todos"], "readwrite");
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore("todos");
			store.put(todo);
		});
	}
};
