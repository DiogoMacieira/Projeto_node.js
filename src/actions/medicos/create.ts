import { Request, Response } from "express";
import { add } from "../../services/medico";

export default async (request: Request, response: Response) => {
  const { nome,especialidade} = request.body;

  const newMedico = await add(nome, especialidade);

  return response.json(newMedico);
};
