import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newClicks = clicks + 1;
		const updateLink = await prisma.link.update({
			where: {
				id: id,
			},
			data: {
				clicks: newClicks,
			},
		});
    res.status(200).json(clicks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
}