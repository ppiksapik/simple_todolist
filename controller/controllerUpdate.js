const db = require('../database/server.js');




const update = (req,res) => {
     
  const {taskname, description, deadline, priority, status, id} = req.body;

    const sql = `
  UPDATE output_input_todolist 
  SET taskname = ?, description = ?, deadline = ?, priority = ?, status = ?
  WHERE id = ?
`;

db.query(sql, [taskname, description, deadline, priority, status, id], (err, result) => {
  if (err) {
    console.log(err);
    return res.status(500).json({
      message: `Gagal memperbarui data`
    });
  }

 
  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: `Data dengan ID ${id} tidak ditemukan`
    });
  }

  res.status(200).json({
    message: `Data berhasil diperbarui`,
    affectedRows: result.affectedRows
  });
});



}


module.exports = {
    update,
}



