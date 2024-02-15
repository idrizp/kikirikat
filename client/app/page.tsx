'use client'
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Home() {
  const [titleText, setTitleText] = useState("Want to become an astronaut?");
  const router = useRouter();

  return (
    <div className="h-screen w-full p-12">
      <header className="fixed flex gap-1">
        <Image className="rounded-full" src={"/kikirikat_logo.jpg"} alt="Logo" width={64} height={64} />
        <h3 className="flex items-center text-4xl italic text-kikirik-accent font-extrabold">
          Kikirikat
        </h3>
      </header>
      <main className="grid grid-cols-2 h-full items-center">

        <h1 className="justify-self-end text-6xl font-bold w-5/6">
          {titleText}
        </h1>

        <div className="justify-self-center flex flex-col gap-7">
          <h2 className="text-center text-4xl font-bold">
            Get Started!
          </h2>
          <ul className="grid grid-cols-2 gap-7">
            <li>
              <button 
                onClick={() => {router.push('/login')}} 
                className="bg-black text-white rounded-xl min-w-full text-2xl pl-10 pr-10 p-4 w-full"
              >
                Log In
              </button>
            </li>
            <li>
              <button 
                onClick={() => {router.push('/signup')}}
                className="bg-black text-white rounded-xl text-2xl pl-10 pr-10 p-4 w-full"
                >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}