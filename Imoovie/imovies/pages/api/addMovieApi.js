// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
   
    const data = req.body;
    const  release_date = new Date(data.release_date)
    
    try {
      const result = await prisma.movie.create({
        data: {
          ...data,
          release_date
         
        },
      });
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured while adding a new movie." });
    }
  };