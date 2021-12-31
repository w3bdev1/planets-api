const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Planet = require("./models/planet");
const PORT = process.env.PORT || 8000;

// Express app
const app = express();

// Environment Variables
dotenv.config();

// Connect to DB
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWD}@mongo.jynjm.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  })
  .catch((err) => console.log("Could not connect :(", err));

// Routes
app.get("/all", async (_, res) => {
  try {
    const data = await Planet.find();
    if (!data) {
      throw new Error("Something went wrong!");
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ "Server Error": err.message });
  }
});

app.get("/:planet", async (req, res) => {
  try {
    const data = await Planet.findOne({
      slug: req.params.planet.toLowerCase(),
    });

    if (!data) {
      throw new Error("Are you going beyond solar system?");
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});
