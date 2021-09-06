const api = require('./api');

module.exports = {
  postCards: async (req, res) => {
      const result = await api.post(`cards`, null, {
        params: {
          name: req.body.name,
          desc: req.body.description,
          idList: req.body.idList,
          idLabels: req.body.idLabels,
        }
      })

      const idCard = result.data.id

      const checklistResult = await api.post(`checklists`, null, {
        params: {
          idCard,
          name: 'Opções'
        }
      })

      const idChecklist = checklistResult.data.id

      await api.post(`checklists/${idChecklist}/checkItems`, null, {
        params: {
          name: 'Opção 01',
          checked: req.body.option1
        }
      })

      await api.post(`checklists/${idChecklist}/checkItems`, null, {
        params: {
          name: 'Opção 02',
          checked: req.body.option2
        }
      })

      await api.post(`checklists/${idChecklist}/checkItems`, null, {
        params: {
          name: 'Opção 03',
          checked: req.body.option3
        }
      })

      res.send();
  },
}