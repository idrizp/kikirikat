'use client';
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showTaskbar, setShowTaskbar] = useState(false);

  return (
    <div className={"fixed h-full xl:w-auto bg-black " + (showTaskbar ? " w-full" : "")}>
      {!showTaskbar && (
        <div className="h-full w-max p-3">
          <button className="w-full" onClick={() => { setShowTaskbar(true) }}>
            <svg xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
          </button>
        </div>
      )}


      {showTaskbar && (
        <div className={`flex flex-col text-white h-full p-3`}>
          <div className="flex justify-between">
            <Image className="rounded-full" src={"/kikirikat_logo.jpg"} alt="Logo" width={32} height={32}/>
            <button className="self-end" onClick={() => { setShowTaskbar(false) }}>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col p-1">
            <li className="p-1" >TA DU MAJMUNIN, TA DU MAJMUNIN</li>
            <li className="p-1" >TA DU MAJMUNIN, TA DU MAJMUNIN</li>
            <li className="p-1" >TA DU MAJMUNIN, TA DU MAJMUNIN</li>
          </ul>
        </div>
      )}

    </div>
  )
}