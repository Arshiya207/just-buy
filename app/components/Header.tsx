import Image from "next/image"
import NavLink from "./NavLink"
import logo from "@/public/just-buy-logo.svg"
export default function Header(){
    return (
        <header className="flex items-center shadow-sm  p-2 px-8 bg-white text-stone-700 h-1/10">
         <NavLink   href="/"><Image className="cursor-pointer" src={logo} height={40} width={39} alt="logo"/></NavLink> 
            <nav className=" ml-auto">
                    <ul className="flex gap-8">
                        <NavLink include={true} className="text-amber-400 underline underline-offset-4" href="/products"><li className="hover:text-amber-400 hover:underline hover:underline-offset-4 transition font-bold ">PRODUCTS</li></NavLink>
                   </ul>
            </nav>
        </header>
    )
}