import React from "react";
import Package from "./Package";

const Analytics = () => {
  return (
   <div className="">
     <div className="h-screen text-white bg-black px-12 py-6">
      <p className="text-6xl font-bold">What We Offer</p>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center justify-center w-1/2 h-full ">
          <div className="h-1/3 border-t  w-full flex flex-col gap-5 p-6 relative pl-14">
            <p className="text-2xl">Cruitials Anatomy</p>
            <p className="text-sm w-4/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              accusantium praesentium, iusto necessitatibus cum doloribus
              consequuntur, soluta aliquid omnis iure voluptas voluptates
              pariatur sapiente aperiam, nisi libero neque explicabo tenetur.
            </p>
            <div className="w-44 h-44 rounded-full border-2 border-black bg-[#f7ffbb] text-black absolute right-0 -top-14 z-0 flex justify-center items-center flex-col">
              <p className="text-4xl font-black">17 + </p>
              <p className="text-sm ">Capital</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 h-full">
          <div className="h-1/3 border-t  w-full flex flex-col items-end justify-center gap-5 pr-14 relative">
            <p className="text-2xl">Cruitials Anatomy</p>
            <p className="text-sm w-4/6 text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              accusantium praesentium, iusto necessitatibus cum doloribus
              consequuntur, soluta aliquid omnis iure voluptas voluptates
              pariatur sapiente aperiam, nisi libero neque explicabo tenetur.
            </p>
            <div className="w-60 h-60 rounded-full border-2 border-black bg-[#eddfff] text-black absolute -left-20 -top-28 z-0 flex justify-center items-center flex-col">
              <p className="text-6xl font-black">112 K</p>
              <p className="text-lg ">Capital</p>
            </div>
          </div>
          <div className="h-1/3 border-t  w-full flex flex-col items-end justify-center gap-5 pr-14 relative">
            <p className="text-2xl">Cruitials Anatomy</p>
            <p className="text-sm w-4/6 text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              accusantium praesentium, iusto necessitatibus cum doloribus
              consequuntur, soluta aliquid omnis iure voluptas voluptates
              pariatur sapiente aperiam, nisi libero neque explicabo tenetur.
            </p>
            <div className="w-28 h-28 rounded-full border-2 border-black bg-[#39FF14] text-black absolute -left-10 -top-20 z-0 flex justify-center items-center flex-col">
              <p className="text-2xl font-black">9</p>
              <p className="text-sm ">Capital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Package/>
   </div>
  );
};

export default Analytics;
//#eddfff
