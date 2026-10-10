require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

const Router = require('./routes/Routes.js')

app.use('/', Router)
 
app.use((req,res) => {
    res.status(404).send("404 | halaman tidak ditemukan");

});

app.listen(PORT, () => {
    console.log(`server berjalan di http://localhost:${PORT}`);
})  