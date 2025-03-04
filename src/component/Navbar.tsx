import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:7,backgroundColor:"lightblue"}}>

      <div>
        Logo
      </div>
    <div
      style={{
        display: "flex",
        gap: 20,
        padding: 5,
        justifyContent: "center",
        height: "80px",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <Link href="/performance"> Performance</Link>
      <Link href="/scale">Scale</Link>
      <Link href="/reliability">Reliability</Link>
    </div>

    </div>
  );
};

export default Navbar;
