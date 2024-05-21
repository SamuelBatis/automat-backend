import express from "express";

const port = 8000;
const app = express();

app.use(express.json);
app.listen(port, console.log(`listening on port ${port}`));
