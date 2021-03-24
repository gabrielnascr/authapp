import User from "../models/User";
import bcrypt from "bcryptjs";
import { BadRequest, ApiError } from "../utils/errors/ApiError";

export default {
  create: async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email }).exec();

    if (user) {
      throw new BadRequest('User already exists')
    }

    const userCreated = new User({
      name,
      email,
      password: bcrypt.hashSync(password, 8)
    });

    userCreated.save();
    console.log(userCreated)
    return res.json(userCreated);
  },
  show: async (req, res) => {
      
  }
};
