  import type { TProduct } from "../types/types";

  export  function  searchProducts(products:TProduct[],query:{search:string}) {
    const searchQuery=  query

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