module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},

	purge: false, // We did this manually

	theme: {
		extend: {
			colors: {
				// bg, text, border
				theme: "var(--global-theme-color)"
			}
		}
	},

	variants: {},

	plugins: []
};
