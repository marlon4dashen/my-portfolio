import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import SinglePost from "./SinglePost";
import NavBar from "./NavBar"
import Foot from "./Foot"

export default function Post(){

    const [postData, setPost] = useState(null);

    useEffect(() => {

        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                Institution,
                _id,
                slug,
                type,
                level,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                Start,
                End
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, [])

    return (
        <div className="bg-gradient-to-b from-yellow-200 via-green-400 to-blue-100 h-full">
            <NavBar className="bg-yellow-200"/>
            <main className="min-h-screen p-12">
            <section className="container mx-auto"> 
                <h1 className="text-5xl flex justify-center cursive">Experiences</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">My experiences in a shell</h2>
                <div className="grid gap-3 grid-rows-2 px-32 divide-y ">
                    {/* Work related  */}
                    <div className="container items-start px-24">
                        <h3 className="text-3xl flex text-green-800 font-serif">Work</h3>
                            {postData && postData.filter(post => post.type).reverse().map((post, index) => (
                            <div className="flex py-10">
                                <SinglePost post={post} ></SinglePost>
                            </div>
    ))}
                    </div>
                    {/* Education */}
                    {/* Work related  */}
                    <div className="container items-start px-24 py-10">
                        <h3 className="text-3xl flex text-green-800 font-serif">Education</h3>
                            {postData && postData.filter(post => !post.type).reverse().map((post, index) => (
                            <div className="flex py-10">
                                <SinglePost post={post} ></SinglePost>
                            </div>
    ))}
                    </div>
                </div>

            </section>
        </main>
        <Foot/>
        </div>


    );

}