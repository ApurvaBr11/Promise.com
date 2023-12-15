const Package = () => {
  return (
    <div className="  rotating-container h-screen bg-black flex gap-7 justify-center px-12 items-end text-white relative">
      <div className="absolute top-16  w-full h-96 text-7xl flex flex-col font-semibold items-center text-center">
        <div className=" flex justify-center gap-2 relative">
          Our five believes ,
        </div>
        <p className=""> which helps us to fly</p>
      </div>
      <div className="w-1/5 h-4/5 bg-white rounded-xl text-black rotating-div bg-[url('https://i.pinimg.com/originals/a4/8e/33/a48e33a09335b257fe221c0943e4e1ea.gif')] bg-top bg-contain bg-no-repeat flex items-end justify-center">
      <div className="w-full h-2/3 px-4 pt-12 space-y-5">
        <p className="font-bold text-xl">Innovation</p>
        <p className="text-xs">At our core, we embrace a mindset of continuous improvement and creative problem-solving. We encourage our team members to think beyond conventional boundaries, explore new ideas, and challenge the status quo.</p>
        <p className="text-xs">
        By fostering an environment that values innovation, we position ourselves to adapt to emerging trends, meet evolving customer needs, and maintain a competitive edge in the market
        </p>
      </div>
      </div>
      <div className="w-1/5 h-1/2 bg-[#2e2e2e] rounded-xl rotating-div bg-[url('https://i.pinimg.com/originals/8a/35/e8/8a35e83c9ad80da5e4658f1978ba6b27.gif')] bg-center bg-contain bg-no-repeat flex items-end justify-center">
      <div className="w-full h-2/3 px-4 pt-12 space-y-5">
        <p className="font-bold text-xl">Collaboration</p>
        <p className="text-xs">We recognize the strength that comes from collective effort. Collaboration is not just a buzzword for us; it's a fundamental aspect of our culture. We actively promote teamwork and open communication, valuing diverse perspectives and skills.</p>
      </div>
      </div>
      <div className="w-1/5 h-60 bg-blue-200 rounded-xl text-black rotating-div bg-[url('https://i.pinimg.com/originals/a7/3e/10/a73e10bec5f5a34243c2be0d6876c410.gif')] bg-center bg-cover px-6 flex flex-col items-center justify-end ">
        {/* <div className="h-16 -mb-1 w-full border-t-2 border-r-2 border-l-2 rounded-full flex justify-center items-center backdrop-blur-sm border-orange-500">
          Customer-Centric
        </div>
        <div className="h-16 w-full border-b-2 border-r-2 border-l-2 rounded-full flex justify-center items-center backdrop-blur-sm text-xs  border-orange-500">
          Prioritizing You
        </div> */}
        <div className="w-full h-3/4 pt-9 space-y-3">
        <p className="font-bold text-xl">Customer-Centric</p>
        <p className="text-xs">Our customers are at the heart of everything we do. We are committed to understanding their unique needs and exceeding their expectations. </p>
      </div>
      </div>
      <div className="w-1/5 h-1/2 rounded-xl  rotating-div bg-[url('https://i.pinimg.com/originals/9c/da/64/9cda6405c91f0a6060592638e58932c4.gif')] bg-top border border-gray-800 bg-contain bg-no-repeat bg-black flex items-end justify-center">
      <div className="w-full h-2/3 px-4 space-y-5">
        <p className="font-bold text-xl">Integrity</p>
        <p className="text-xs">Integrity is the bedrock of our business ethics. We hold ourselves to the highest standards of honesty, transparency, and accountability.</p>
        <p className="text-xs">Our commitment to integrity extends to our interactions within the company and in our dealings with clients, partners, and the community. </p>
      </div>
      </div>
      <div className="w-1/5 h-4/5 bg-[#f8f9fe] rounded-xl text-black rotating-div  bg-[url('https://i.pinimg.com/originals/39/b9/8f/39b98fd9cfae359c9d1fbee154bd279a.gif')] bg-top bg-contain bg-no-repeat flex items-end justify-center">
      <div className="w-full h-2/3 px-4 pt-12 space-y-5">
        <p className="font-bold text-xl">Adaptability</p>
        <p className="text-xs"> In a dynamic business environment, adaptability is not just a valuable trait; it's a necessity. We embrace change as an opportunity for growth and evolution.</p>
        <p className="text-xs"> Whether it's technological advancements, market shifts, or internal improvements, we proactively adapt to stay ahead. This flexibility allows us to navigate uncertainties with resilience, positioning us to thrive in an ever-changing landscape.</p>
      </div>
      </div>
    </div>
  );
};

export default Package;
