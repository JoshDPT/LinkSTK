import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// needs to add some authorization??

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

	const { id } = req.body;

	// first, update views on the link itself
	const updatedLink = await prisma.link.update({
		where: { id: id },
		data: { clicks: { increment: 1 } },
	});

	const today = new Date();
	// Set the hours, minutes, seconds, and milliseconds to 0
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	today.setMilliseconds(0);

	// Check if a View row already exists for the current date and linkId
	const existingView = await prisma.view.findFirst({
		where: {
			linkId: id,
			date: today,
		},
	});

	if (existingView) {
		// If a View row exists, increment the viewsCount
		let views = await prisma.view.update({
			where: {
				id: existingView.id,
			},
			data: {
				viewsCount: existingView.viewsCount + 1,
			},
		});
		await prisma.$disconnect();
		res.status(200).json(views);

	} else {
		// If a View row does not exist, create a new row
		let views = await prisma.view.create({
			data: {
				date: today,
				viewsCount: 1,
				link: {
					connect: {
						id: id,
					},
				},
			},
		});
		await prisma.$disconnect();
		res.status(200).json(views);
	}
}
