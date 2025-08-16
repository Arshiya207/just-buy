import { TProduct, TProductsSearchParam } from "../types/types";
import Card from "../components/Card";
import { searchProducts } from "../utils/searchProducts";
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: TProductsSearchParam;
}) {
  const response: Response = await fetch("https://fakestoreapi.com/products");
  if (!response) throw new Error("there was a problem fetching from api");

  const result: TProduct[] = await response.json();

  const finalResultBasedOnSearchParam = await searchProducts(
    result,
    searchParams
  );
  return (
    <>
      {finalResultBasedOnSearchParam.map((product: TProduct) => (
        <Card key={product.id} product={product} />
      ))}
    </>
  );
}
