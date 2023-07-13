//import modules needed
import pg from "pg";

const dbString = process.env.DATABASE_URL;
const port = process.env.PORT;

const pool = new pg.Pool({
  connectionString: dbString,
});

import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

//middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

//listener
app.listen(port, () => {
  console.log(`I am listening on port: ${port}`);
});
