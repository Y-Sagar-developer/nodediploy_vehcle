const express = require("express");
const app = express();
const fs = require("fs");
// const cors = require("cors");

// app.use(cors());
const port = 3000;

app.get("/vehcles", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.status(400).send({ msg: err.message, status: 400 });
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.get("/vehcles/:id", (req, res) => {
  fs.readFile("index.json", "utf-8", (err, data) => {
    if (err) {
      res.status(400).send({ msg: err.message, status: 400 });
    } else {
      let parsedData = JSON.parse(data);
      let filtered = parsedData["vehcle"].filter(
        (val) => val.id == req.params.id
      );

      res.send({
        msg: "Successfully fetched",
        status: 200,
        data: filtered,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
