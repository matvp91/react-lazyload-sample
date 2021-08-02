import React from "react";
import express from "express";
import App from "./App";
import { renderToString } from "react-dom/server";

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const content = renderToString(<App />);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Sample</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <style>body { margin: 0; }</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="main.js"></script>
      </body>
    </html>
  `);
});

app.listen(3000);
