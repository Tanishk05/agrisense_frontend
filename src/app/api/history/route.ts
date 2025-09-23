import dbConnect from "@/lib/dbConnect";
import History from "@/models/historyModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const {
      email,
      disease,
      prevent,
      supplement,
      supplementImage,
      supplementLink,
      url,
    } = reqBody;

    const newHistory = new History({
      email,
      disease,
      prevent,
      supplement,
      supplementImage,
      supplementLink,
      url,
    });
    const savedHistory = await newHistory.save();
    return NextResponse.json({ newHistory });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const url = new URL(request.url); // Create a URL object from the request URL
    const email = url.searchParams.get("email");
    const records = await History.find({ email });
    if (records.length === 0) {
      return NextResponse.json({
        message: `No records found for email: ${email}`,
      });
    }
    return NextResponse.json({ records });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
