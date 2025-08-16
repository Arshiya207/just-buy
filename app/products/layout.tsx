import { ReactNode } from "react";
import ProductsNav from "../components/ProductsNav";
import ProductsSearchFrom from "../components/ProductsSearchFrom";
import GridView from "../components/GridView";
export default function ProductsLayout({children}:{children:ReactNode}){
    
    
    return (
        <div className="sm:flex flex-wrap">
        <ProductsNav className="sm:order-2 sm:flex-col sm:flex-1/3 md:flex-1/4"/>
        <ProductsSearchFrom className="sm:order-1 sm:w-full "/>
        <GridView className="sm:order-3 sm:flex-2/3 md:flex-3/4  md:grid-cols-2 sm:gap-2 sm:gap-x-2  sm:p-x-4">
                 {children}
        </GridView>
        </div>
    )
}