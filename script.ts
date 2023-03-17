import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const links = await prisma.link.findMany();
	console.log(links);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
