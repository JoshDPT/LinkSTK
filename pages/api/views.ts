// import type { NextApiRequest, NextApiResponse } from 'next';
// import addView from '@/lib/view';

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	const { linkId } = req.query;
// 	console.log(linkId);

// 	try {
// 		const view = await addView(Number(linkId));
// 		res.status(200).json(view);
// 	} catch (error) {
// 		if (error instanceof Error) {
// 			res.status(500).json({ error: error.message });
// 		} else {
// 			res.status(500).json({ error: 'Unknown error occurred' });
// 		}
// 	}
// }
