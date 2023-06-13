import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3333;

app.get("/", (req, res) => {
  res.status(200).send("ahoy");
});

app.listen(port, () => {
  console.log("its alive");
});
