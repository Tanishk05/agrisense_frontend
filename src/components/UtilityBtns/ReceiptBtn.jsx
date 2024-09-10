"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const ReceiptBtn = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/receipt')  // Navigate to the receipt page on click
    }
  return (
    <button className="bg-lime-400 text-black py-2 px-6 rounded-lg text-lg font-bold" onClick={handleClick}>
          Receipt
    </button>
  )
}

export default ReceiptBtn