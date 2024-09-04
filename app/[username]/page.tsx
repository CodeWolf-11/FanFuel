import React from "react";

const Navbar: React.FC<{ params: { [key: string]: string } }> = ({ params }) => {
    return <>
        {String(params.username)}
    </>
}

export default Navbar;