// Import the express lirbary
require("dotenv").config();

const cors = require("cors");
const express = require("express");
const axios = require("axios");
// Create a new express application and use
// the express static middleware, to serve all files
// inside the public directory
//
const href = process.env.HREF || "/login/oauth/authorize";
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirect_to_url = process.env.REDIRECT_TO_URL || "/welcome.html";
const redirectUri =
  process.env.REDIRECT_URI || "http://localhost:8080/oauth/redirect";
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/public/views");
app.set("view engine", "pug");

app.get("/", (_, res) => {
  res.render("./index.pug", { href, clientID, redirectUri });
});

// Declare the redirect route
app.get("/oauth/redirect", (req, res) => {
  // The req.query object has the query params that
  // were sent to this route. We want the `code` param
  const requestToken = req.query.code;
  axios({
    // make a POST request
    method: "post",
    // to the Github authentication API, with the client ID, client secret
    // and request token
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSOn
    headers: {
      accept: "application/json",
    },
  })
    .then((response) => {
      // Once we get the respons extract the access token from
      // the response body
      const accessToken = response.data.access_token;
      // redirect the user to the welcome page, along with the access token
      res.redirect(`${redirect_to_url}?access_token=${accessToken}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/login/oauth/authorize", (req, res) => {
  // fake oauth service
  const redirect = req.query.redirect_uri;
  res.redirect(301, redirect);
  //
});

app.get("/oauth/redirect/dummyjson", (_, res) => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  })
    .then((r) => r.json())
    .then((r) => {
      const tok = r?.token;
      // res.send(r);
      res.redirect(301, `${redirect_to_url}?access_token=${tok}`);
    })
    .catch((e) => {
      res.send(e?.message);
    });
});

app.listen(PORT, () => {
  console.log("dirname ", __dirname);
  console.log("href ", href);
  console.log("redirect to url ", redirect_to_url);
  console.log("redirect uri ", redirectUri);
  console.log("listening on", PORT);
  console.log("client_secret ", clientSecret);
  console.log("client_id", clientID);
});
