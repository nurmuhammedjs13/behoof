import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Header_content from "../../components/header_content/header_content";
import NewProduct from "../../components/newProduct/newProduct";

function Home() {
  return (
    <>
      <Header />
      <Header_content />
      <Hero />
      <NewProduct />
      <Footer />
    </>
  );
}
export default Home;
