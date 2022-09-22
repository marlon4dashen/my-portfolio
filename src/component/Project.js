import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import NavBar from "./NavBar"
import Foot from "./Foot"


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export default function Project(){

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            image{
                asset->{
                    _id,
                    url
                }
            },
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return(
        <div className="bg-gray-700">
            <NavBar color="white"></NavBar>
            <main className="min-h-screen p-12">
                <section className="container mx-auto">
                    <h1 className="text-white text-5xl flex justify-center cursive">My Projects</h1>
                    <h2 className="text-lg text-white flex justify-center mb-12">
                        "Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent."
                    </h2>
                    <section className="grid grid-cols-2 gap-8">
                        {projectData && projectData.map((project, index) => (
                        <article className="rounded-lg border border-gray-600 shadow hover:shadow-2xl p-12 font-serif hover:border-indigo-300">
                            <div>
                                <a href={project.link}>
                                <img src={project.image.asset.url} className="w-full"/>
                                </a>
                            </div>

                            <div className="pt-6">
                                <h3 className="text-white text-3xl font-bold mb-2 hover:text-red-700">
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >{project.title}</a>
                                </h3>
                                <div className="text-white text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">
                                            Date
                                        </strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Place</strong>:{" "}
                                        {project.place}
                                    </span>
                                    <p className="my-6 text-lg leading-relaxed">{project.description}</p>
                                    <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                        View The Project {" "}
                                        <span role="img" aria-label="right pointer">
                                            👉
                                        </span>
                                    </a>
                                
                                </div>
                            </div>

                        
                        </article>
                        ))}
                    </section>
                </section>
            </main>
            <Foot color="white"></Foot>
        </div>

    )

}