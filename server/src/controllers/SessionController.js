import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { BadRequest, NotFound } from "../utils/errors/ApiError";

export default {
  store: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password').exec();

    if (!user) {
      throw new NotFound('User does not exists.')
    }
    const isEqual = bcrypt.compareSync(password, user.password);
    
    if (!isEqual) {
      throw new BadRequest('Invalid credentials.')
    }

    return res.json({ 
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }, 
      token: jwt.sign({ id: user.id }, "secretkey")
    });
  },
};
