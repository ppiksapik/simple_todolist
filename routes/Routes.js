const express = require("express");
const router = express.Router();

const {Delete} = require('../controller/controllerDelete.js')
const {create} = require('../controller/controllerTodolist.js')
const {home} = require('../controller/controllerHome.js')
const {update} = require('../controller/controllerUpdate.js')

router.get('/', home)
router.post('/create', create)
router.post('/update', update)
router.delete('/todo/:id', Delete)
module.exports = router; 