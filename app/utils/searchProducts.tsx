  import type { TProduct,TProductsSearchParam } from "../types/types";

  export async function  searchProducts(products:TProduct[],searchParams:TProductsSearchParam) {
    const searchQuery= await searchParams

    if (searchQuery?.search && searchQuery?.search.length > 0) {
      return products.filter(
        (product) =>
          product.description
            .toLowerCase()
            .includes(searchQuery.search.toLowerCase()) ||
          product.title.toLowerCase().includes(searchQuery.search.toLowerCase())
      );
    } else return products;
  }