const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth2").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/user.model");
const { v4 } = require("uuid");
const newToken = require("./jwt");

// google-oauth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const { displayName, email } = profile;
      // check if user exists
      let user = await User.findOne({ email: email });

      if (!user) {
        // if not create one
        user = await User.create({
          name: displayName,
          email: email,
          password: v4(),
          roles: ["buyer"],
        });
      }
      let token = newToken(user);
      request.user = user;
      request.token = token;
      return done(null, { user, token });
    }
  )
);

// facebook-oauth
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:8000/auth/facebook/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      // const { displayName, email } = profile;
      // // check if user exists
      // let user = await User.findOne({ email: email });

      // if (!user) {
      //   // if not create one
      //   user = await User.create({
      //     name: displayName,
      //     email: email,
      //     password: v4(),
      //     roles: ["buyer"],
      //   });
      // }
      // let token = newToken(user);
      // request.user = user;
      // request.token = token;
      // return done(null, { user, token });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;
