import express from "express";
import passport from "passport";
import SessionController from "./controllers/SessionController";
import UserController from "./controllers/UserController";
import isAuth from "./middlewares/isAuth";
import User from "./models/User";
import errorHandler from "./utils/errors/error-handler";

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

router.get("/auth/google", passport.authenticate("google", { scope: "profile" }));
router.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    return res.json({ message: "OK", user: req.user });
});

router.post('/auth/session', SessionController.store)
router.post('/register', UserController.create)

router.get('/profile', isAuth, async (req, res) => {
    const user = await User.findById(req.user.id)
    return res.json({ user })
})

export default router;
