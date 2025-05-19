// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);

//---------------------------------------------------------------------------------------

const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// Bind the router db to the app
app.db = router.db;

app.use(cors());
app.use(jsonServer.defaults());
app.use(auth); // <== Add auth middleware before router
app.use(router);

app.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});