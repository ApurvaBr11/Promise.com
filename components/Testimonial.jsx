'use client'
import React, { useState } from 'react'

const Testimonial = () => {
  const [first, setfirst] = useState(false)
  const [first2, setfirst2] = useState(false)
  const [first3, setfirst3] = useState(false)
  const [first4, setfirst4] = useState(false)
  const [first5, setfirst5] = useState(false)
  const [first6, setfirst6] = useState(false)
  const [first7, setfirst7] = useState(false)
  const [first8, setfirst8] = useState(false)
  const [first9, setfirst9] = useState(false)

  console.log(first,first2 , first3 , first4 , first5 , first6 , first6 , first7 , first8 , first9)
  return (
    <div className='h-screen bg-black p-12 flex justify-center items-center text-white relative'>
        <div className="absolute ">
          <div onClick={()=>setfirst(!first)}  className="h-60 relative w-48 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first?"init":"fin"} z-50 rounded-sm bg-yellow-50 -bottom-10 left-3  absolute  items-center justify-center font-semibold text-[8px] px-4 py-2 text-black cursor-pointer `}>
            Renewed Roots Charity empowers communities for lasting change. Proud to witness their positive impact
            </div>
          </div>
        </div>
        <div className="absolute top-36 left-80">
          <div onClick={()=>setfirst2(!first2)} className="h-44 relative w-32 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div  className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first2?"init":"fin"}   rounded-sm bg-yellow-50 w-60 -bottom-10 left-4  absolute  font-semibold px-4 py-2 text-black cursor-pointer text-[8px] `}>
            I am grateful to have crossed paths with [NGO Name]. Their tireless efforts in addressing social issues and supporting vulnerable populations are commendable. The transparency and accountability they uphold in their operations make them a trustworthy organization.
            </div>
          </div>
        </div>
        <div className="absolute top-80 left-20">
          <div  onClick={()=>setfirst3(!first3)} className="h-56 relative w-44 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first3?"init":"fin"} text-[8px] px-4 py-2  rounded-sm bg-yellow-50 -bottom-10 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Proud supporter of Renewed Roots Charity! Their commitment to positive change is inspiring</div>
          </div>
        </div>
        <div className="absolute top-96 left-[29rem]">
          <div onClick={()=>setfirst4(!first4)} className="h-32 relative w-28 rounded-tl-xl rounded-tr-2xl border bg-[url('https://images.unsplash.com/photo-1542532486-4808296ddd72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div  className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first4?"init":"fin"} text-[8px] w-40 px-4 py-2  rounded-sm bg-yellow-50 -bottom-10 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Renewed Roots Charity truly makes a difference in the community. Honored to be a part of their mission</div>
          </div>
        </div>
        <div className="absolute top-80 left-[34rem]">
          <div  onClick={()=>setfirst5(!first5)}  className="h-24 relative w-16 rounded-tl-xl rounded-tr-2xl border bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first5?"init":"fin"} w-52 text-[8px] px-4 py-2  rounded-sm bg-yellow-50 -bottom-10 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Renewed Roots Charity empowers communities for lasting change. Proud to witness their positive impact.</div>
          </div>
        </div>
        <div className="absolute top-[28rem] right-[8rem]">
          <div onClick={()=>setfirst6(!first6)} className="h-44 relative w-36 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div  className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first6?"init":"fin"} w-52 text-[8px] px-4 py-2 rounded-sm bg-yellow-50 -bottom-10 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Happy to be a part of Renewed Roots Charity's mission. Small actions lead to big impacts, and they're proof of that.</div>
          </div>
        </div>
        <div className="absolute bottom-[13rem] right-[25rem]">
          <div onClick={()=>setfirst7(!first7)} className="h-44 relative w-36 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div  className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first7?"init":"fin"} w-60 text-[8px] px-4 py-2  rounded-sm bg-yellow-50 -bottom-10 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Renewed Roots Charity empowers communities for lasting change. Proud to witness their positive impact.</div>
          </div>
        </div>
        <div className="absolute top-[14rem] right-[21rem]">
          <div onClick={()=>setfirst8(!first8)} className="h-28 relative w-24 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div  className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first8?"init":"fin"} w-60 text-[8px] px-4 py-2  rounded-sm bg-yellow-50 -bottom-20 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Choosing Renewed Roots Charity as my charity of choice has been a decision filled with gratitude. Their transparent approach and regular updates make me feel connected to the impact of my contributions. In a world where change is essential, Renewed Roots Charity stands out as a beacon of hope</div>
          </div>
        </div>
        <div className="absolute top-[8rem] right-[7rem]">
          <div onClick={()=>setfirst9(!first9)} className="h-32 relative w-32 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div  className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first9?"init":"fin"} text-[8px] px-4 py-2  w-44 rounded-sm bg-yellow-50 -bottom-28 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>Renewed Roots Charity has redefined what it means to be a catalyst for positive change. Their tireless efforts in community engagement, education, and sustainable development are creating a ripple effect that extends far beyond their immediate projects.</div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial