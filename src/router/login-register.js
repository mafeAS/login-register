const express=require('express')
const router=express.Router()

const lRcontroller=require('../controllers/logincontroller')
router.get('/login',lRcontroller.login)
router.post('/login',lRcontroller.userLogin)
router.get('/register', lRcontroller.register)
router.post('/register', lRcontroller.userRegister)

module.exports=router;