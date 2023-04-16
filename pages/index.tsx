import React from 'react'
import Header from '@/components/header/Header';
import Contact from '@/components/contact/Contact';
import Portfolio from '@/components/portfolio/Portfolio';
import Skills from '@/components/skills/Skills';
import Top from '@/components/top/Top';


export default function Home() {

  return (

  <div className="font-poppins text-white bg-[url('../public/bg.jpg')] bg-cover">
    <Header/>
    <main className ="">
        <Top />
        <Portfolio/>
        <Skills/>
    </main>
    <Contact />
  </div>
  )
}
