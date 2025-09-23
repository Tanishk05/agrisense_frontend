"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProfileBtn = () => {
    const router = useRouter();
  return (
    <Image
            src="https://static.vecteezy.com/system/resources/previews/016/774/588/original/3d-user-icon-on-transparent-background-free-png.png"
            alt="Profile"
            className="h-8 w-8 rounded-full bg-green-300"
            height={500}
            width={500}
            onClick={()=>{router.push("/profile")}}
          />
  )
}

export default ProfileBtn