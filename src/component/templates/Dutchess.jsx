import { FaLinkedin } from "react-icons/fa6";
import lara from "../../assets/lara.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { FaTwitter } from "react-icons/fa";

const Dutchess = () => {
  const projects = [
    {
      title: "Tasty Buds",
      description:
        "Discover a delectable array of recipes, restaurants and foodie experiences right at your fingertips.",
      image: project1,
    },
    {
      title: "Black dont Crack",
      description:
        "This project invites you to witness the world’s transformation and continuity.",
      image: project2,
    },
    {
      title: "Vivid Homes",
      description:
        "This project invites you to witness the world’s transformation and continuity.",
      image: project3,
    },
  ];
  return (
    <section className="bg-white min-h-[100vh] pb-8  ">
      <div className="h-[12rem] bg-[#FFD79B] relative px-[2rem] md:px-[5rem] pt-12">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <FaLinkedin />
            <FaTwitter />
          </div>
          <button className="btn bg-[#E7332B] text-white border-none">
            Contact Us
          </button>
        </div>
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%]">
          <img src={lara} alt="" />
          <p className="text-center text-[1.5rem] font-semibold text-[#0E0D0D]">
            Olu John
          </p>
        </div>
      </div>

      <div className="pt-[11rem] text-[#0E0D0D] px-[2rem] md:px-[5rem]">
        <div className="border-b-[1px] border-[#0000004D] pb-8 mb-8">
          <h2 className="font-bold ">About Me</h2>
          <p>
            Welcome to my UX Designer portfolio, where innovation meets
            user-centric design. With a passion for creating seamless, engaging
            digital experiences, I invite you to explore my work.
          </p>
        </div>
        <div className="border-b-[1px] border-[#0000004D] pb-8 mb-8">
          <h2 className="font-bold ">Skill</h2>
          <ul className=" md:flex gap-[5rem] ">
            <li className="list-disc list-inside">Software Engineer</li>
            <li className=" list-disc list-inside ">UX Research</li>
            <li className=" list-disc list-inside">Graphic design</li>
          </ul>
        </div>
        <div className="border-b-[1px] border-[#0000004D] pb-8 mb-8">
          <h2 className="font-bold ">projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => {
              const { title, description, image } = project;
              return (
                <article key={title}>
                  <img src={image} alt="project image" />
                  <h2 className="text-[1.2rem] font-semibold pt-[.5rem]">
                    {title}
                  </h2>
                  <p className="text-">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold ">Social Media</h2>
          <ul className="flex gap-[4rem] mt-4">
            <li className="list-disc list-inside">linkedIn</li>
            <li className="list-disc">Twitter</li>
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Dutchess;
