require('dotenv/config');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());

server.use(express.json());

server.use(routes);


server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, server.settings.env);
});