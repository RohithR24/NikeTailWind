import {
  NavBar,
  Hero,
  PopularProducts,
  ProductFeatures,
  Services,
  Offers,
  CustomerReview,
  Subscribe,
  Footer
} from "./components/index";

const App = () => (
  <main className="relative">
    <NavBar />
    <section className="xl:padding-1 xl:pl-12 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <ProductFeatures />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <Offers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
    </section>
  </main>
);

export default App;
