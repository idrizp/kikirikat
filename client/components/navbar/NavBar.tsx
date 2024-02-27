'use client';
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import Image from "next/image";

export default function NavBar() {
  const [showTaskbar, setShowTaskbar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const user = auth.currentUser;

  function handleSignOut() {
    return signOut(auth).then(() => {
      console.log("Sign out successful!");
      router.push("/");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error Code:", errorCode);
      console.error("Error Message:", errorMessage);
    });
}

  return (
    <>
      {(pathname !== "/") && (
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
                <button onClick={() => {router.push("/homepage")}}>
                  <Image className="rounded-full" src={"/kikirikat_logo.jpg"} alt="Logo" width={32} height={32} />
                </button>
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
                <li className="p-1">{
                  user &&
                  <button className="bg-slate-800 hover:bg-slate-700" onClick={handleSignOut}>
                    Sign Out
                  </button>
                }
                </li>
              </ul>
            </div>
          )}

        </div>
      )}
    </>
  )
}