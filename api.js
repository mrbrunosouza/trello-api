const axios = require('axios')

const api = axios.create({
  baseURL: 'https://api.trello.com/1',
  params: {
    key: "708b4f68ff827836d0afb9f6e0e4e9d4",
    token: "bbcf8b5de448f4ddc7a887248a7d663f0878028e4e8dec47a1f106a83b2493de",
  }
});

module.exports = api;