'use client';

export default function SignUp() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
            <label
              htmlFor="username"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
            <input
                id="username"
                name="username"
                type="username"
                placeholder="Enter your username, bitte!"
                autoComplete="username"
                required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                                    sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="someone@email.com"
                autoComplete="email"
                required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Password
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
                required className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                    focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="flex w-full justify-center rounded-md bg-black p-1.5 
                         text-md font-semibold leading-6 text-white shadow-sm hover:bg-gray-900"
            >
              Sign up
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
