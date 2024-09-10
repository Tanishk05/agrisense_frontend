"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const StoreBtn = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/store')
    }
  return (
    <Image
        src="https://static.vecteezy.com/system/resources/previews/018/741/997/original/shopping-cart-buy-and-shopping-symbol-user-interface-theme-3d-icon-rendering-illustration-in-green-color-isolated-png.png"
        alt="Shop"
        className="h-8 w-8"
        height={500}
        width={500}
        onClick={handleClick}
      />
  )
}

export default StoreBtn