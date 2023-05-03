import { Request, Response } from "express";
import { add } from "../../services/utente";

export default async (request: Request, response: Response) => {
  const { nome,idade,genero,morada,contato } = request.body;

  const newUtente = await add(nome, idade, genero, morada, contato);

  return response.json(newUtente);
};
