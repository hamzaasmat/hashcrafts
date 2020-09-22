const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/hash";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connect Sucessful");
  })
  .catch((err) => {
    console.log(`Database Not Connect ${err}`);
  });
