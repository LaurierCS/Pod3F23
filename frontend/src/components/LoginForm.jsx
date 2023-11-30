import React from 'react'
import {Link} from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <div class="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3 rounded-md">
          <h1 className="text-xl font-semibold">Log in and Leave a review!</h1>
          <form class="mt-8 w-64 flex flex-col">
        
            <input
              autofocus
              class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Email"
            ></input>
            <input
              autofocus
              class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Password"
              type="password"
            ></input>




            <a class=" text-sm text-center bg-blue-300 text-white p-2 px-24 rounded font-medium">
                Login In
            </a>
          </form>
          

        </div>
        <div class="bg-white border border-gray-300 text-center w-80 py-4 rounded-md">
          <span class="text-sm">Don't have an account? </span>
          <Link to="/signup"><a class="text-blue-500 text-sm font-semibold">Sign Up</a></Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm