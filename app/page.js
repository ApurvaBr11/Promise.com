"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Analytics from "@/components/Analytics";

export default function Home() {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);

  useLayoutEffect(() => {
    const img = imgRef.current;
    const img2 = imgRef2.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const movementX = (clientX / window.innerWidth - 0.5) * 30;
      const movementX2 = (clientX / window.innerWidth - 0.9) * 90;
      const movementY = (clientY / window.innerHeight - 0.5) * 30;
      const movementY2 = (clientY / window.innerHeight - 0.2) * 60;

      gsap.to(img, { x: movementX, y: movementY, ease: "power1.out" });
      gsap.to(img2, { x: movementX2, y: movementY2, ease: "power4.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [imgRef]);

  return (
    <div data-scroll-container>
      <div className="min-h-screen text-white bg-black relative bgr">
        <div className=" z-10 h-full  absolute flex flex-col px-12  w-full tracking-tight">
          <div className="md:text-[130px] text-[30px]  mt-10  font-bold  flex-col items-start justify-start flex">
            <div className="flex justify-center items-center gap-10">
              <p className="grtext leading-tight">we</p>
              <div className="w-52 h-28 overflow-hidden flex items-center rounded-full">
                <img
                  src="https://i.pinimg.com/originals/44/a5/2c/44a52caf835ad2d687e4d67ec8016632.gif"
                  alt=""
                />
              </div>
            </div>
            <div className="leading-tight grtext2">Are Rooting For humanity </div>
          </div>
        </div>
        <div className="min-h-screen flex justify-center items-center">
          <img
            ref={imgRef}
            className="relative bottom-44 z-40 right-60 w-32 h-32  rounded-full"
            src="https://i.pinimg.com/originals/dd/8c/e0/dd8ce028c9653fec6252fcc0a87ae8b0.gif"
            alt=""
          />
           <img
            ref={imgRef2}
            className="absolute w-60 h-60 "
            src="https://i.pinimg.com/originals/b8/30/b7/b830b79effffcc8c61a77bf14393766f.gif"
            alt=""
          />
        </div>
      </div>
      <Analytics/>
    </div>
  );
}
