import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            className="max-h-72 w-96" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About me :
            </h2>
            <p className="mt-6 text-gray-600">
              Hey! Thanks for stopping by. I'm excited to share a bit about
              myself with you. I've always been drawn to the magic of technology
              and its ability to bring ideas to life. As I embark on this
              journey into web development, I'm fueled by a curiosity to
              understand how things work under the hood and a drive to create
              meaningful experiences in the digital world.
            </p>
            <p className="mt-4 text-gray-600">
              While I may be new to the scene, I'm no stranger to hard work and
              dedication. I thrive on challenges and believe that every obstacle
              is an opportunity for growth. Whether it's debugging a stubborn
              piece of code or mastering a new framework, I approach each task
              with a determination to succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
