//import modules needed
import pg from "pg";

import express from "express";

import dotenv from "dotenv";

import cors from "cors";
dotenv.config();
const dbString = process.env.DATABASE_URL;
const port = process.env.PORT;
// const port = 3400;
const pool = new pg.Pool({
  connectionString: dbString,
});

const app = express();

//middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

//routes
app.get("/blog_posts", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT post_title, blog_post FROM blog_posts"
    );

    if (result.rowCount === 0) {
      res.status(404).send("Not Found");
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error("Unable to grab posts for you!", err);
    res.status(500).send("Internal Server Error: Blog Posts");
  }
});

app.get("/blog_posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT * FROM blog_posts WHERE post_id = $1`,
      [id]
    );
    if (result.rowCount === 0) {
      res.status(404).send("Not Found");
    }
    res.status(200).send(result.rows[0]);
  } catch (err) {
    console.error("Unable to grab the post!", err);
    res.status(500).send("Internal Server Error: Blog Post");
  }
});

//listener
app.listen(port, () => {
  console.log(`I am listening on port: ${port}`);
});
