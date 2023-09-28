const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: ["vuetify"],
	assetsDir: "dist/static",
	pwa: {
		iconPaths: {
			favicon32: "icons/favicon-32x32.png",
		},
	},
});
