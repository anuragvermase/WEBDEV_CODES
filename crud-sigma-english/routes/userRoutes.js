const express = require('express');
const {home,createUser, getUsers, deleteUser, editUsers} = require('../controllers/userController.js')

const router = express.Router();

router.get('/', home)
router.post('/createuser',createUser)
router.get('/getuser',getUsers)
router.delete('/deleteuser/:id', deleteUser)
router.put('/updateuser/:id',editUsers)

module.exports = router