import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl p-3">
              Aayush Nagpal
              <span className="hidden sm:block text-2xl mt-3 p-4">
                Hi there! Welcome to my portfolio! I'm just starting out as a
                full-stack developer, but I'm really excited to show you what
                I've been working on. I love making things on the internet that
                people can use and enjoy, and I hope you'll like what you see
                here!
              </span>
            </h2>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="flex justify-between border-2 border-red-400 max-w-full h-full">
        <div>
          <img
            className="sm:w-96 w-48"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt="image2"
          />
        </div>
        <div className="flex flex-col justify-top pl-80 ">
            <h1 className="text-center">My Projcts</h1>
            <span>I am aayush Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi id illo soluta, rerum recusandae aperiam dolor doloremque accusamus, assumenda minima impedit iusto consequatur. Repellendus voluptatem ipsam temporibus explicabo earum?</span>
        </div>
      </div>
    </div>
  );
}
