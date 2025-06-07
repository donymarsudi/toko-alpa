// import nodemailer from "nodemailer";
// import { buffer } from "micro";
// import dotenv from "dotenv";
// dotenv.config();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//     return;
//   }

//   if (req.method === "POST") {
//     try {
//       const rawBody = await buffer(req);
//       const { nama, email, subjek, pesan } = JSON.parse(rawBody.toString());

//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS,
//         },
//       });

//       const mailOptions = {
//         from: email,
//         to: "donimarsudi16@gmail.com",
//         subject: subjek,
//         text: pesan,
//       };

//       await transporter.sendMail(mailOptions);

//       res.status(200).json({ success: "Pesan berhasil dikirim", error: null });
//     } catch (error) {
//       console.error("Email Error:", error);
//       res.status(500).json({ error: "Gagal mengirim pesan", success: null });
//     }
//   } else {
//     res.status(405).json({ msg: "Metode tidak diizinkan" });
//   }
// }
