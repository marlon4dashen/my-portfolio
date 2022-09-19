import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost(props){

    if (!props.post.End){
        props.post.End = "Now"
    }
    console.log(props)
    return (
        // <main className="bg-gray-200 min-h-screen p-12"> 
            <section>
                <div className="flex flex-row">
                    <div className="flex flex-col w-24 static">
                        <h3 className="font-bold font-serif text-2xl"> {props.post.Institution}</h3>
                        <h6 className="open-sans font-size pt-3 text-sm"> {props.post.Start.slice(0, 7)} - {props.post.End.slice(0, 7)} </h6>
                    </div>
                    <div className="items-start pl-24">
                        <h3 className="font-bold font-serif text-2xl"> {props.post.title}</h3>
                        <div className=" w-full pt-3 font-serif">
                            <BlockContent blocks={props.post.body}
                            projectId="s1sw7g3s"
                            dataset="production"/>
                        </div>

                    </div>          
                </div>

            </section>

    );

}