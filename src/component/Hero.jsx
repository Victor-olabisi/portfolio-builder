import { FaArrowRight } from "react-icons/fa";
import union from "/Union.png";
import union2 from "/union2.png";
import Footer from "./Footer";

const Hero = () => {
  return (
    <section className="pt-[5rem] lg:pt-[10rem]">
      <div className="max-w-[1000px] mx-auto text-center text-[#262626]">
        <h1 className=" text-[2.5rem] lg:text-[5rem] leading-normal  lg:leading-[6rem] font-semibold">
          The Professional For
          <span className="text-[#0000FE]"> Software Engineers</span>
        </h1>
        <p className="max-w-[40rem] mx-auto pt-6">
          Workfolio empowers Software Engineers to create a personal brand and
          earn proper recognition for their work
        </p>

        <div className="join pt-9">
          <input
            type="text"
            className="join-item input bg-white focus:outline-none focus:border-none rounded-full"
            placeholder="workflow.com/username"
          />

          <button className="btn join-item rounded-full bg-[#0000FE] text-white ">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className=" pt-[10rem] lg:pt-[20rem] pb-[8rem] flex gap-x-[9.4rem] text-center">
        <img src={union} alt="" />
        <img src={union2} alt="" className="hidden lg:block" />
      </div>
    </section>
  );
};
export default Hero;
