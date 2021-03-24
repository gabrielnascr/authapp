import passport from "passport";
import { Strategy } from "passport-google-oauth20";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID:
        "2798939176-6bradkglpnc5ulfnd2hammapf3gebtfr.apps.googleusercontent.com",
      clientSecret: "Hgr-0DRE-nWPpVzsV56xCL6f",
      callbackURL: "http://localhost:8081/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      try {
        return done(null, profile);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
