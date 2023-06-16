import React from "react";
import {
    FiArrowRight
    } from "react-icons/fi";
const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      image: "/img/1298128.jpg",
      level: "Beginner",
      price: 19.99,
      rating: 4.5,
      duration: 12,
      name: "Physics",
    },
    {
      id: 2,
      image: "/img/chemistry.jpeg",
      level: "Intermediate",
      price: 29.99,
      rating: 4.8,
      duration: 20,
      name: "Chemistry",
    },
    {
      id: 3,
      image: "/img/biology.jpeg",
      level: "Advanced",
      price: 39.99,
      rating: 4.9,
      duration: 24,
      name: "Biology",
    },
    {
      id: 4,
      image: "/img/math.jpeg",
      level: "Intermediate",
      price: 24.99,
      rating: 4.6,
      duration: 16,
      name: "Math",
    },
  ];

  return (
    <>
    <div className="relative">
    <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
    aria-hidden="true"
    >
    <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
        clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
    />
    </div>
    <div/>
    </div>
      <h1 className="text-3xl font-bold text-gray-900 text-center my-8 mb-4">Popular Courses</h1>
      <div className="w-1/4 mb-10 mx-auto h-1 bg-gradient-to-r from-transparent to-[#5046E5] "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-8 sm:my-12 md:my-16 md:mb-10 lg:mb-[20px] ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-60 bg-black">
              <img
                src={course.image}
                alt="Course"
                className="object-cover object-center h-full w-full"
              />
              <div className="absolute top-2 right-2 bg-white text-xs text-gray-800 px-2 py-1 rounded">
                {course.duration} hours
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">{course.level} - {course.name}</span>
                <span className="text-sm text-yellow-500 font-bold ">
                  {course.rating} <i className="fas fa-star"></i>
                </span>
              </div>
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <p className="text-gray-600">${course.price} BDT</p>
            </div>
            <div className="bg-[#5046E5] hover:bg-white hover:text-[#5046E5] hover:cursor-pointer py-2 px-4 text-white text-center">
              <button className="font-semibold">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10 mt-[60px]">
        <button className="bg-[#5046E5] hover:bg-blue-600 flex items-center text-white py-2 px-4 rounded">
          Browse More Course    <FiArrowRight className="ml-3"/>
        </button>
      </div>
    </>
  );
};

export default PopularCourses;
