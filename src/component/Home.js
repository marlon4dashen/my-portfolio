import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import NavBar from "./NavBar"
import Foot from "./Foot"

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Home(){

    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>
    return (
        <div>
            <NavBar/>   
            <main className="w-full h-full">
                <section className="mx-auto mt-24 mb-48">
                    <div className="flex justify-center items-center" >
                        <img src={urlFor(author.authorImage).url()}
                                                alt={author.name}
                                                className="w-32 h-32 rounded-full"
                                                />
                    </div>
                    <h3 className="flex justify-center text-1xl text-black font-bold cursive leading-none lg:leading-snug home-name">Hola, I am Marlon</h3>
                    <div className="flex justify-center">
                        <h6 className="font-bold text-1xl"> An aspiring software engineer who is passionate in web development and machine learning  </h6>
                    </div>
                </section>
                <section className="py-32">
                    <div className="flex flex-col items-start px-32">
                        <h6 className="flex font-serif italic justify-center text-2xl text-slate-600">
                            “Time is like water in sponge; if you squeeze harder, there is always more."
                        </h6>
                        <h6 className="flex font-bold text-2xl text-black">
                            XUN LU
                        </h6>
                    </div>
                    <div className="flex flex-col items-end px-36 pt-28">
                        <h6 className="flex font-serif italic justify-center text-2xl text-slate-600">
                            “I never wanted to be on any billionaires list. I never define myself by net worth. I always try to define myself by my values."
                        </h6>
                        <h6 className="flex font-bold text-2xl text-black">
                            HOWARD SCHULTZ
                        </h6>
                    </div>
                    <div className="flex flex-col items-start px-36 pt-28">
                        <h6 className="flex font-serif italic justify-center text-2xl text-slate-600">
                            “If you want to be known for everything, you’ll be known for nothing."
                        </h6>
                        <h6 className="flex font-bold text-2xl text-black">
                            UNKNOWN
                        </h6>
                    </div>
                </section>
                <section className="bg-gray-700">
                    <h3 className="flex justify-center text-3xl cursive text-white font-bold pt-20"> About me </h3>
                    <div className="grid grid-cols-4 pt-5 mx-60 pb-60 items-start">
                        <div className="flex flex-col justify-center pt-6 w-48">
                            <h3 className="flex justify-center text-2xl cursive text-white font-bold"> Background </h3>
                            <h6 className="flex justify-center text-white font-serif pt-5"> I was born and raised in Hebei, China. Then I came to Canada when I was 15. I currently live in Hamilton, ON. </h6>
                        </div>
                        <div className="flex flex-col justify-center pt-6 w-48">
                            <h3 className="flex justify-center text-2xl cursive text-white font-bold"> Hobby </h3>
                            <h6 className="flex justify-center text-white font-serif pt-5"> I'm a huge soccer fan (though I'm really bad at it). My favourite team is Manchester United. Red Demon Forever! </h6>
                        </div>
                        <div className="flex flex-col justify-center pt-6 w-48">
                            <h3 className="flex justify-center text-2xl cursive text-white font-bold"> Travel </h3>
                            <h6 className="flex justify-center text-white font-serif pt-5"> One fact is that I've been to almost every part of the China. However, I've never been to another continent besides Asia and North America. </h6>
                        </div>
                        <div className="flex flex-col justify-center pt-6 w-48">
                            <h3 className="flex justify-center text-2xl cursive text-white font-bold"> Pets </h3>
                            <h6 className="flex justify-center text-white font-serif pt-5"> I don't have a pet right now, but I love puppies and wish to adopt one after I graduate! </h6>
                        </div>
                    </div>
                </section>
                <Foot></Foot>
            </main>
        </div>
    )

}