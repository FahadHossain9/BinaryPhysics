import React from 'react';
import { AiFillHeart, AiFillStar, AiFillCamera, AiFillGift, AiFillShop, AiFillHome } from 'react-icons/ai';
import 'tailwindcss/tailwind.css';

const TopCategories = () => {
  const categories = [
    { icon: <AiFillHeart />, text: 'Physics' },
    { icon: <AiFillStar />, text: 'ICT' },
    { icon: <AiFillCamera />, text: 'Chemistry' },
    { icon: <AiFillGift />, text: 'Math' },
    { icon: <AiFillShop />, text: 'Biology' },
    { icon: <AiFillHome />, text: 'English' },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-32 sm:py-32 lg:py-46">
      <h1 className="text-3xl font-bold text-gray-900 text-center mt-8 mb-4">Top Categories</h1>
      <div className="w-1/4 mx-auto h-1 bg-gradient-to-r from-[#5046E5] to-transparent"></div>
      <div className="flex flex-wrap justify-center my-8 sm:my-12 md:my-16">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 mx-2 my-2 flex min-w-[250px] max-h-[80px] md:max-h-[95px]  items-center md:w-[40%] lg:w-[25%]">
            <div className="w-12 h-12 text-[#5046E5] bg-white rounded-full flex items-center justify-center mr-4">
              {category.icon}
            </div>
            <p className="text-gray-900">{category.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TopCategories;
