// import { PrismaClient, Views } from '@prisma/client';

// const prisma = new PrismaClient();


// export default async function addView(linkId): Promise<void> {
// 	console.log(linkId)
//   // const linkId = 1;
// 	// Find the link by ID
// 	const link = await prisma.link.findUnique({
// 		where: { id: linkId },
// 	});
// 	console.log(link)

// 	// If the link exists, find the Views object for today and increment its viewsCount
// 	if (link) {
// 		const today = new Date();
// 		today.setUTCHours(0, 0, 0, 0);

// 		let views: Views | null = await prisma.views.findUnique({
// 			where: {
// 				id: linkId
// 			},
// 		});

// 		if (views) {
// 			// If the Views object exists, increment its viewsCount
// 			views = await prisma.views.update({
// 				where: { id: views.id },
// 				data: { viewsCount: views.viewsCount + 1 },
// 			});
// 			await prisma.$disconnect();
// 			console.log(`Incremented viewsCount for link ${linkId} on ${today}`);
// 		} else {
// 			// If the Views object does not exist, create a new one for today
// 			views = await prisma.views.create({
// 				data: {
// 					date: today,
// 					link: {
// 						connect: { id: linkId },
// 					},
// 				},
// 			});
// 			await prisma.$disconnect();
// 			console.log(`Added 1 view for link ${linkId} on ${today}`);
// 		}
// 	} else {
// 		await prisma.$disconnect();
// 		console.error(`Link ${linkId} not found`);
// 	}
// }
