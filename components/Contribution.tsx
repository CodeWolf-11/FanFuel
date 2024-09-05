import React from "react";
import "@/public/man.png";


const Contribution: React.FC = () => {
    return <div className="flex w-full justify-between items-center bg-red-400 rounded-lg p-3">
        <div className="flex justify-center items-center gap-3">
            <img className="w-[3rem] h-[3rem] rounded-full self-start" src={"man.png"} alt="" />
            <div className="flex-grow">
                <p className="text-sm flex items-center justify-between">
                    <span className="font-bold">Nishant Rai</span>
                    <span className="text-xl font-bold">0.111111111 SOL</span>
                </p>
                <p className="text-xl tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis culpa optio illum ipsa sapiente perspiciatis, laudantium dolores temporibus ex molestiae aut, exercitationem dolorem iusto, dolore hic laboriosam aperiam cupiditate rem beatae repellat excepturi fugit? Dolore.</p>
            </div>
        </div>

    </div>
}

export default Contribution;