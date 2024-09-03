import React from "react";
import Fire from "./Logos/Fire";

const Navbar: React.FC = () => {
    return <>
        <nav className="bg-slate-950 text-white flex justify-between items-center px-5 h-[17vh]">
            <div className="logo font-bold text-4xl flex">FanFuel
                <span>
                    <Fire></Fire>
                </span>
            </div>

            <ul className="flex justify-between gap-4 text-xl">
                <li>Home</li>
                <li>About</li>
                {/* <li>Projects</li> */}
                {/* <li>Sign Up</li>
                <li>Login</li> */}
            </ul>
        </nav>
    </>
}

export default Navbar;