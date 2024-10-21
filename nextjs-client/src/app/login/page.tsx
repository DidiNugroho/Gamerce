import Link from "next/link";

export default function Login() {
  return (
    <form className="flex flex-col justify-center max-w-lg mx-auto px-4 mt-8 space-y-6 font-[sans-serif] text-[#333]">
      <div>
        <label className="mb-2 text-2xl block font-extrabold">
          Welcome to Gamerce
        </label>
        <label className="mb-2 text-sm block">
          Sign In To Your Gamerce Account
        </label>
        <input
          type="text"
          placeholder="Email"
          className="px-4 py-3 mt-6 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 mt-6 py-3 text-lg rounded-md bg-white border border-gray-400 w-full outline-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-red-500 font-bold text-white py-3 mt-6 rounded-md w-full hover:bg-red-600 transition uppercase"
      >
        Sign In
      </button>

      <div className="flex justify-center items-center mt-4">
        <span className="text-center text-xs">OR</span>
      </div>

      <div className="text-center">
        <Link href={"/register"}>
          <button
            type="button"
            className="bg-white font-bold text-black py-3 mt-2 rounded-md w-full border border-gray-400 hover:bg-gray-100 transition uppercase"
          >
            Create Account
          </button>
        </Link>
      </div>
    </form>
  );
}
