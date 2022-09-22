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

    let time
    if (!props.post.End){
        if (props.post.type != "award" && props.post.type != "certificate"){
            time = <h6 className="open-sans font-size pt-3 text-sm text-gray-700"> {props.post.Start.slice(0, 7)} - Now </h6>
        }
        else{
            time = <h6 className="open-sans font-size pt-3 text-sm text-gray-700"> {props.post.Start.slice(0, 7)} </h6>
        }

    }else{
        time =  <h6 className="open-sans font-size pt-3 text-sm text-gray-700"> {props.post.Start.slice(0, 7)} - {props.post.End.slice(0, 7)} </h6>
    }
    console.log(props)
    return (
            <section>
                <div className="flex flex-row">
                    <div className="flex flex-col w-24 static">
                        <h3 className="font-bold font-serif text-2xl"> {props.post.Institution}</h3>
                        {time}
                    </div>
                    <div className="items-start pl-24">
                        <h3 className="font-bold font-serif text-lg"> {props.post.title}</h3>
                        <div className=" w-full pt-3 font-serif text-gray-700">
                            <BlockContent blocks={props.post.body}
                            projectId="s1sw7g3s"
                            dataset="production"/>
                        </div>

                    </div>          
                </div>

            </section>

    );

}