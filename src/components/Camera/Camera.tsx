"use client";

import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./Camera.css";
import ReceiptBtn from "../UtilityBtns/ReceiptBtn";
import { useSession } from "next-auth/react"

const Camera = () => {
  const videoConstraints = { width: 400, facingMode: "environment" };
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [isData, setIsData] = useState(false);
  const [disease, setDisease] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [prevent, setPrevent] = useState("");
  const [supplement, setSupplement] = useState("");
  const [supplementImage, setSupplementImage] = useState("");
  const [supplementLink, setSupplementLink] = useState("");
  const router = useRouter();
  const { data: session } = useSession()

  const capturePhoto = useCallback(() => {
    const imageSource = webcamRef.current?.getScreenshot();
    setUrl(imageSource);
  }, [webcamRef]);
  
  const base64ToBlob = (base64, mimeType) => {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: mimeType });
  };
  
  const uploadBase64Image = async (base64Image) => {
    const mimeType = base64Image.match(/data:(.*?);base64/)[1];
    const blob = base64ToBlob(base64Image, mimeType);
    const formData = new FormData();
    formData.append("image", blob, "image.jpg");
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error uploading the image:", error);
      return null;
    }
  };
  
  const onSubmitHandler = async () => {
    if (!url) return;
    setClicked(true);
    const data = await uploadBase64Image(url);
    if (data) {
      setDisease(data.title);
      setConfidence(data.confidence);
      setPrevent(data.prevent);
      setSupplement(data.supplement_name);
      setSupplementImage(data.supplement_image_url);
      setSupplementLink(data.supplement_buy_link);
      setIsData(true);

      if(session && data.title){
        try {
          const historyData = {
            email: session?.user?.email,
            disease: data.title,
            prevent: data.prevent,
            supplement: data.supplement_name,
            supplementImage: data.supplement_image_url,
            supplementLink: data.supplement_buy_link,
            url: url,
          };
  
          const response = await axios.post("/api/history", historyData, {
            headers: {
              "Content-Type": "application/json", // Specify that you're sending JSON
            },
          });
          console.log("History saved successfully");
        } catch (error) {
          console.error("Error uploading the image:", error);
        }
      }
    } else {
      alert("Error: Unable to fetch prediction.");
    }
    setClicked(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const openFileDialog = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="w-screen h-[80vh] overflow-hidden flex flex-col items-center justify-between bg-[#1C1C1C] text-white">
      {/* Top Section */}

      {/* Camera Section */}
      <div className="flex flex-col gap-8 items-center justify-center flex-grow space-y-4">
        <div className="w-64 h-64 bg-zinc-800 rounded-lg flex items-center justify-center relative shadow-lg overflow-hidden">
          {url ? (
            <img src={url} className="rounded-lg" alt="Captured or Uploaded" />
          ) : (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              mirrored={true}
              className="w-full h-full z-20"
            />
          )}
          <div className="absolute z-30 inset-0 border-4 border-blue-500" />
        </div>
        {clicked && (
          <>
            <p className="text-center text-xl">Hold on, we're analyzing...</p>
            <Loader />
          </>
        )}
        {isData && (
          <div className="text-center space-y-2 p-4 bg-[#27272A] rounded-lg shadow-md w-[97%] overflow-y-auto max-h-64 custom-scrollbar">
            <ReceiptBtn
              disease={disease}
              confidence={confidence}
              prevent={prevent}
              supplement={supplement}
              supplementImage={supplementImage}
              supplementLink={supplementLink}
              url={url}
            />
            <p className="text-lg font-bold">
              <span className="text-white">Plant</span> is{" "}
              <span
                className={
                  disease && disease.includes("Healthy")
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {disease && disease.includes("Healthy") ? "Safe" : "Not Safe"}
              </span>
            </p>
            <p>
              Disease: <span className="text-yellow-400">{disease}</span>
            </p>
            <p>Confidence: {confidence ? `${confidence}%` : "Unknown"}</p>
            <div className="mt-4">
              <p className="font-semibold text-red-500">Prevention:</p>
              <p>{prevent}</p>
              <p className="font-semibold text-green-400 mt-4">
                Recommended Supplement:
              </p>
              <p>{supplement}</p>
              <div className="flex items-center justify-around">
                {supplementImage && (
                  <img
                    src={supplementImage}
                    alt="Supplement"
                    className="w-32 h-32 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/next.svg"; // Fallback image path
                    }}
                  />
                )}
                {supplementLink && (
                  <a
                    href={supplementLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Buy Now
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {!isData && !clicked && (
          <>
            <button
              onClick={openFileDialog}
              className="bg-lime-400 text-black font-bold py-2 px-8 rounded"
            >
              Upload from Device
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              id="fileInput"
            />
            <button
              onClick={capturePhoto}
              className="bg-lime-400 text-black font-bold py-2 px-8 rounded"
            >
              Capture
            </button>
            {url && (
              <button
                onClick={onSubmitHandler}
                className="bg-[#BFFE3A] text-zinc-900 font-bold py-2 px-8 rounded-full mt-4"
              >
                Submit
              </button>
            )}
          </>
        )}
      </div>

      {/* Bottom Navigation */}
    </div>
  );
};

export default Camera;
