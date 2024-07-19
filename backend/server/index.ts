require("dotenv").config();
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema/schema";
import connectDB from "./config/db";
const express = require("express");
const colors = require("colors");
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

connectDB();

const corsOptions = {
  origin: process.env.CLIENT_URI,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(req.query, req.body, req.params);
  next();
});

app.all(
  "/graphql",
  createHandler({
    schema,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
