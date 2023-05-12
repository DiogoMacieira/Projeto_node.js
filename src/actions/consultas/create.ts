import { Request, Response } from "express";
import { add } from "../../services/consultas";

export default async (request: Request, response: Response) => {
  const { datahora, nomeMedico, nomeUtente, especialidade, observacoes, sala } =
    request.body;

  const newConsulta = await add(
    datahora,
    nomeMedico,
    nomeUtente,
    especialidade,
    observacoes,
    sala
  );

  return response.json(newConsulta);
};
