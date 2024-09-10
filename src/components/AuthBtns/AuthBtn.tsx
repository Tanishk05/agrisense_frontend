import { signIn } from "@/auth";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AuthBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("", { redirectTo: "/" });
      }}
    >
      <button type="submit">
        <FontAwesomeIcon
          icon={faRightToBracket}
          className="text-orange-500 cursor-pointer w-6"
        />
      </button>
    </form>
  );
}
