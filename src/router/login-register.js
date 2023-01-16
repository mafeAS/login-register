const express=require('express')
const router=express.Router()

const lRcontroller=require('../controllers/logincontroller')
router.get('/',lRcontroller.prueba)

module.exports=router;