// import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest } from "next/server";
// import { env } from "process";
// const nodemailer = require("nodemailer");

//     export default function sendGmail(req:NextApiRequest,res:NextApiResponse){
//         const transporter = nodemailer.createTransport({
//             host:"smtp.gmail.com",
//             port: 587,
//             auth:{
//                 user:process.env.GMAILUSER,
//                 pass:process.env.GMAILPASS,
//             },
//             //添付ファイル送信
//             // attachments:{
//             //     filename:,
//             //     path:,
//             // }
//         });

//         //管理人が受け取るメール
//         const toHostMailData = {
//             from: req.body.email,
//             to:"tyuuta519@gmail.com",
//             subject:`${req.body.title}`,
//             html:`
//                 <h3>ホームページよりメールが届きました。</h3>
//                 <p>【名前】</p>
//                 <p>${req.body.name}</p>
//                 <p>【メールアドレス】</p>
//                 <p>${req.body.email}</p>
//                 <p>【件名】</p>
//                 <p>${req.body.title}</p>
//                 <p>${req.body.email}</p>
//                 <p>【内容】</p>
//                 <p>${req.body.message}</p>
//                 `
//             ,

//         }

//         transporter.sendMail(toHostMailData);

//         return res.send("Success send mail");

        
//     }

import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { env } from "process";

type Data = any
const nodemailer = require('nodemailer')

const auth = {
  user: process.env.GMAILUSER,
  pass: process.env.GMAILPASS,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

const mailData = {
    from: req.body.email,
    to:process.env.GMAILUSER,
    subject:`${req.body.title}`,
    html:`
        <h3>ホームページよりメールが届きました。</h3>
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【件名】</p>
        <p>${req.body.title}</p>
        <p>${req.body.email}</p>
        <p>【内容】</p>
        <p>${req.body.message}</p>
        `
}

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 587,
    auth:{
            user:process.env.GMAILUSER,
            pass:process.env.GMAILPASS,
        },
  })

  const server = await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (success) {
        resolve(success)
      }
      reject(error)
    })
  })
  if (!server) {
    res.status(500).json({ error: 'Error failed' })
  }

  const success = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData).then((info: any, err: any) => {
      if (info.response.includes('250')) {
        resolve(true)
      }
      reject(err)
    })
  })

  if (!success) {
    res.status(500).json({ error: 'Error sending email' })
  }
  res.status(200).json({ success: success })
}
