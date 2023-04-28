import { PrismaClient, Product } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.product.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  idade: number,
  genero: string,
  contato: number,
  morada?: string
) =>
  prisma.product.create({
    data: {
      name,
      price,
      description,
    },
  });

const remove = (id: string) =>
  prisma.product.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, add, remove };
