import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { env } from "process";
const nodemailer = require("nodemailer");

    export default function sendGmail(req:NextApiRequest,res:NextApiResponse){
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port: 587,
            auth:{
                user:process.env.GMAILUSER,
                pass:process.env.GMAILPASS,
            },
            //添付ファイル送信
            // attachments:{
            //     filename:,
            //     path:,
            // }
        });

        //管理人が受け取るメール
        const toHostMailData = {
            from: req.body.email,
            to:"tyuuta519@gmail.com",
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
            ,

        }

        transporter.sendMail(toHostMailData);

        return res.send("Success send mail");
    }
