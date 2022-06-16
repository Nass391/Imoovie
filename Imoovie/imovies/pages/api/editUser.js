// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const {
    id,
    username,
    email,
    password,
    role,
 } = req.body;
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        username,
        email,
        password,
        role,
      },
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(403).json({ err: "Error occurred while updating a user ." });
  }
};