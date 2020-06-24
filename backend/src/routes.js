const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');


const routes = express.Router();

routes.get("/users", UserController.index);
routes.get("/users/:email", UserController.show);
routes.post("/users", UserController.create);

routes.post("/sessions", SessionController.create);

routes.get("/posts" , PostController.index);
routes.get("/posts/asc" , PostController.indexAsc);
routes.get("/posts/:id" , PostController.show);
routes.get("/posts/limit/:limit" , PostController.showIndex);
routes.post("/posts" , PostController.create);


module.exports = routes;