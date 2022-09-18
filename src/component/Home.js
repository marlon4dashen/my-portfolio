import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import NavBar from "./NavBar"

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
                <div className="flex flex-col justify-center px-10 py-24">
                    <h3 className="flex text-2xl justify-center font-serif pb-10"> Thank you for your attention! :^) </h3>
                    <div className="flex justify-center pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <h6 className="font-serif pl-3"> alienlql@hotmail.com </h6>
                    </div>
                    <div className="flex justify-center pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <h6 className="font-serif pl-3"> (+1) 647-978-1239</h6>
                    </div>
                    <div className="flex justify-center pt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <h6 className="font-serif pl-3"> Hamilton, ON </h6>
                    </div>

                </div>
                <h6 className="font-serif pb-3"> © 2022 Marlon Liu. All rights reserved </h6>
            </main>
        </div>
    )

}