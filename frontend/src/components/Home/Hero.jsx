import React from "react";

function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center bg-gray-100  lg:py-24 ">
      {/* Content */}
      <div className="lg:w-1/2 lg:order-1 lg:text-left lg:pl-[5rem] lg:pr-24 mb-8 lg:py-12 py-8 lg:mb-0 px-4">
        <p className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
          <span className="">Great</span> <b className="">Product</b> is
          <b> built by</b> <span className="">Great</span> teams
        </p>
        <p className="text-lg lg:text-xl text-gray-700 mb-6 text-center lg:text-left">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-bold py-2 px-4 rounded-lg block lg:inline-block mx-auto">
          Let’s get started!
        </button>
      </div>

      <div className="lg:w-1/2 lg:order-2 flex justify-center items-center lg:p-6 lg:pl-[2rem] lg:pr-[3rem]">
        <img
          src="https://imgs.search.brave.com/WejI61kcdkYxW7oXM0TBJR0WKNJJrWDknxcsPeplxpE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aXJ0dWFsLWN5/YmVydGljLWN5YmVy/dGljLXN5c3RlbS10/ZWNobm9sb2d5LWNv/bmNlcHRfNDM4MDk5/LTMyMjcxLmpwZz9z/aXplPTYyNiZleHQ9/anBn"
          alt="Hero"
          className="object-cover w-full lg:w-auto lg:max-w-none h-64 lg:h-auto lg:rounded-lg shadow-lg lg:px-0"
        />
      </div>
    </div>
  );
}

export default Hero;
