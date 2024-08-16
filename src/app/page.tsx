import React from "react";
import GithubBtn from "@/components/AuthBtns/GithubBtn";
import GoogleBtn from "@/components/AuthBtns/GoogleBtn";
import LogoutBtn from "@/components/AuthBtns/LogoutBtn";
import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  return (
    <div>
      Hello
      {!session ? <><GithubBtn /><GoogleBtn/></> : <LogoutBtn/>}
    </div>
  );
};

export default page;
