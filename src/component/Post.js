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
        <div className="h-full w-full bg-yellow-100">
            <NavBar />
            <main className="">
                <section className="flex flex-col w-full min-h-screen"> 
                    <h1 className="text-5xl flex justify-center cursive">Experiences</h1>
                    <h2 className="text-lg font-serif italic text-gray-600 flex justify-center mt-6 mb-12">"Experience is one thing you can't get for nothing."</h2>
                    <div className="grid grid-rows-3 divide-y">
                        {/* Work related  */}
                        <div className="flex flex-col items-start w-full bg-yellow-200 px-96 py-10">
                            <h3 className="text-3xl flex text-green-500 font-serif">Education</h3>
                                {postData && postData.filter(post => post.type==="education").reverse().map((post, index) => (
                                <div className="flex pt-10">
                                    <SinglePost post={post} ></SinglePost>
                                </div>
                                ))}
                        </div>
                        {/* Education */}
                        {/* Work related  */}
                        <div className="flex flex-col items-start py-10 px-96">
                            <h3 className="text-3xl flex text-green-500 font-serif">Work</h3>
                                {postData && postData.filter(post => post.type==="work").reverse().map((post, index) => (
                                <div className="flex pt-10">
                                    <SinglePost post={post} ></SinglePost>
                                </div>
                                ))}
                        </div>
                        <div className="flex flex-col items-start py-10 px-96 bg-yellow-200">
                            <h3 className="text-3xl flex text-green-500 font-serif">Awards</h3>
                            {postData && postData.filter(post => post.type==="award").reverse().map((post, index) => (
                                <div className="flex pt-10">
                                    <SinglePost post={post} ></SinglePost>
                                </div>
                                ))}
                        </div>
                        <div className="flex flex-col items-start py-10 px-96 bg-yellow-100">
                            <h3 className="text-3xl flex text-green-500 font-serif">Certificates</h3>
                            {postData && postData.filter(post => post.type==="certificate").reverse().map((post, index) => (
                                <div className="flex pt-10">
                                    <div className="flex flex-col static">
                                        <h3 className="font-bold font-serif text-2xl"> {post.Institution} {post.title} Level {post.level} </h3>
                                        <h6 className="open-sans font-size pt-3 text-sm text-gray-700"> Obtain Date: {post.Start.slice(0, 7)} </h6>
                                    </div>
                                </div>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
            <Foot className="bg-yellow-200"></Foot>

        </div>


    );

}