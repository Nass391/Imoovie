import Link from "next/link";

import React, { useEffect, useRef, useState } from "react";

import { signIn,signup } from "next-auth/react";
import { signOut } from "next-auth/react"


const Navbar= () => {

    return (
        
    <nav className="bg-gray-700">
    <div className="space-x-6 flow-root font-bold text-neutral-100 p-4 max-w-7xl mx-auto container
    tracking-widest font-neue content-evenly">

      
    <div className="content-evenly space-x-10">
        <Link href="/">
        <a className="text-base md:text-2xl">IMovies
        <span className="text-red-600">Me</span>
        </a>
        </Link>  
        
        




        <input type="text" v-model="searchText" placeholder="Search title.." />
{/* 
        {  <div class="wrapper">
                <div class="card" v-for="post in filteredList" v-bind:key="post.id">
                <a v-bind:href="post.link" target="_blank">
                {{ post.Name }}
                </a>
                </div>
            </div> } */}

{/* 
        <Link href="/signup">
        <a className="float-right text-base md:text-2xl" onClick={e =>{ e.preventDefault(); signup()}}>Sign-Up
        </a>
        </Link> */}
      
      <button className="bg-gray-700 text-white py-3 px-6  rounded text-sm
        mt-4" onClick={()=> signOut()}> Logout</button>
         
        <Link href="/api/auth/signin">
        <a className="float-right text-base md:text-2xl" 
            onClick={e =>{ 
                e.preventDefault(); 
                console.log("Login"); 
                signIn();
                }}>Sign-In
        </a>
        </Link> 
        
          <Link href = "/admin/admin">
                    <a className = "bg-gray-700 text-white py-3 px-6 rounded text-smmt - 4 ">Admin</a>
                </Link>
                <Link href = "/profile">
                    <a className = "bg-gray-700 text-white py-3 px-6 rounded text-smmt - 4 ">My Profile</a>
                </Link>
        

        
    </div>
    </div>
    </nav>
    );
};
 export default Navbar;








       
