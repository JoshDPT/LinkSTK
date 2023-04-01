import { NextApiRequest, NextApiResponse } from 'next';
import addView from '@/lib/addView';

// needs to add some authorization??

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { linkId } = req.body;

		// Validate linkId
		if (!linkId || typeof linkId !== 'string') {
			throw new Error('Invalid linkId');
		}

		// Add view to link
		await addView(linkId);

		// Return success response
		res.status(200).json({ message: 'View added successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}
