import React from "react";

const CoursesHeader = () => {
  return (
    <div className="bg-purple-300 p-6 w-full max-w-4xl mx-auto  shadow-md mb-10">
      <div className="flex items-center justify-between">
        <div className="items-center">
          <div className=" text-black rounded-full bg-purple-500 p-4 mr-4 mb-4">
            <div className="text-2xl font-bold">Score 88</div>
          </div>
          <div className="text-8xl font-bold text-black">CP 164</div>
        </div>
        <div>
          <div className="text-white">
            <div className="mt-4 mb-4">
              <div className="flex items-center">
                <div className="w-1/4 mr-4">Birdness</div>
                <div className="w-3/4 bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: "19%" }}
                  ></div>
                </div>
                <div className="ml-2">19%</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-1/4 mr-4">Usefulness</div>
                <div className="w-3/4 bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: "86%" }}
                  ></div>
                </div>
                <div className="ml-2">86%</div>
              </div>
              <div className="flex items-center mt-2">
                <div className="w-1/4 mr-4">Enjoyability</div>
                <div className="w-3/4 bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: "62%" }}
                  ></div>
                </div>
                <div className="ml-2">62%</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center">
                <div
                  className="radial-progress"
                  style={{ "--value": 70 }}
                  role="progressbar"
                >
                  71%
                </div>
              </div>
              <div className="ml-4">
                <div>Average Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
