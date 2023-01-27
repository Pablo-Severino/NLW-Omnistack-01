import express, { json, request, response } from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");

  response.json(["Diego", "Pablo", "Marco", "Maykão"]);
});

app.listen(3333);
