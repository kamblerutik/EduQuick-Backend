const express = require("express");
const cors = require("cors");
const ConnetDB = require("./Database/db");
const router = require("./Router/Router");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

ConnetDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
});
