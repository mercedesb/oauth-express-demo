require('dotenv').config()

const http = require("http");
const express = require("express");
const passport = require("passport");

const { HOST, PORT, HTTPS_KEY, HTTPS_CERT } = require("./config");
const KitOAuth = require("./kit-oauth");

const app = express();
const server = http.createServer(app);

passport.use(KitOAuth);
app.get("/oauth/kit", passport.authenticate("oauth2"));
app.get(
  "/oauth/kit/callback",
  passport.authenticate("oauth2", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => res.redirect(KitOAuth.KIT_OAUTH_INSTALL_REDIRECT)
);

server.listen(PORT, "0.0.0.0", () => console.log(`Listening on :${PORT}`));
