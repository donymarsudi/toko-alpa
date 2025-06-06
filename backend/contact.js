import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { nama, email, subjek, pesan } = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: "donimarsudi16@gmail.com",
        subject: subjek,
        text: pesan,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: "Pesan berhasil dikirim", error: null });
    } catch (error) {
      console.error("Email Error:", error);
      res.status(500).json({ error: "Gagal mengirim pesan", success: null });
    }
  } else {
    res.status(405).json({ msg: "Metode tidak diizinkan" });
  }
}
