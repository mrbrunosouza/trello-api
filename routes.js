const express = require('express');
const api = require('./api');

const routes = express.Router();

routes.get('/lists', async (req, res) => {
  const response = await api.get(`boards/${process.env.REACT_APP_BOARD_ID}/lists`)
    
  res.json(response.data.map((item) => ({
    id: item.id,
    name: item.name,
  })))
});

module.exports = routes;