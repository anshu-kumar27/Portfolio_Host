import React from "react";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  return (
    <div className="hero min-h-[calc(100vh-6rem)] bg-base-200">
      <div className="hero-content flex-col lg:flex-row p-4">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjU0bDQyMGl6anNwYnRzdmpkejl1MGxyYmJ4Mzg3Y3k2aHd6MXB6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YrJp9LFIDkwms/giphy.gif"
          className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl"
          alt="gif"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Hi, I am Anshu Kumar
            <br />
            <span className="text-2xl">
            I am a
            <span className="text-sky-400">
              <Typewriter
                words={[" Software Developer", " Fullstack Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            </span>
          </h1>
          <p className="py-6">
            Passionate about building full-stack applications with delightful user experiences.
          </p>
          <button className="btn btn-primary">Let's Connect</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;