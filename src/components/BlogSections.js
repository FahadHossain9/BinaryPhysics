import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/img/math.jpeg",
      subject: "Technology",
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "May 25, 2023",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices orci sed turpis vulputate tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed ante gravida, dignissim turpis vel, condimentum dolor.",
    },
    {
      id: 2,
      image: "/img/biology.jpeg",
      subject: "Science",
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "May 18, 2023",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices orci sed turpis vulputate tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed ante gravida, dignissim turpis vel, condimentum dolor.",
    },
    {
      id: 3,
      image: "/img/chemistry.jpeg",
      subject: "Travel",
      title: "Lorem Ipsum Dolor Sit Amet",
      date: "May 10, 2023",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices orci sed turpis vulputate tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sed ante gravida, dignissim turpis vel, condimentum dolor.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold text-gray-900 text-center mt-8 mb-4">Top Categories</h1>
    <div className="w-1/4 mx-auto h-1 bg-gradient-to-r from-[#5046E5] to-transparent"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 pb-[100px]">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative flex justify-center">
            <img src={blog.image} alt="Blog" className="w-4/5 h-auto mx-2 " />
            <div className="absolute rounded-sm border-2 border-[#5046E5] bottom-0 left-0 w-2/3 bg-white px-4 py-2 transform translate-x-1/4 translate-y-2/3">

              <h3 className="text-gray-700 font-semibold">{blog.subject}</h3>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
              <div className="flex items-center text-[#5046E5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a9 9 0 100 18A9 9 0 0010 1zm-.5 15a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM9 6a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm">{blog.date}</p>
              </div>
              <p className="text-gray-600 mt-2">{blog.details.substring(0, 60)}...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10 mt-[90px]">
        <button className="bg-[#5046E5] hover:bg-blue-600 text-white py-2 px-4 rounded">
          Show More
        </button>
      </div>
      <div className="relative">
     
      <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
      >
      <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
          clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
      />
      </div>
    </div>
    </div>
  );
};

export default BlogSection;
