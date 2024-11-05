import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Conponents/Navbar/Navbar";
import Footer from "./Conponents/Footer/Footer";
import Hero from "./Conponents/HeroSection/Hero";
import Service from "./Conponents/Service/Service";
import BigNFTSlider from "./Conponents/BigNFTSlider/BigNFTSlider";
import Subscribe from "./Conponents/Subscribe/Subscribe";
import Title from "./Conponents/Title/Title";
import Category from "./Conponents/Category/Category";
import Filter from "./Conponents/Filter/Filter";

function App() {
  return (
    <div className="container-fluid app">
      <Navbar />
      <Hero />
      <Service />
      <BigNFTSlider />
      <Subscribe />
      <Title
        heading="Feature NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories"
      />

      <Category />

      <Footer />
    </div>
  );
}

export default App;
