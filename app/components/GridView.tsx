import { ReactNode } from "react";

export default function GridView({children,className=""}:{children:ReactNode,className?:string}){
    return <div className={`grid grid-cols-1 p-4 px-8 gap-10 justify-items-center ${className}`}>
            {children}
    </div>
}