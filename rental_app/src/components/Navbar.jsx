import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import menu from "../assets/menu.png"
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import { color } from "framer-motion";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="flex flex-col w-full bg-gray-100 p-4 shadow h-[100px]">
      <div className="flex w-full justify-between items-center">
      <Link to="/" className="text-xl font-bold ">Rentify</Link>

      <div className="flex gap-6">
        <Link to="/homes">Homes</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/cars">Cars</Link>
      </div>
       <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className={`border-0 focus:outline-none bg-transparent p-0 cursor-pointer w-10 h-10
           transition-transform duration-150 ease-out
           ${open ? "translate-y-[1px] scale-90" : "translate-y-0" }`}
        >
          <img
            src={menu}
            alt="avatar"
            width={40}
            height={40}
            style={{ display: "block"}}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="end" style={{ width: 192, color:"white" }}>
        <DropdownMenuItem>Add Property</DropdownMenuItem>
        <DropdownMenuItem>Rent Calculator</DropdownMenuItem>
        <DropdownMenuItem> Accounts</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Login in /Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    
     
        
     
    </nav>
    </>
  );
}