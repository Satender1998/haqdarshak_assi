const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "sodjvhndjhnfoiwdoiwefoiwjfknalcnasdkf"



const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true, // agar user left or right se koi bi extra space dalta hai to ye remove kr dega
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // agar hamri email ki value match na ho to ek error aan chahiye
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not Valid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //jab ham password ko update karvege tab he hoga
    this.password = await bcrypt.hash(this.password, 12);
  }

  next();
});

// token generate
userSchema.methods.generateAuthtoken = async function () {
  try {
    // payload pass kiya hai kuch bi pass kr skte ho email or kuch bi 
    // but mai yha id pass kr rha hu 
    let newtoken = jwt.sign({ _id: this._id }, SECRECT_KEY, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (error) {
    res.status(400).json(error);
  }
};

// creating model
const users = new mongoose.model("users", userSchema);

module.exports = users;
