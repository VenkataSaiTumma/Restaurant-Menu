import Header from "./components/Header/Header";
import About from "./components/Homepage/About";
import WhyUs from "./components/Homepage/WhyUs";
import Homepage from "./components/Homepage/Homepage";
import MainMenu from "./components/Menu/MainMenu";
import Gallery from "./components/Gallery/Gallery";
// import CustomerReview from "./components/CustomerReview/CustomerReview";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import Footer from "./components/Footer/Footer";
import OurChefs from "./components/OurChefs/OurChefs";

const Main = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <About />
      <WhyUs />
      <MainMenu />
      <Gallery />
      <OurChefs />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Main;
