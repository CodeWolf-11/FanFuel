import React from "react";

const Navbar: React.FC<{ params: { [key: string]: string } }> = ({ params }) => {
    return <>
        <div className="w-[full]">
            <div className="banner-image relative w-full">
                <img className="object-contain w-full h-full" src="https://yt3.googleusercontent.com/mLmhDvFixcJ0_qhojvaYJYTYkpzqAIY4Crn20jLOCfqyb5SqIi1O4NDFHa8Gbljh-T_1yZf2Fg=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="" />
                <div className="rounded-full absolute -bottom-20 md:-bottom-20 left-1/2 -translate-x-1/2 flex justify-center items-center w-fit">
                    <img className="rounded-full w-[7rem] h-[7rem]" src="https://yt3.googleusercontent.com/ytc/AIdro_m05oPc8I5nhz_ej6JdKoxA6vglaI76AMqtDELBj1s2o0o=s160-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
            </div>
            <div className="profile-Info text-white mt-24 w-[100%] flex flex-col items-center ">

                <div className="username font-bold text-xl text-white">
                    {`@${params.username}`}
                </div>

                <div className=" text-gray-400 mt-3 font-thin">
                    {"Creating Animated art for VIT's"}
                </div>

                <div className="text-gray-400 mt-3 font-thin  text-xl">
                    {"9719 members. 82 posts. $15,240/release"}
                </div>
            </div>

            <div className="w-[90%] mx-auto mt-10 flex flex-col mb-5 gap-2 p-2 items-center sm:flex-row">
                <div className="bg-slate-900 w-full h-[20rem] flex flex-col jusitfy-center items-start overflow-auto rounded-lg sm:w-1/2">
                    <p className="w-full text-center font-bold text-2xl sticky top-0 bg-slate-950 p-2">Supporters</p>
                    <ul className="px-2 flex flex-col gap-3 w-full justify-center items-start mx-3">
                        <li className="h-[2rem]">Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                        <li className="h-[2rem]" >Hello this is me</li>
                    </ul>
                </div>

                <div className="bg-slate-900 w-full h-[20rem] rounded-lg sm:w-1/2 p-8">
                    <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
                    <div className="flex gap-2">
                        <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
                        <button className="bg-slate-950 p-3 rounded-lg font-bold">Pay</button>
                    </div>

                    <div>
                        <div className="flex gap-2 mt-5">
                            <button className="bg-slate-950 p-3 rounded-lg">Pay ₹10</button>
                            <button className="bg-slate-950 p-3 rounded-lg">Pay ₹100</button>
                            <button className="bg-slate-950 p-3 rounded-lg">Pay ₹1000</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;