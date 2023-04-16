import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from 'react'



export default function Header() {

  return (
    <header className="w-full fixed py-2 bg-gray-700 bg-opacity-90 ">
        <div className="container mx-auto flex  justify-between items-center  px-4  md:px-14  lg:px-24  z-10">
            {/* Title Logo */}
            <div className="mx-auto text-4xl font-bold hover:text-orange-400 md:m-0">
              λ Labo.
            </div>
            {/* Links */}
            <div className="space-x-3.5 items-center hidden md:flex ">
                <a href="#top" className="link">Top</a>
                <a href="#portfolio" className="link">Portfolio</a>
                <a href="#skills" className="link">Skills</a>
                <a href="#contact"className="link" >Contact</a>
            </div>
            {/* responsive menu */}
            <div className="md:hidden ">
                <i className="fa-sharp fa-solid fa-bars fa-2xl"></i>
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </div>
        </div>
    </header>
  )
}
