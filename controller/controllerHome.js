const db = require("../database/server.js")
const home = (req,res) => {


const sql = `
    SELECT * FROM output_input_todolist
`;

db.query(sql, (err, result) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Database error');
    }

  

    res.render("todo/index", {
        result: result
    });
});
}


module.exports = {
    home
}