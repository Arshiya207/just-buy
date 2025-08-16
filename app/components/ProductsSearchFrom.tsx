import Form from "next/form";

export default function ProductsSearchFrom({className=""}:{className?:string}) {
  return (
    <div className={`p-4 flex justify-center items-center sm:col-span-full ${className}`}>
      <Form action="" >
        <input
          className="p-2 px-4  outline-none border-2 rounded-lg border-stone-400 text-stone-600 focus:border-stone-700 focus:text-stone-700 transition"
          type="text"
          name="search"
          autoComplete="false"
          placeholder="search the products"
        />
      </Form>
    </div>
  );
}
