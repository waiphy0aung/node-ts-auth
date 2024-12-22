import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParse from "cookie-parser";
import compression from "compression";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParse());
app.use(bodyParser.json());

const port = 8080

const server = http.createServer(app);

server.listen(port,() => {
  console.log("Server runnin on http://localhost:"+port)
})
