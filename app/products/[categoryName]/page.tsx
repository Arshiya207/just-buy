import type { TProduct } from "@/app/types/types";
import Card from "@/app/components/Card";
import { searchProducts } from "@/app/utils/searchProducts";
type CategoryProductsPagePropstype = {
  params: Promise<{ categoryName: string }>;
  searchParams: Promise<{ search: string }>;
};

export default async function CategoryProductsPage({
  params,
  searchParams,
}: CategoryProductsPagePropstype) {
  const categoryNameParam: string | undefined = (await params)?.categoryName;
  if (!categoryNameParam) return;
  const response: Response = await fetch(
    `https://fakestoreapi.com/products/category/${categoryNameParam}`
  );
  if (!response) throw new Error("there was an error fetching from a category");
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
