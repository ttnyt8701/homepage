import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useRef } from 'react'
const inter = Inter({ subsets: ['latin'] })

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faTwitter,faDiscord } from "@fortawesome/free-brands-svg-icons";

import img_me from '../public/me.png'
import no_img from '../public/noimg.png'



export default function Home() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      name:nameRef.current?.value,
      email:emailRef.current?.value,
      title:titleRef.current?.value,
      message:messageRef.current?.value,
    }
    
    await fetch("api/nodemailer",{
      method:"POST",
      headers:{
        Accept:"application/json ,text/plain",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if(res.status === 200) console.log("メール送信成功");
    })

  };


  return (

  <div className="font-poppins text-white bg-[url('../public/bg.jpg')] bg-cover">
    {/* Header Nav */}
    <header className="w-full fixed py-2 bg-gray-700 bg-opacity-90 ">
        <div className="container mx-auto flex  justify-between items-center  px-4  md:px-14  lg:px-24  z-10">
            {/* Title Logo */}
            <div className="mx-auto text-4xl font-bold hover:text-orange-400 md:m-0">
              λ Labo.
            </div>
            {/* Links */}
            <div className="space-x-3.5 items-center hidden md:flex ">
                <a href="#home" className="link">Home</a>
                <a href="#portfolio" className="link">Portfolio</a>
                <a href="#skills" className="link">Skills</a>
                <a href="#contact"className="link" >Contact</a>
            </div>
            {/* responsive menu */}
            <div className="md:hidden ">
                <i className="fa-sharp fa-solid fa-bars fa-2xl"></i>
            </div>
        </div>
    </header>

    {/* contents */}
    <main className ="">
        {/* home */}
        <div id="home" className="container mx-auto py-24 items-center  sm:flex justify-center sm:justify-between md:px-14 lg:px-24 w-full  ">
            <div className="">
                <Image src={img_me} alt='img' width={500} height={500} className="mx-auto sm:m-0 w-72 sm:w-80 icon cursor-pointer" />
                <div className="bg-zinc-400 opacity-50 mt-4 text-center">
                    <p>HoodieCat</p>
                </div>
            </div>
            <div className="text-4xl sm:text-2xl justify-center sm:justify-normal flex sm:flex-col">
                <p className="link mb-6 mt-3 sm:mt-0"><a href="#"><FontAwesomeIcon icon={faGithub} className="mr-12 sm:mr-2" /><span className="hidden sm:inline ml-2">Github</span></a></p>
                <p className="link mb-6 mt-3 sm:mt-0"><a href="#"><FontAwesomeIcon icon={faTwitter} className="mr-12 sm:mr-2" /><span className="hidden sm:inline ml-2">Twitter</span></a></p>
                <p className="link mb-6 mt-3 sm:mt-0"><a href="#"><FontAwesomeIcon icon={faDiscord} className="mr-12 sm:mr-2" /><span className="hidden sm:inline ml-2">Discord</span></a></p>
            </div>
        </div>
        {/* portfolio */}
        <div id="portfolio"
        className="container flex  items-center justify-between mx-auto mt-24px-4  md:px-14  lg:px-24 ">
            <section className="w-full">
                <h2 className="secondary-title mb-6">MyPortfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <Image src={no_img} alt="" 
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
                        <Image src={no_img} alt="" 
                        className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer" />
                        <div className="w-full bg-gray-600 bg-opacity-60">
                            <p className="text-center">SNS-app</p>
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
            </section>
        </div>
        {/* skills */}
        <div id="skills"
        className="container flex items-center justify-between mx-auto mt-24 px-4  md:px-14  lg:px-24 ">
            <section className="w-full">
                <h2 className="secondary-title">Skills</h2>
                <div className="my-6">
                    <div className=" items-center bg-gray-800 bg-opacity-20 p-16 px-16 py-10" >
                        <div className="mb-2 md:mb-6 text-2xl font-bold">
                            Backend
                        </div>
                        <div className="flex flex-wrap mx-auto space-x-2 space-y-4 ">
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        </div>
                    </div>
                    <div className=" items-center bg-gray-800 bg-opacity-20 p-16 px-16 py-10" >
                        <div className="mb-2 md:mb-6 text-2xl font-bold">
                            Frontend
                        </div>
                        <div className="flex flex-wrap mx-auto space-x-2 space-y-4">
                            <span></span>
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                        </div>
                    </div>
                    <div className=" items-center bg-gray-800 bg-opacity-20 p-16 px-16 py-10" >
                        <div className="mb-2 md:mb-6 text-2xl font-bold">
                            Infrastructure
                        </div>
                        <div className="flex flex-wrap mx-auto space-x-2 space-y-4">
                            <span></span>
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
                        </div>
                    </div>
                    <div className=" items-center bg-gray-800 bg-opacity-20 p-16 px-16 py-10" >
                        <div className="mb-2 md:mb-6 text-2xl font-bold">
                            Environment
                        </div>
                        <div className="flex flex-wrap mx-auto space-x-2 space-y-4">
                            <span></span>
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                            <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </main>




    <div id="contact" className="container flex items-center justify-between mx-auto mt-24 pb-24 px-4 md:px-14 lg:px-24">
      <div className="w-full">
        <h2 className="secondary-title">Contact</h2>
        <div className="w-full grid my-6 lg:grid-cols-2 gap-8 lg:gap-32">
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} className="space-y-3 text-black">
            <input type="text" placeholder="Name" className="w-full bg-gray-200 p-2 rounded-sm focus:outline-none" required ref={nameRef}/>
            <input type="text" placeholder="E-mail" className="w-full bg-gray-200 p-2 rounded-sm focus:outline-none" required ref={emailRef}/>
            <input type="text" placeholder="Title" className="w-full bg-gray-200 p-2 rounded-sm focus:outline-none" required ref={titleRef}/>
            <textarea rows={8} placeholder="Message" className="w-full bg-gray-200 p-2 rounded-sm focus:outline-none" required ref={messageRef}/>
            <button className="btn text-white bg-gray-400 block mx-auto" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
