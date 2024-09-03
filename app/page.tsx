import Coin from "@/components/Logos/Coins";
import CoinFunding from "@/components/Logos/CoinFunding";
import Idea from "@/components/Logos/Idea";

export default function Home() {
  return (
    <>
      <div className="h-[83vh] text-white flex flex-col gap-4 justify-center items-center container w-[80%] mx-auto md:w-[40%] 2xl:w-[30%]">
        <h1 className="font-extrabold text-4xl text-center gap-2">
          Ignite Support, Spark Creativity
        </h1>
        <p className="text-center text-xl p-2">
          Join FanFuel today to fuel the creativity of the artists you admire. Your support empowers creators to bring their visions to life!
        </p>
        <div>
          <button type="button" className="text-white w-[8rem] bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
          <button type="button" className="text-white w-[8rem] bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        </div>
      </div>

      <div className="min-h-[70vh] text-white flex flex-col gap-4 items-center container w-[90%] mx-auto p-2">
        <h2 className="font-bold text-3xl text-center">Fueling Projects, One Fan at a Time</h2>
        <h3 className="mt-10 font-bold text-xl text-center">What can you do with FanFuel ?</h3>


        <div className="w-[100%] flex flex-col gap-8 mt-4 justify-around items-center flex-wrap md:w-[60%] md:flex-row">

          <div className="flex flex-col items-center gap-2">
            <div className="bg-slate-800 h-[5rem] w-[5rem] rounded-full flex justify-center items-center">
              <Coin />
            </div>

            <p className="text-center">
              Fund Your Projects
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-slate-800 h-[5rem] w-[5rem] rounded-full flex justify-center items-center">
              <CoinFunding />
            </div>

            <p className="text-center">
              Fund Your Product
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">

            <div className="bg-slate-800 h-[5rem] w-[5rem] rounded-full flex justify-center items-center">
              <Idea />
            </div>

            <p className="text-center">
              Fund Your Ideas
            </p>

          </div>
        </div>

      </div>
    </>
  );
}
