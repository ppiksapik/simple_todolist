const db = require('../database/server.js');


const create = (req,res) => {

  const {taskname, description, deadline, priority, status} = req.body;


  const sql = `
  INSERT INTO output_input_todolist (taskname, description, deadline, priority, status)
  VALUES (?,?,?,?,?)
  `;

   db.query(sql, [taskname, description, deadline, priority, status], (err,result) => {
    if (err) {
        console.log(err);

        return res.status(500).json({
            message: `Gagal memasukkan data`
        });


    }


       res.status(201).json({
        messagge:  `Data berhasil dimasukkan`,
        id: result.insertId
      });

    
   });



};


module.exports = {
    create
};