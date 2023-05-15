const express = require('express');
const app = express();
const ENVIRONMENT = process.env.NODE_ENV;
const port = 9090;
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));  // Assuming 'server.js' is your HTML file
  });


app.listen(port, () => {
	console.log(`Resume running on port ${port} in ${ENVIRONMENT} mode`);
});
