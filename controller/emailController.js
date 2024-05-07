const nodemailer=require("nodemailer")
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'amirachoukimechergui@gmail.com',
      pass: 'ihlr rrul zebp lqtj'
    }
  });
 exports.sendEmail=async(req,res)=>{
    const {email,name}=req.body

try {
    var mailOptions={}
    if (req.body.msg){
        mailOptions={
            to:"choukiamira77@gmail.com",
            subject:"mail contact",
          html:`<p>user:${name}</p>
          <p>user email:${email}</p>
          <p>msg:${req.body.msg}</p>`
        }
        
    }
    else{
         mailOptions = {
            from: 'amirachoukimechergui@gmail.com',
            to: email,
            subject: 'bienvenue',
           // text: 'That was easy!'
           html:`<h1 style="color:red;background:blue;">creation de nouveau compte pour M/Mme ${name}</h1> 
          <img src="https://www.shutterstock.com/image-vector/amira-female-name-beautiful-cursive-260nw-1901201509.jpg" alt="logo"/>
          <p>bonjour ${name} </p>  `
        
          }
    }
   
   const info= await  transporter.sendMail(mailOptions, (error, info)=>{
        if (error){
            res.status(400).send({msg:"email send failed",error})
            console.log(error)
        }
         else {
            console.log(info)
       res.status(200).send({msg:"email send successfully"})
        }
      });
} catch (error) {
    res.status(500).send(error)
}
 }
  
  
  