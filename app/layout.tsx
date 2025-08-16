import { ReactNode } from "react";
import Header from "./components/Header";
import {Albert_Sans,Montserrat_Alternates} from "next/font/google"
import "@/app/globals.css"


const albertSans= Albert_Sans({subsets:["latin"], display:"swap"})
const montserratAlternates = Montserrat_Alternates({subsets:["latin"] ,weight:["100","200","300","400"],display:"swap",variable:"--font-Montserrat-Alternates" })
export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${albertSans.className} ${montserratAlternates.variable}`}>
      <body>
        <div className="h-screen overflow-auto">
        <Header/>
        {children}
        </div>
      </body>
    </html>
  );
}
