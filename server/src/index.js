import express from "express";
import cors from "cors";

const app = express();

async function doGet(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log("status", response.status);
    console.log("ok", response.ok);

    return json;
  } catch (e) {
    console.error(`error -> ${e?.message}`);
  }
}

app.use(
  cors({
    origin: "*",
  })
);



const port = process.env.PORT || 3000;

app.listen(port, () => console.info("listening on " + port));
