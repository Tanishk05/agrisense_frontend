import { signIn } from "@/auth";

export default function GithubBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}
