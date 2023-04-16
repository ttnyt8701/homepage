import React, { useRef } from 'react'


export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.reload();

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
  )
}
