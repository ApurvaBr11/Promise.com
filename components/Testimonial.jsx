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
  return (
    <div className='h-screen bg-black p-12 flex justify-center items-center text-white relative'>
        <div className="absolute ">
          <div className="h-60 relative w-48 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst(!first)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-36 left-80">
          <div className="h-44 relative w-32 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst2(!first2)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first2?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-80 left-20">
          <div className="h-56 relative w-44 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst3(!first3)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first3?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-96 left-[29rem]">
          <div className="h-32 relative w-28 rounded-tl-xl rounded-tr-2xl border bg-[url('https://images.unsplash.com/photo-1542532486-4808296ddd72?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst4(!first4)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first4?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-80 left-[34rem]">
          <div className="h-24 relative w-16 rounded-tl-xl rounded-tr-2xl border bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst5(!first5)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first5?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-[28rem] right-[8rem]">
          <div className="h-44 relative w-36 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst6(!first6)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first6?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute bottom-[13rem] right-[25rem]">
          <div className="h-44 relative w-36 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst7(!first7)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first7?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-[14rem] right-[21rem]">
          <div className="h-28 relative w-24 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst8(!first8)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first8?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
        <div className="absolute top-[8rem] right-[7rem]">
          <div className="h-32 relative w-32 rounded-tl-3xl rounded-tr-xl border bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-top bg-cover bg-no-repeat">
            <div onClick={()=>setfirst9(!first9)} className="w-5 h-5 rounded-full bg-yellow-200 -bottom-2 left-2 absolute flex items-center justify-center font-black text-black cursor-pointer">+</div>
            <div className={`${first9?"init":"fin"}  w-60 h-44 rounded-sm bg-yellow-50 -bottom-40 left-4  absolute  items-center justify-center font-black text-black cursor-pointer `}>+</div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial