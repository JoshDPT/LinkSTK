// import { PrismaClient } from '@prisma/client';
// import { NextApiRequest, NextApiResponse } from 'next';
// import * as z from 'zod';

// const prisma = new PrismaClient();

// // model Link {
// //   title  String
// //   href   String
// //   image  String?
// //   clicks Int
// // }

// const linkSchema = z.object({
// 	title: z.string().nonempty(),
// 	href: z.string().nonempty(),
// 	image: z.string().optional(),
// 	clicks: z.number(),
// });

// // allow only requests from your client's IP address
// // const allowOnlyFromClientIP = allowOnlyFromIPs(['1.2.3.4']);

// export default async function handler(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	// apply the middleware to the handler function
// 	// allowOnlyFromClientIP(req, res, async function() {
// 	switch (req.method) {
// 		case 'GET':
// 			const links = await prisma.link.findMany();
// 			res.status(200).json(links);
// 			break;

// 		case 'POST':
// 			try {
// 				const { title, href, image, clicks } = linkSchema.parse(req.body);
// 				const link = await prisma.link.create({
// 					data: {
// 						title,
// 						href,
// 						image,
// 						clicks,
// 					},
// 				});
// 				res.status(201).json(link);
// 			} catch (error) {
// 				res.status(400).json({ message: error.message });
// 			}
// 			await prisma.$disconnect();
// 			break;

// 		default:
// 			res.status(405).json({ message: 'Method not allowed' });
// 			await prisma.$disconnect();
// 			break;
// 	}
// 	// });
// }

// // export function allowOnlyFromIPs(allowedIPs: string[]) {
// //   return function(req: NextApiRequest, res: NextApiResponse, next: () => void) {
// //     const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
// //     if (!allowedIPs.includes(clientIP)) {
// //       res.status(403).send('Forbidden');
// //     } else {
// //       next();
// //     }
// //   };
// // }
