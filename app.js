const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

const ApiRoutes = require("./routes/apiRoutes");
ApiRoutes(app);




app.listen( 8000, () => console.log(`Listening on port 8000.`) );