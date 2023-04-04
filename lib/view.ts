// import { PrismaClient, Link, Views } from '@prisma/client'

// const prisma = new PrismaClient()

// export default async function addView(linkId: number): Promise<Views> {
//   console.log('Creating view for link ID:', linkId)

//   const link: Link | null = await prisma.link.findUnique({
//     where: { id: linkId }
//   })

//   if (!link) {
//     throw new Error(`Link with ID ${linkId} not found`)
//   }

//   console.log('Link found:', link)

//   const view: Views = await prisma.views.create({
//     data: {
//       link: { connect: { id: linkId } }
//     }
//   })

//   console.log('View created:', view)

//   return view
// }
