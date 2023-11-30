import React from "react";
import {Link} from 'react-router-dom';

function SignForm() {
  return (
    <div>
      <div class="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3 rounded-md">
          <h1 className="text-xl font-semibold">Sign Up and Leave a review!</h1>
          <form class="mt-8 w-64 flex flex-col">
            <div className="flex">
              <input
                autofocus
                class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none mr-2"
                id="email"
                placeholder="First Name"
              ></input>
              <input
                autofocus
                class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="email"
                placeholder="Last Name"
              ></input>
            </div>

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
            <input
              autofocus
              class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Confirm Password"
              type="password"
            ></input>

            <div className="flex">
              <input
                autofocus
                class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none mr-2"
                id="email"
                placeholder="Program"
              ></input>
              <input
                autofocus
                class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="email"
                placeholder="Grad Year"
              ></input>
            </div>

            <a class=" text-sm text-center bg-blue-300 text-white p-2 px-24 rounded font-medium">
              Sign Up
            </a>
          </form>
          

        </div>
        <div class="bg-white border border-gray-300 text-center w-80 py-4 rounded-md">
          <span class="text-sm">Have an account already? </span>
          <Link to="/login"><a class="text-blue-500 text-sm font-semibold">Login</a></Link>
        </div>
        <div class="mt-3 text-center">
          <div class="flex mt-3 space-x-2">
            <div class="bg-no-repeat apple-store-logo"></div>
            <div class="bg-no-repeat google-store-logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignForm;
