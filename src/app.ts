import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("tá")
})

app.listen(port, (req: Request, res: Response) => {
  console.log(`Listening to port ${port}`);
});
