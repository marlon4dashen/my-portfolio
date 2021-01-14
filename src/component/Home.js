import React from "react";
import image from "../background.jpg";

export default function Home(){

    return (

        <main>
            <img src={image} alt="backgroundimg" className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt12 lg:pt-64 px 8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hola, I am Marlon</h1>
              
            </section>
        </main>

    )

}