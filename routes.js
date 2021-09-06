const express = require('express');
const api = require('./api');

const routes = express.Router();

routes.get('/lists', async (req, res) => {
  const response = await api.get(`boards/6117c125cbd75b52ba86ecae/lists`)
    
  res.json(response.data.map((item) => ({
    id: item.id,
    name: item.name,
  })))
});

module.exports = routes;