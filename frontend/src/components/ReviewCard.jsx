import React, { useState } from "react";

const ReviewCard = () => {
  const [review, setReview] = useState("");

  return (
    <div className="grid grid-cols-2 gap-8 p-8   mt-20">
      {/* Left column for review submission */}
      <div>
        <p className="text-3xl mb-4">Like our services!!, Please Rate Us!!!</p>
        <div className="rating mb-4">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full h-32 p-4 border border-gray-300 rounded-lg"
          placeholder="Write a review"
        />
      </div>

      {/* Right column for displaying feedback */}
      <div>
        <p className="text-3xl mb-4">Thanks for the feedback!</p>
        <div className="space-y-4">
          {/* REVIEW 1*/}
          <div className="flex items-start space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Tania Andrew</p>
              <p className="text-sm">Frontend Lead @ Google</p>
              <div className="flex text-yellow-400">
                {/* Assuming you will replace these with an actual star rating component */}
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="mt-2">
                "I found a solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And it's really
                affordable, very humble guys!!!"
              </p>
            </div>
          </div>

          {/* REVIEW 2*/}
          <div className="flex items-start space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Tania Andrew</p>
              <p className="text-sm">Frontend Lead @ Google</p>
              <div className="flex text-yellow-400">
                {/* Assuming you will replace these with an actual star rating component */}
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="mt-2">
                "I found a solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And it's really
                affordable, very humble guys!!!"
              </p>
            </div>
          </div>

          {/* REVIEW 3*/}
          <div className="flex items-start space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-xl font-semibold">Tania Andrew</p>
              <p className="text-sm">Frontend Lead @ Google</p>
              <div className="flex text-yellow-400">
                {/* Assuming you will replace these with an actual star rating component */}
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <p className="mt-2">
                "I found a solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And it's really
                affordable, very humble guys!!!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ReviewCard;
