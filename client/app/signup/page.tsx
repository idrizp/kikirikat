'use client'
import { MouseEvent, useState } from "react";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const user = auth.currentUser;

  

  function handleSignUp(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    return createUserWithEmailAndPassword(auth, email as string, password as string)
    .then(() => {
      setEmail("");
      setPassword("");
      router.push("/dashboard");
      console.log("User created successfully!");
    }).catch((error) => {
      const errorCode = error.code;
      console.error("Error:", errorCode);
    })
  };
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900">
          Sign Up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                value={email as string}
                onChange={(e) => setEmail(e.target.value)}
                required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                sm:text-sm sm:leading-6"
                />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6 text-gray-900"
                >
                Password:
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-kikirik-primary hover:text-slate-800">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="********"
                autoComplete="current-password"
                value={password as string}
                onChange={(e) => setPassword(e.target.value)}
                required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                    focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                    />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              onClick={handleSignUp}
              className="flex w-full justify-center rounded-md bg-black p-1.5 
              text-md font-semibold leading-6 text-white shadow-sm hover:bg-gray-900"
              >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already registered?
          <a href="/login" className="font-semibold leading-6 text-kikirik-primary hover:text-slate-700 mx-1">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
