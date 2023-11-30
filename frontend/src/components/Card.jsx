import React from 'react';

const Card = () => {
  return (
    // Adjusted max-w-md for medium width and md:max-w-4xl for larger screens
    <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-md overflow-hidden md:max-w-4xl mb-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="p-8">
            <div className="text-6xl">👤</div>
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Review</div>
          <p className="mt-2 text-gray-500">
            This course is a major step-up from previous course CP 104. This course is not a piece of cake and needs constant practice.
          </p>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-gray-700 font-bold mr-2">Bird:</span>
              <span className="text-blue-400">🔵🔵🔵⚪⚪</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-bold mr-2">Useful:</span>
              <span className="text-blue-400">🔵🔵🔵🔵⚪</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-bold mr-2">Enjoyed:</span>
              <span className="text-blue-400">🔵🔵🔵⚪⚪</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600 text-sm">Grade Received: A*</span>
            <span className="text-gray-400 text-xs">Student 24 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
