"use client"

import React, { use } from "react";


const UserName: React.FC<{ username: string }> = ({ username }) => {
    return <div onClick={() => {
        window.navigator.clipboard.writeText(`${window.location.href}`)
    }} className="cursor-pointer username font-bold text-xl mt-1 text-white">
        {`@${username}`}
    </div>
}

export default UserName;