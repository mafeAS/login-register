const controller={}
const bcrypt=require('bcrypt')

controller.login=(req,res)=>{
    res.render('login.ejs')
}


controller.userLogin=(req,res)=>{
    const data=req.body
    req.getConnection((err,conn)=>{
        conn.query('SELECT*FROM users WHERE email = ?', [data.email],(err,userdata)=>{

            if(userdata.email > 0){
             
                userdata.forEach(element=>{
                    bcrypt.compare(data.password,element.password,(err,isMatch)=>{
                        if(!isMatch){
                            res.render('/login.ejs')
                        }else{
                            console.log('welcome')
                        }
                    })
                })


            }else{
                console.log('no esta funcionando')
            }
        })
    })
}


controller.register=(req,res)=>{
    res.render('register.ejs')
}

controller.userRegister=(req,res)=>{
    const data=req.body
    req.getConnection((err,conn)=>{
        conn.query('SELECT*FROM users WHERE email = ?', [data.email],(err,userdata)=>{
            if(userdata.email>0){
                console.log('ya esta registrado con este usuario')
            }else{
                bcrypt.hash(data.password,12).then(hash=>{
        
                    data.password=hash;
                    req.getConnection((err,conn)=>{
                        conn.query('INSERT INTO users set ?',[data],(err,rows)=>{
                            res.redirect('/')
                        })
                    })
                 })
            }
        })
    })
}
module.exports=controller;