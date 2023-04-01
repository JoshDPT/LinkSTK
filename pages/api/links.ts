import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const links = await prisma.link.findMany();
		res.status(200).json(links);
	} catch {
		console.error(Error);
		res.status(500).json({ message: 'Internal server error' });
	} finally {
		await prisma.$disconnect();
	}
}
