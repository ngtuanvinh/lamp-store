import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import { getProducts } from "@/utils/fetchStripeProducts";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <Hero />
      <Features />
      <Parallax />
      <>
        {products.map((product) => (
          <Products {...product} key={product.id} />
        ))}
      </>
      <FAQ />
      <Contact />
    </div>
  );
}
