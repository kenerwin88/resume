const path = require('path');
const express = require('express');
const config = require('./webpack.config');

const compiler = require('webpack')(config);

const app = express();
const ENVIRONMENT = process.env.NODE_ENV;
const port = 9090;

app.use(express.static('dist'));

if (ENVIRONMENT === 'development') {
	// Attach webpack dev server to running app
	(serverInstance => {
		const options = {
			historyApiFallback: true,
			hot: true,
			noInfo: true,
			publicPath: config.output.publicPath
		};

	})(app);
}

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
	console.log(`Resume running on port ${port} in ${ENVIRONMENT} mode`);
});
