import { PrismaClient, Utente } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.utente.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  idade: number,
  genero:string,
  morada:string,
  contato: string,
) =>
  prisma.utente.create({
    data: {
      nome,
      idade,
      genero,
      morada,
      contato,
    },
  });

const remove = (id: string) =>
  prisma.utente.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, utente: Utente) =>
  prisma.utente.update({
    where: { id },
    data: utente,
  });

  const detail = (id: string) =>
  prisma.utente.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
