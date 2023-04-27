import { PrismaClient } from '@prisma/client';

export default async function getViews() {
	const prisma = new PrismaClient();
	const views = await prisma.view.findMany();
	await prisma.$disconnect();
  return views;
}