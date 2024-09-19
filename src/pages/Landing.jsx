import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Nav_bar from "../component/Nav_bar.jsx";

const Landing = () => {
  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-6 ">
        <Nav_bar />
        <Hero />
      </div>
      <div className="py-[3rem] bg-[#F0F0F0] w-[100%]">
        <Footer />
      </div>
    </section>
  );
};
export default Landing;
