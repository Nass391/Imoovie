import Image from 'next/image'
import profilePic from '../public/epi.jpg'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
/* import { getAllBands } from "";
import { getAllmovies } from ""; */


const Footer = () => {

    return (





    <div className="content-evenly space-x-10 flex  justify-center items-center bg-gray-600">

            <Image 
                src={profilePic}
                alt="Picture of the author"

                width={300} automatically provided
                height={0} automatically provided

            />


            <Link href="/contact">
            <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm
            mt-4">CONTACT US</button>
            </Link>


            <Image 
                src={profilePic}
                alt="Picture of the author"

                width={300} 
                height={0} 

            />



    </div>
 
    );
};
 export default Footer;