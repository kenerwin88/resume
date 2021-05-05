const express = require('express');
const app = express();
const ENVIRONMENT = process.env.NODE_ENV;
const port = 9090;

app.use(express.static('dist'));


app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
	console.log(`Resume running on port ${port} in ${ENVIRONMENT} mode`);
});
