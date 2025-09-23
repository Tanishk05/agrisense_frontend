"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const ReceiptBtn = ({disease, confidence, prevent, supplement, supplementImage, supplementLink, url}) => {
    const router = useRouter();
    const handleReceiptRedirect = () => {
      if(!disease) {
        router.push("/")
        return
      };
      // Store the prediction data in sessionStorage or localStorage (or use state management if necessary)
      sessionStorage.setItem("predictionData", JSON.stringify({
        disease,
        confidence,
        prevent,
        supplement,
        supplementImage,
        supplementLink,
        url
      }));
      router.push("/receipt"); // Redirect to the receipt page
    };
  return (
    <button className="bg-lime-400 text-black py-2 px-6 rounded-lg text-lg font-bold" onClick={handleReceiptRedirect}>
          Receipt
    </button>
  )
}

export default ReceiptBtn