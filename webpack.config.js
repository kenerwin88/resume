"use strict";

const path = require("path");



module.exports = {
	mode: 'development',
	devtool: "source-map",
	
	stats: {
		colors: true,
		reasons: true,
	},

	entry: {
		bundle: [`${__dirname}/src/root.jsx`],
	},

	target: "web",

	output: {
		path: `${__dirname}/dist/`,
		filename: "[name].js",
		chunkFilename: "[id].js",
		publicPath: "/dist/",
	},


	resolve: {
		modules: ["node_modules", "src"],
		extensions: [".js", ".jsx"],
		alias: {
			img: path.resolve(__dirname, "./img"),
		},
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			},
			{
				test: /\.s(a|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader' ]
			},
			{ test: /\.json$/, exclude: /node_modules/, loader: "json" },
			{
				test: /\.(png|jpg|gif)$/,
				loader: "file-loader",
				options: {
					limit: 100000
				}
			},
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: "file-loader",
				options: {
					name: "fonts/[name].[ext]"
				}
			},
		]
	}
			


		// 	{
		// 		test: /\.scss$/,
		// 		use: [
		// 			{ loader: "style-loader" },
		// 			{
		// 				loader: "css-loader",
		// 				options: { minimize: true, importLoaders: 1 },
		// 			},
		// 			postCSSLoader,
		// 			{
		// 				loader: "sass-loader",
		// 				options: {
		// 					sassOptions: {
		// 						includePaths: [
		// 							path.resolve(__dirname, "./node_modules/compass-mixins/lib"),
		// 						],
		// 					},
		// 					sourceMap: true,
		// 				},
		// 			},
	
		// 		],
		// 	}
		// ],

};





