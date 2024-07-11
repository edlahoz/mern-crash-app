require("dotenv").config();
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";
const express = require("express");
import connectDB from "./config/db";
const colors = require("colors");
const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
