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
  data: Date | string,
  hora: Date | string,
  medicoId: string,
  especialidade: string,
  utenteId: string,
  sala: string,
  observacoes?: string
) => {
  const consulta = await prisma.consulta.create({
    data: {
      data: dayjs(data).format("YYYY-MM-DD"),
      hora: dayjs(hora).format("HH:mm"),
      medicoId,
      especialidade,
      utenteId,
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

export { all, add, remove, update, detail };
