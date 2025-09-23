"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const CaptureBtn = () => {
    const router = useRouter();
  return (
    <div className="bg-black text-lime-400 rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold" onClick={()=>{router.push('/')}}>
        +
    </div>
  )
}

export default CaptureBtn