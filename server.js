const express = require('express');
const app = express();

app.use("/test", express.static("_public/inputtest.html"));

app.listen(3000);