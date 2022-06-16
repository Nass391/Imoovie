import Hero from "../components/Hero";
import axios from "axios";
import { server } from "../config";
import PopularMovie from "../components/PopularMovie";

import AccessDenied from '../components/accessDenied';
import { getSession, useSession,logout, signIn } from 'next-auth/react';
import Layout from '../components/Layout'

// export async function getServerSideProps(ctx) {
//   const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
//   const movies = res.data;
//   const session = await getSession(ctx);
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default function Home({movies}) {
  console.log(movies);
   const  { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <div className="bg-gray-700">
    <Hero/>
    <PopularMovie movies={movies} />

     
    </div>
  )
}
export async function getServerSideProps() {
  //  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  //  const movies = res.data;
  //  console.log(movies);
  
  const allMovie = await prisma.movie.findMany({});
  const movies = JSON.parse(JSON.stringify(allMovie));
  const session = await getSession(ctx);

  return{
    props: { session, movies }
  }
  
}

 
  



 