import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(props){

    return (
        <header className="sticky top-0" style={{
            color: props.color
        }}>
            <div className='container mx-auto flex justify-between'>
                <nav className="flex">
                    <NavLink 
                        to='/' 
                        exact
                        activeClassName={props.color}
                        className="inflex-flex items-center py-6 px-3 mr-4 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Marlon
                    </NavLink>
                    <div className="grid-cols-2 divide-x">
                        <NavLink 
                            to='/post' 
                            activeClassName={props.color}
                            className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800"
                        >
                            Experiences
                        </NavLink>
                        <NavLink 
                            to='/project'
                            activeClassName={props.color}
                            className="inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800"
                        >
                            Projects
                        </NavLink>
                    </div>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/marlon-liu-567824170/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor='#fff' 
                        style={{ height: 35, width: 35 }}/>

                    <SocialIcon 
                        url="https://github.com/marlon4dashen" 
                        className="mr-4" target="_blank" fgColor='#fff' 
                        style={{ height: 35, width: 35 }}/>
                    <SocialIcon 
                        url="https://www.facebook.com/marlon.liu.52" 
                        className="mr-4" target="_blank" fgColor='#fff' 
                        style={{ height: 35, width: 35 }}/>
                </div>
            </div>
        </header>
    )

}