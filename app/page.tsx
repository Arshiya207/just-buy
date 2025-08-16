import Image from "next/image";
import homeImage from "@/public/homePageImg.png"
export default function HomePage() {
  return (
    <main className="flex flex-col h-9/10 items-center sm:flex-row">
      <div className="flex flex-col gap-2 items-start  p-8   flex-1/4  sm:p-16 ">
        <h1 className="font-extrabold text-4xl leading-12  sm:text-5xl ">
          DISCOVER YOUR DESIRED PRODUCT/S
        </h1>
        <p className="text-xl text-stone-500 sm:mt-8">
          Join our community of creators and explore a vast library of
          user-submitted products.
        </p>
        <button className="p-2 border-2 cursor-pointer font-medium hover:bg-amber-400 hover:text-white transition hover:border-white mt-12">BROWSE PRODUCTS</button>
      </div>
      <div className="flex justify-center  flex-2/4 ">
        <Image  src={homeImage} height={400} width={402} alt="home image" className="max-h-full max-w-full "/>
      </div>
    </main>
  );
}
