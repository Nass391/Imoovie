// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const {
    id,
    poster,
    title,
    overview,
    date,
 } = req.body;
  try {
    const updateMovie = await prisma.movie.update({
      where: {
        id: parseInt(id),
      },
      data: {
        poster,
        title,
        overview,
        date,
      },
    });
    res.status(200).json(updateMovie);
  } catch (error) {
    res.status(403).json({ err: "Error occurred while updating a movie ." });
  }
};