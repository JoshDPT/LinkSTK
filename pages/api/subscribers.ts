import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method not allowed' });
      return;
    }

    if (!req.body || !req.body.email) {
      res.status(400).json({ message: 'Invalid request body' });
      return;
    }

    const { email } = req.body;
    const today = new Date();

    const sub = await prisma.subscriber.create({
      data: {
        email: email,
        date: today,
      },
    });

    await prisma.$disconnect();
    res.status(200).json(sub);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
