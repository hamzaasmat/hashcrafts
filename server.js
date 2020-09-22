const express = require("express");
const next = require("next");
const path = require("path");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();
const UserModel = require("./server/Model/user");

//DB connection
require("./server/Helper/db");

app.prepare().then(() => {
  const server = express();
  server.use(
    "/images",
    express.static(path.join(__dirname, "images"), {
      maxAge: dev ? "0" : "365d",
    })
  );

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", (req, res) => {
    const { name, email, phone, subject, text } = req.body;

    const user = new UserModel({
        name,
        email,
        phone,
        subject,
        message: text
    });

    user
      .save()
      .then((data) => {
        res.status(200).send("success");
        console.log(data);
      })
      .catch((err) => res.send(err));
  });
  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Read on http://localhost:${PORT}`);
  });
});
