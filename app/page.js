"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const img = imgRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const movementX = (clientX / window.innerWidth - 0.5) * 30;
      const movementY = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(img, { x: movementX, y: movementY, ease: "power1.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imgRef]);

  return (
    <div data-scroll-container>
      
      <div className="min-h-screen text-white bg-black relative bgr">
        <div className=" z-10 h-full  absolute flex flex-col justify-center items-center w-full tracking-tight">
          <p className="text-[200px]  font-bold grtext">We Promise</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae
            totam deleniti quod nam.
          </p>
        </div>
        <div className="min-h-screen flex justify-center items-center">
          <img
            ref={imgRef}
            className="absolute w-60 h-60"
            src="https://i.pinimg.com/originals/b8/30/b7/b830b79effffcc8c61a77bf14393766f.gif"
            alt=""
          />
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center text-white bg-black">
        hiii
      </div>
    </div>
  );
}
