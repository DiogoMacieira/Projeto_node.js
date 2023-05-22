import { PrismaClient, Consulta } from "@prisma/client";
import dayjs from "dayjs";
export const prisma = new PrismaClient();

const all = () =>
  prisma.consulta.findMany({
    where: {
      deleted: false,
    },
  });

const add = async (
  datahora: Date,
  nomeMedico: string,
  nomeUtente: string,
  especialidade: string,
  observacoes: string,
  sala: string
) => {
  const consulta = await prisma.consulta.create({
    data: {
      datahora: dayjs(datahora).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      NomeMedico: nomeMedico,
      NomeUtente: nomeUtente,
      especialidade,
      sala,
      observacoes,
    },
  });

  return consulta;
};

const remove = (id: string) =>
  prisma.consulta.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

const update = (
  id: string,
  datahora: Date,
  nomeMedico: string,
  nomeUtente: string,
  especialidade: string,
  observacoes: string,
  sala: string
) =>
  prisma.consulta.update({
    where: { id },
    data: {
      datahora: dayjs(datahora).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      NomeMedico: nomeMedico,
      NomeUtente: nomeUtente,
      especialidade,
      observacoes,
      sala,
    },
  });

export { all, add, remove, update, detail };

const detail = (id: string) =>
  prisma.consulta.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove, update, detail };
