const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    console.log("Connecting to DB...");

    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to DB");
        this.connection = mongoose.connection;
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

module.exports = Database;
