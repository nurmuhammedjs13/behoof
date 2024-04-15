import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Header_content from "../../components/header_content/header_content";
import InfoProduct from "../infoProduct/infoProduct";

function Home() {
  return (
    <>
      <Header />
      <InfoProduct />
      <Header_content />
      <Hero />
      <Footer />
    </>
  );
}
export default Home;
