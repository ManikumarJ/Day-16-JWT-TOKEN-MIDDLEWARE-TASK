import middleDataModel from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createData = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await middleDataModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await middleDataModel.create({ name, email, password: hashedPassword,});

    return res.status(201).json({ msg: "User Registered Successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};