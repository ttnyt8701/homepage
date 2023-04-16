import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faTwitter,faDiscord } from "@fortawesome/free-brands-svg-icons";
import img_me from '@/public/me.png'


export default function Top() {

  return (
        <div id="top" className="container mx-auto py-24 items-center  sm:flex justify-center sm:justify-between md:px-14 lg:px-24 w-full  ">
            <div className="">
                <Image src={img_me} alt='img' width={500} height={500} className="mx-auto sm:m-0 w-72 sm:w-80 icon cursor-pointer" />
                <div className="bg-zinc-400 opacity-50 mt-4 text-center">
                    <p>HoodieCat</p>
                </div>
            </div>
            <div className="text-4xl sm:text-2xl justify-center sm:justify-normal flex sm:flex-col">
                <p className="link mb-6 mt-3 sm:mt-0"><a href="https://github.com/ttnyt8701"><FontAwesomeIcon icon={faGithub} className="mr-12 sm:mr-2" /><span className="hidden sm:inline ml-2">Github</span></a></p>
                <p className="link mb-6 mt-3 sm:mt-0"><a href="#"><FontAwesomeIcon icon={faTwitter} className="mr-12 sm:mr-2" /><span className="hidden sm:inline ml-2">Twitter</span></a></p>
                <p className="link mb-6 mt-3 sm:mt-0"><a href="#"><FontAwesomeIcon icon={faDiscord} className="mr-12 sm:mr-2" /><span className="hidden sm:inline ml-2">Discord</span></a></p>
            </div>
        </div>

  )
}
