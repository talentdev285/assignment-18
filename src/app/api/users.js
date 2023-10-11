import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "POST") {
    const {
      firstName,
      middleName,
      lastName,
      mobile,
      email,
      passwordHash,
      intro,
      profile,
    } = req.body;
    const registeredAt = new Date();

    const user = await prisma.user.create({
      data: {
        firstName,
        middleName,
        lastName,
        mobile,
        email,
        passwordHash,
        registeredAt,
        intro,
        profile,
      },
    });

    res.json(user);
  } else {
    res.status(405).end(); // Method not allowed
  }
};
