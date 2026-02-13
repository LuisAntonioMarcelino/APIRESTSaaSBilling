import express from "express";
import router from "../routes/routes.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API online");
});
app.use(router);

export default app;
