const time=(req,res,next)=>{
   
    const date= new Date()
        console.log(date.getDay() )
        console.log(date.getHours())

        if (date.getDay()==6||date.getDay()==0 &&( date.getHours() >=9||date.getHours()<=17)){
            res.sendFile(path.join(__dirname, '/closed.html'))
        }
       else {
            next()
        }
      
      };

module.exports=time