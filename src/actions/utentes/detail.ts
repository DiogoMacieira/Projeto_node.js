import { Request, Response } from "express";
import { detail } from "../../services/utente";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const utente = await detail(String(id));

  if (!utente) {
    return response.status(404).json({
      code: 404,
      message: "Utente not found",
    });
  }

  return response.json(utente);
};
