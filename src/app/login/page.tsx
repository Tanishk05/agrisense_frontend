import React from "react";
import { auth, signIn,providerMap } from "@/auth";


const page = () => {
  return (
    <div className="flex justify-between flex-col items-center h-screen bg-[#1C1C1C]">
      <div className="top w-full h-[10vh] bg-[#BFFE3A]"></div>
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-center text-lime-300 font-bold mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-white font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 mt-1 rounded-md bg-zinc-900 text-white border-none focus:ring-2 focus:ring-lime-300"
            />
          </div>
          <div>
            <label className="block text-white font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-2 mt-1 rounded-md bg-zinc-900 text-white border-none focus:ring-2 focus:ring-lime-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-300 text-black py-2 rounded-md font-bold hover:bg-lime-400 transition duration-300"
          >
            LOGIN
          </button>
        </form>

        <p className="text-white mt-6 text-center">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-lime-300">
            Click to Register
          </a>
        </p>
      </div>
      {Object.values(providerMap).map((provider, index) => (
        <form key={index}
          action={async () => {
            "use server"
            try {
              await signIn(provider.id, {
                redirectTo: "/",
              })
            } catch (error) {
              throw error
            }
          }}
        >
          <button type="submit" className="bg-lime-300 text-black rounded-md font-bold hover:bg-lime-400 transition duration-300 py-4 px-2">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
      <div className="top w-full h-[10vh] bg-[#BFFE3A]"></div>
    </div>
  );
};

export default page;
