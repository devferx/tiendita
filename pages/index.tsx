import { Header } from "../containers/home/components/Header";
import { Hero } from "../containers/home/components/Hero";

function HomePage() {
  return (
    <section>
      <Header />
      <div className="wrapper">
        <Hero />
      </div>
    </section>
  );
}

export default HomePage;
