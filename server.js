const express = require("express");
const app = express();
const ENVIRONMENT = process.env.NODE_ENV;
const port = 8080;
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));

app.listen(port, () => {
	console.log(`Resume running on port ${port} in ${ENVIRONMENT} mode`);
});
