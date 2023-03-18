import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		res.status(405).json({ message: 'Method not allowed' });
		return;
	}

	if (!req.body || !req.body.id || !req.body.clicks) {
		res.status(400).json({ message: 'Invalid request body' });
		return;
	}

	const { id, clicks } = req.body;

	try {
		const updateLink = await prisma.link.update({
			where: {
				id: id,
			},
			data: {
				clicks: clicks,
			},
		});
		res.status(200).json(updateLink);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Something went wrong.' });
	}
}
