// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import "./utils/db.js";
// import dotenv from "dotenv";
// dotenv.config();
// import AlpaProducts from "./model/alpaProducts.js";

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.json());

// app.get("/", async (req, res) => {
//   try {
//     const products = await AlpaProducts.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ msg: "Gagal mengambil produk" });
//   }
// });

// app.post("/contact", (req, res) => {
//   try {
//     const { nama, email, subjek, pesan } = req.body;
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "donimarsudi16@gmail.com",
//       subject: subjek,
//       text: pesan,
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.error(err);
//         res.send("Gagal mengirim pesan.");
//       } else {
//         console.log("Email terkirim:", info.response);
//         res.send("Pesan berhasil dikirim!");
//       }
//     });
//     res.status(200).json({ success: "Pesan berhasil dikirim", error: null });
//   } catch (error) {
//     res.status(500).json({ error: "Gagal mengirim pesan", success: null });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

// import AlpaProducts from "./model/alpaProducts.js";
import "./utils/db.js";
import mongoose from "mongoose";
mongoose.model("AlpaProducts", {
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const products = await AlpaProducts.find();
      res.status(200).json(products);
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ msg: "Gagal mengambil produk" });
    }
  } else {
    res.status(405).json({ msg: "Metode tidak diizinkan" });
  }
}
