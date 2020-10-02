const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://Waleed:1458@cluster0.h9e71.mongodb.net/<dbname>?retryWrites=true&w=majority";
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
