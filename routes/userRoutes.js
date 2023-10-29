const express = require('express');
const router = express.Router()
const { createUser, getUser, getSingleUser, updateUser, deleteUser } = require('../controllers/controller')

router.get('/get-user', getUser)
router.get('/get-single-user/:id', getSingleUser)

router.post('/create-user', createUser)
router.post('/update-user/:id', updateUser)
router.delete('/delete-user/:id', deleteUser)
/* to use router in another file */
module.exports = router