import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Header_content from "../../components/header_content/header_content";
import ReviewPage from "../../components/review";


function Home() {
  return (
    <>
      <Header />
      <Header_content />
      <Hero /> 
      <ReviewPage/>
     <Footer />
    </>
  );
}
export default Home;
