const express = require('express');

const routes = express.Router();
const listsController = require('./controllers/lists');
const cardsController = require('./controllers/cards');
const labelsController = require('./controllers/labels');

routes.get('/lists', listsController.getLists);

routes.post('/cards', cardsController.postCards);

routes.get('/labels', labelsController.getLabels);

module.exports = routes;