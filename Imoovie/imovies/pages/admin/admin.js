 import CrudMovie from "../../components/CrudMovie.js"
import CrudUser from "../../components/CrudUser.js"
import axios from "axios";
import { server } from "../../config";
// import CrudApi from "../../components/CrudApi.js"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

export default function Admin({movies, users}) {

  return (<>
    <h1>Hello</h1>
    <CrudMovie movies={movies}/>
    <CrudUser users={users}/>
    {/* <CrudApi movies={movies.results}/> */}
  </>)
}

export async function getServerSideProps() {
  // const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  // const movies = res.data;
  const allUser = await prisma.user.findMany({});
  const users = JSON.parse(JSON.stringify(allUser));

  
  const allMovie = await prisma.movie.findMany({});
   const movies = JSON.parse(JSON.stringify(allMovie));
  // const {id} = context.params;
  // const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  
  return{
      props: { movies, users }
};
}
  