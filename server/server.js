import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

import google from "./utils/googleSheet.js";
import insertRecordinZohoCRM from "./utils/zohoCRM.js";
import zoho from "./utils/zoho.js";
import sendEmail from "./utils/sendEmail.js";

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("api hit for cookie");
  res.cookie("jwt", "refreshToken", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ msg: "cookie successfully" });
});

app.get("/refresh", (req, res) => {
  console.log("api hit for refresh", req.cookies);
  res.status(200).json({ msg: "cookie successfully done" });
});

sendEmail("wix");
// app.get("/api/google", google);
// app.get("/api/zoho", zoho);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
