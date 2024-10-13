const express = require("express");
const router = require("./routes");
const app = express();
//configure express to handle json format
app.use(express.json())
const port = 3030;
app.use("/", express.static("public"));
app.use("/", router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
