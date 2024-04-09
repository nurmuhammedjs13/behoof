import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Favorites() {
    return (
        <>
            <Header />
            <section className="favorites">
                <div className="container">
                    <div className="favorites_content"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Favorites;
