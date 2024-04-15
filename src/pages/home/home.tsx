import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Header_content from "../../components/header_content/header_content";
import NewProduct from "../../components/newProduct/newProduct";
import ReviewPage from "../../components/review";


function Home() {
  return (
    <>
      <Header />
      <Header_content />
      <NewProduct/>
      <ReviewPage/>
      <Hero />
      <Footer />
    </>
  );
}
export default Home;
