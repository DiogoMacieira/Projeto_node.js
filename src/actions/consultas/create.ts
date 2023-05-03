import { Request, Response } from "express";
import { add } from "../../services/consultas";

export default async (request: Request, response: Response) => {
  const { data,hora,medico,especialidade,sala } = request.body;

  const newConsulta = await add(data,hora,medico,especialidade,sala);

  return response.json(newConsulta);
};
