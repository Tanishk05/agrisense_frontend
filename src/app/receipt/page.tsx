"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { jsPDF } from "jspdf";
import { useRouter } from "next/navigation";
import "./recipt.css";

interface PredictionData {
  disease: string;
  prevent: string;
  supplement?: string;
  supplementImage?: string;
  supplementLink?: string;
  url?: string;
}

const Receipt: React.FC = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<PredictionData | null>(null);
  const router = useRouter();

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  // Fetch prediction data from session storage
  useEffect(() => {
    const predictionData = sessionStorage.getItem("predictionData");
    if (predictionData) {
      setData(JSON.parse(predictionData) as PredictionData);
    }
  }, []);

  // PDF download function
  const downloadPDF = () => {
    if (!data) return;

    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Plant Disease Diagnosis Report", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const condition = data.disease?.includes("Healthy") ? "Safe" : "Not Safe";
    doc.text(`Condition: ${condition}`, 20, 30);
    doc.text(`Disease: ${data.disease || "Not available"}`, 20, 40);

    doc.text("Prevention Steps:", 20, 50);
    const preventionText = data.prevent || "No prevention data available";
    const wrappedText = doc.splitTextToSize(preventionText, 180);
    doc.text(wrappedText, 20, 60);

    if (data.supplement) {
      doc.text("Recommended Supplement:", 20, 80);
      doc.text(`${data.supplement}`, 20, 90);
    }

    if (data.supplementImage) {
      const imgUrl = data.supplementImage;
      doc.addImage(imgUrl, "JPEG", 20, 100, 40, 40);
    }

    doc.save("prediction_report.pdf");
  };

  if (!session) return null;

  return (
    <div className="bg-[#1C1C1C] h-screen overflow-auto p-4">
      <div className="flex items-center justify-between p-4">
        <p className="text-white text-xl">
          Hi! <b>{session.user?.name || "Guest"}</b>
        </p>
        <button
          className="bg-lime-400 text-black py-2 px-6 rounded-lg text-lg font-bold hover:bg-lime-500 transition duration-200"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>

      <div className="scrollbar-custom w-full p-4">
        {data ? (
          <>
            <div className="flex justify-center mb-4">
              <img
                src={data.url || "/default-placeholder.jpg"}
                className="w-64 h-64 object-cover rounded-lg"
                alt="Captured Plant"
              />
            </div>
            <div className="result_text text-center text-white p-4">
              <p className="text-xl">
                Condition is{" "}
                <span
                  className={
                    data.disease?.includes("Healthy")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {data.disease?.includes("Healthy") ? "Safe" : "Not Safe"}
                </span>
              </p>
              <p className="text-xl">
                Disease:{" "}
                <span className="text-yellow-400 font-bold">
                  {data.disease || "Not available"}
                </span>
              </p>
            </div>

            <div className="bg-zinc-800 text-white p-4 rounded-lg mt-4">
              <p className="text-red-500 font-bold">Prevention:</p>
              <p>{data.prevent || "No prevention data available"}</p>

              {data.supplement && (
                <div className="mt-4">
                  <p className="text-blue-500 font-bold">Recommended Supplement:</p>
                  <p>{data.supplement}</p>
                  {data.supplementImage && (
                    <div className="mt-2">
                      <Image
                        src={data.supplementImage}
                        alt="Supplement Image"
                        height={100}
                        width={100}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}
                  {data.supplementLink && (
                    <a
                      href={data.supplementLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline mt-2 block"
                    >
                      Buy Now
                    </a>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-white">Loading data...</div>
        )}
      </div>
    </div>
  );
};

export default Receipt;
