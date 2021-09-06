const api = require('../api');

module.exports = {
  getLabels: async (req, res) => {
    const response = await api.get(`boards/${process.env.REACT_APP_BOARD_ID}/labels`)
      
    res.json(response.data.map((item) => ({
      id: item.id,
      name: item.name,
      color: item.color,
    })))
  },
}