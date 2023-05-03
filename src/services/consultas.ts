import { PrismaClient, Consulta } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.consulta.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  data: string,
  hora:string,
  medico: string,
  especialidade:string,
  sala: string,
) =>
  prisma.consulta.create({
    data: {
      data,
      hora,
      medico,
      especialidade,
      sala,
    },
  });

const remove = (id: string) =>
  prisma.consulta.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, consulta: Consulta) =>
  prisma.consulta.update({
    where: { id },
    data: consulta,
  });

  const detail = (id: string) =>
  prisma.consulta.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
