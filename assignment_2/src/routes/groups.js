let express = require('express')
let groupRouter = express.Router()
let db = require('../database');


groupRouter.get('/allGroups', (req, res) => {
    
    console.log("Get all groups");
    let sql = "select * from groups";
    db.all(sql,  (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})

groupRouter.post('/groups', async (req, res) => {

  console.log(req.body)
  
  if (!req.body) {
    return resizeBy.status(400).send('Request body is missing')
  }

  let group = {
    name: req.body.name
  }


  });

})



module.exports = groupRouter