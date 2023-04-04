import { PrismaClient } from '@prisma/client';

export default async function getLinks() {
	const prisma = new PrismaClient();
	const links = await prisma.link.findMany();
	// const links = await prisma.link.findMany({
	// 	include: {
	// 		views: true,
	// 	},
	// });
	await prisma.$disconnect();
  return links;
}
