import Fire from "@/components/Logos/Fire";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[81vh] text-white flex flex-col gap-4 justify-center items-center w-[80%] mx-auto md:w-[40%]">
        <h1 className="font-extrabold text-4xl text-center gap-2">
          Ignite Support, Spark Creativity
        </h1>
        <p className="text-center text-xl p-2">
          Join FanFuel today to fuel the creativity of the artists you admire. Your support empowers creators to bring their visions to life!
        </p>
        <div>
          <button type="button" className="text-white w-[8rem] bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
          <button type="button" className="text-white w-[8rem] bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </div>
      </div>
    </>
  );
}
