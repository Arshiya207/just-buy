"use client"
import { TProduct } from "../types/types";
import Image from "next/image";
import Badge from "./Badge";
import { useState } from "react";
export default function Card({product}:{product:TProduct}){
    const [imgSrc, setImgSrc] = useState(product.image);
    return (
        <div className="cursor-pointer border border-stone-500 rounded-lg  flex flex-col shadow-lg p-5 items-center gap-8 min-w-4 min-h-16  w-full">
            <div className=" w-1/2 h-40 flex relative ">

                <Image className="object-cover" src={imgSrc} fill alt="product image" onError={()=>setImgSrc("/placeholder.png")}/>     
            </div>
           <div className="flex flex-col gap-4 items-start">
                <h2 className="font-bold text-lg line-clamp-2">{product.title}</h2>
                <p className="line-clamp-2 ">{product.description}</p>
                <Badge>{product.category}</Badge>
            </div>     

        </div>
    )
}