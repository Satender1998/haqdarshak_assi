const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

// email config
const tarnsporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.userregister = async (req, res) => {
  const { fname, email, password } = req.body;

  if (!fname || !email || !password) {
    res.status(400).json({ error: "Please Enter All Input Data" });
  }

  try {
    const presuer = await users.findOne({ email: email }); // we are matching the backend email to frontend email 1st one is from backend and 2nd one is from frontend

    if (presuer) {
      res.status(400).json({ error: "This User Allready exist in our db" });
    } else {
      const userregister = new users({
        fname,
        email,
        password,
      });

      // here password hasing

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

exports.userOtpSend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Please Enter Your Email" });
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email });

      // user already register hai or vo dubra otp generate kr rha hai
      // uske liye hai ye condition

      if (existEmail) {
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );
        await updateData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Eamil For Otp Validation",
          text: `OTP:- ${OTP}`,
        };

        tarnsporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      } else {
        const saveOtpData = new userotp({
          email,
          otp: OTP,
        });

        await saveOtpData.save();
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Eamil For Otp Validation",
          text: `OTP:- ${OTP}`,
        };

        tarnsporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      }
    } else {
      res.status(400).json({ error: "This User Not Exist In our Db" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

exports.userLogin = async (req, res) => {
  const { email, otp } = req.body;
  // console.log(email, typeof(otp));

  if (!otp || !email) {
    res.status(400).json({ error: "Please Enter Your OTP and email" });
  }

  try {
    const otpverification = await userotp.findOne({ email: email });
    // console.log(typeof(otpverification.otp));

    if(otpverification.otp == otp) {
      // console.log("preuser");
      const preuser = await users.findOne({ email: email });

      // token generate
      const token = await preuser.generateAuthtoken();
      res
        .status(200)
        .json({ message: "User Login Succesfully Done", userToken: token });
    } else {
      res.status(400).json({ error: "Invalid Otp" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

exports.userLogout = async (req, res) => {
  console.log("hello");

  
  try {
    req.user.tokens = []; // Clear all tokens for the user
    await req.user.save(); // Save the user object to update the changes

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Unable to logout", error });
  }
};
