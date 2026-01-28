"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const { data: session } = useSession();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      if (!session?.user?.email) return; // Check if session and email are defined

      try {
        const response = await axios.get(`/api/history?email=${session.user.email}`); // Log the response data directly
        setRecords(response.data.records); // Assuming response.data contains the array of records
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    getHistory();
  }, [session]); // Include session in dependency array

  return (
    <div className="p-4">
      {records.length > 0 ? (
        records.map((record, key) => (
          <div key={key} className="flex flex-col items-center my-8">
            <Image src={record.url} alt="image" height={200} width={200}/>
            <p>Disease : {record.disease}</p>
            <p className="p-4">Prevent: {record.prevent}</p>
            <p className="p-4">Supplement: {record.supplement}</p>
            <Image src={record.supplementImage} alt="suppImage" height={100} width={100}/>
            <Link href={record.supplementLink}>Buy Link</Link>
          </div>
        ))
      ) : (
        <p>No records found.</p>
      )}
    </div>
  );
};

export default Page;
