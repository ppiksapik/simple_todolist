
const db = require("../database/server.js");

const Delete = (req,res) => {
    const id = req.params.id;
    4
    const sql = `
    DELETE FROM output_input_todolist
    WHERE id = ?
    `;


    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }

         
         const checkSql = `
            SELECT COUNT(*) AS total
            FROM output_input_todolist
        `;

        db.query(checkSql, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Database error')
            }

          
            if (result[0].total === 0) {
                db.query(`ALTER TABLE output_input_todolist AUTO_INCREMENT = 1`, 
                    (err) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send('Database error');
                        }

                        res.json({
                            Message: 'Data dihapus dan ID direset'
                        });

                        console.log("data berhasil di hapus dan id diriset")
                    }
                )
            } else {
                res.json({
                    message: 'Data berhasil dihapus'
                })
                console.log("data berhasil hapus");
            }


        })

    });
}

module.exports = {
    Delete
}