// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function addView(linkId: number) {
//   const today = new Date().toISOString().slice(0, 10); // get current date in YYYY-MM-DD format

//   const result = await prisma.views.upsert({
//     where: {
//       link: linkId,
//     },
//     create: {
//       date: today,
//       viewsCount: 1,
//       link: {
//         connect: {
//           id: parseInt(linkId),
//         },
//       },
//     },
//     update: {
//       viewsCount: {
//         increment: 1,
//       },
//     },
//     select: {
//       viewsCount: true,
//     },
//   });

//   await prisma.$disconnect();
//   console.log(`Views for link ${linkId} on ${today}: ${result.viewsCount}`);
// }
