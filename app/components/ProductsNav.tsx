import NavLink from "./NavLink";
export default async function ProductsNav({
  className = "",
}: {
  className?: string;
}) {
  const response: Response = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  if (!response.ok) {
    throw new Error(
      "there was a problem fetching data from api response of categories is 400"
    );
  }
  const categories: string[] | undefined = await response.json();

  if (!categories) {
    console.error("categories are undefined");
    return;
  }
  return (
    <ul
      className={`flex gap-4  p-5 px-5  overflow-x-scroll sm:order-2 ${className}`}
    >
      <li className="whitespace-nowrap hover:text-amber-400 transition select-none font-semibold">
        <NavLink
          href="/products"
          className="text-amber-400 underline underline-offset-4 sm:border-l-3 sm:pl-1 sm:no-underline  "
        >
          ALL
        </NavLink>
      </li>
      {categories.map((category: string) => (
        <li
          key={category}
          className="whitespace-nowrap hover:text-amber-400 transition select-none font-semibold"
        >
          <NavLink
            className="text-amber-400 underline underline-offset-4 sm:border-l-3 sm:pl-1 sm:no-underline"
            href={`/products/${category}`}
          >
            {category.toUpperCase()}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
