import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

import homepage_img from '@/public/homepage.png'
import sns_img from '@/public/sns-app.png'

export default function Portfolio() {

  return (
        <div id="portfolio"
        className="container flex  items-center justify-between mx-auto mt-24px-4  md:px-14  lg:px-24 ">
            <section className="w-full">
                <h2 className="secondary-title mb-6">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <Image src={homepage_img} alt="" 
                        className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" />
                        <div className="w-full bg-gray-600 bg-opacity-60">
                            <p className="text-center">HomePage</p>
                            <div className="flex justify-center space-x-3 items-center flex-wrap h-12">
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /> 
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                            </div> 
                        </div>
                    </div>
                    <div>
                        <Image src={sns_img} alt="" 
                        className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" />
                        <div className="w-full bg-gray-600 bg-opacity-60">
                            <p className="text-center">SNS-APP</p>
                            <div className="flex justify-center space-x-3 items-center flex-wrap h-12">
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />          
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />          
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />          
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" />          
                                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />          
                            </div> 
                        </div>
                    </div>
                </div>
                <Link href="#" className="btn bg-gray-400 mt-8">More</Link>
            </section>
        </div>
  )
}
