import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

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

        <main>
            {/* <img src={image} alt="backgroundimg" className="absolute object-cover w-full h-full"
            /> */}
            <section className="container mx-auto my-auto flex-row">
                <div className="flex justify-center items-center pt-30" >
                    <img src={urlFor(author.authorImage).url()}
                                            alt={author.name}
                                            className="w-20 h-20 rounded-full"
                                            />
                </div>
                <h3 className="flex justify-center text-1xl text-black font-bold cursive leading-none lg:leading-snug home-name">Hola, I am Marlon</h3>
                <div className="flex justify-center">
                    <h6 className="font-bold text-1xl"> An aspiring software engineer that have interests in web development and machine learning  </h6>
                </div>
                
              
            </section>
        </main>

    )

}