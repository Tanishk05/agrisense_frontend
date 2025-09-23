import { signIn } from "@/auth";

export default function AuthBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("", { redirectTo: "/" });
      }}
    >
      <button type="submit">
        <p className="text-black font-bold">Login</p>
      </button>
    </form>
  );
}
