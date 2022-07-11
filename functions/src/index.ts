import * as functions from "firebase-functions";
const express = require("express");
const cors = require("cors");

const app = express();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

const admin = require("firebase-admin");

app.get("/", (req: any, res: any) => {});

app.post("/", async (req: any, res: any) => {
  const user = req.body;
  await admin.firestore().collection("users").add(user);
  res.status(201).send();
});

exports.user = functions.https.onRequest(app);

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
