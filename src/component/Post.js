import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";


export default function Post(){

    const [postData, setPost] = useState(null);

    useEffect(() => {

        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                type,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, [])

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto"> 
                <h1 className="text-5xl flex justify-center cursive">Experiences</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">My experiences in a shell</h2>
                <div className="grid gap-6 grid-cols-2 divide-x">
                    {/* Work related  */}
                    <div className="grid grid-cols-1 gap-8">
                        <h3 className="text-3xl flex justify-center cursive">Work</h3>
                            {postData && postData.filter(post => post.type).map((post, index) => (
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                                    <img
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                            {post.slug.current}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
    ))}
                    </div>
                    {/* Education */}
                    <div className="grid grid-cols-1 gap-8 pl-6">
                        <h3 className="text-3xl flex justify-center cursive">Education</h3>
                            {postData && postData.filter(post => !post.type).map((post, index) => (
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                                    <img
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                        <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                            {post.slug.current}
                                        </h3>
                                    </span>
                                </span>
                            </Link>
                        </article>
    ))}
                    </div>
                </div>

            </section>
        </main>

    );

}