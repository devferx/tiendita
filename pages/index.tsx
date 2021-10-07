import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";

import { Header } from "@containers/home/components/Header";
import { Hero } from "@containers/home/components/Hero";
import { ProductList } from "@containers/home/components/ProductList";
import { IProduct } from "@interfaces/product";

export const getStaticProps: GetStaticProps = async () => {
  const results = await fetch(`${process.env.SERVER}/api/products`);
  const { discounts, popular } = await results.json();

  return { props: { discounts, popular } };
};

interface HomePageProps {
  discounts: IProduct[];
  popular: IProduct[];
}

function HomePage({ discounts, popular }: HomePageProps) {
  return (
    <section>
      <Header />
      <div className="wrapper">
        <Hero />
        <ProductList title="Ofertas" products={discounts} />
        <ProductList
          title="Populares"
          products={popular}
          displayDiscount={false}
        />
      </div>
    </section>
  );
}

export default HomePage;
