import { TProduct } from "../types/types";
import Badge from "./Badge";
export default function Card({product}:{product:TProduct}){
    return (
        <div className="cursor-pointer border border-stone-500 rounded-lg  flex flex-col shadow-lg p-5 items-center gap-8 min-w-4 min-h-16  w-full">
            <div className="object-cover w-1/2 h-40 flex ">

                <img className="w-full h-full " src={product.image} alt="product image" />     
            </div>
           <div className="flex flex-col gap-4 items-start">
                <h2 className="font-bold text-lg line-clamp-2">{product.title}</h2>
                <p className="line-clamp-2 ">{product.description}</p>
                <Badge>{product.category}</Badge>
            </div>     

        </div>
    )
}