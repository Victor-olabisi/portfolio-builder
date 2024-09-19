import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar.jsx";

const Landing = () => {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-6 ">
        <Navbar />
        <Hero />
      </div>
      <div className="py-[3rem] bg-[#F0F0F0] w-[100%]">
        <Footer />
      </div>
    </section>
  );
};
export default Landing;
