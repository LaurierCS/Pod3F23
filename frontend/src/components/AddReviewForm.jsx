import React from 'react'
import { Link } from 'react-router-dom'

const AddReviewForm = () => {
  return (
    <div>
    <div class="h-screen  flex flex-col justify-center items-center">
      <div class="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3 rounded-md">
        <h1 className="text-xl font-semibold">Feel Free to Add a Review</h1>
        <form class="mt-8 w-64 flex flex-col">
            
            <input
            autofocus
            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="Bird"
            placeholder="Class Name"
            type="text"
          ></input>

          <input
            autofocus
            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="Bird"
            placeholder="Professor Name"
            type="text"
          ></input>

            <input
            autofocus
            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="Bird"
            placeholder="Grade Received"
            type="text"
          ></input>

        <div className='flex'>
      
          <input
            autofocus
            class=" mr-2 text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="Bird"
            placeholder="Bird"
            type="number"
          ></input>
          <input
            autofocus
            class="mr-2 text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="Useful"
            placeholder="Useful"
            type="number"
          ></input>
          <input
            autofocus
            class="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="Enjoyed"
            placeholder="Enjoyed"
            type="number"
          ></input>
        </div>
        <textarea className='mb-2 text-xs w-full h-32 rounded border bg-gray-100 border-gray-300 focus:outline-none focus:border-gray-400 active:outline-none' placeholder="Write a Review"></textarea>




          <a class=" text-sm text-center bg-blue-600 text-white p-2 rounded font-medium">
              Add Review
          </a>
        </form>
        

      </div>
      
    </div>
  </div>
  )
}

export default AddReviewForm