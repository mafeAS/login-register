const express=require('express')
const morgan =require('morgan')
const app=express()
const path=require('path')
const mysql=require('mysql')
const myConnetion=require('express-myconnection')

//-----------importando rutas-----------------------
const loginRoutes=require('./router/login-register')

//--------------crear APP----------------------------
app.set('port', process.env.PORT||3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//-------------archivos estativos-----------------------
app.use(express.static(path.join(__dirname,'public')))


//--------------routes--------------------------
app.use('/',loginRoutes)

//---------------empezando servidor---------------------
app.listen(app.get('port'),()=>{
    console.log('servidor escuchando puerto 3000')
})



