const esbuild = require("esbuild");
const sassPlugin = require("esbuild-sass-plugin");
const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist");
const srcHtmlPath = path.join(__dirname, "index.html"); // Replace with actual path if it's different
const distHtmlPath = path.join(distPath, "index.html");

// Create the dist directory if it doesn't exist
if (!fs.existsSync(distPath)) {
	fs.mkdirSync(distPath);
}

// Copy the HTML file
fs.copyFileSync(srcHtmlPath, distHtmlPath);
esbuild
	.build({
		entryPoints: [`${__dirname}/src/root.jsx`],
		outdir: `${__dirname}/dist/`,
		sourcemap: true,
		bundle: true,
		target: ["es2017"], // similar to '@babel/preset-env', { targets: "defaults" }
		platform: "browser",
		external: [
			"mdi/css/materialdesignicons.min.css",
			"~mdi/css/materialdesignicons.min.css",
		],
		loader: {
			".png": "file",
			".jpg": "file",
			".gif": "file",
			".ttf": "file",
			".otf": "file",
			".eot": "file",
			".svg": "file",
			".woff": "file",
			".woff2": "file",
		},
		plugins: [sassPlugin.sassPlugin()],
		define: {
			"process.env.NODE_ENV": '"development"',
		},
		resolveExtensions: [".js", ".jsx"],
		alias: {
			img: path.resolve(__dirname, "./img"),
		},
	})
	.catch(() => process.exit(1));
