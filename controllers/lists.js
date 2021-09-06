const api = require('../api');

module.exports = {
  getLists: async (req, res) => {
    const response = await api.get(`boards/${process.env.REACT_APP_BOARD_ID}/lists`)
      
    res.json(response.data.map((item) => ({
      id: item.id,
      name: item.name,
    })))
  },
}