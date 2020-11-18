// WEBPACK CONFIG
module.exports = {
	// ...other vue-cli plugin options...
	pwa: {
		name: 'Clock Todo',
		themeColor: '#ff0000',
		msTileColor: '#ffffff',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black-translucent',

		// configure the workbox plugin
		// workboxPluginMode: 'InjectManifest',
		// workboxOptions: {
			// swSrc is required in InjectManifest mode.
			// swSrc: 'dev/sw.js',
			// ...other Workbox options...
		// }
	},
}
