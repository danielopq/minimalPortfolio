import Home from "./components/home/Home";
import Navbar from "./components/shared/navBar/NavBar";
import Footer from "./components/shared/footer/Footer";

const PortFolioApp: React.FC = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>

    )
}
export default PortFolioApp