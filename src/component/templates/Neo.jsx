import neoAbout from "../../assets/neoAbout.png";
import neo1 from "../../assets/neo1.png";
import neo2 from "../../assets/neo2.png";
import neo3 from "../../assets/neo3.png";

const Neo = () => {
  const services = [
    {
      title: "Photgraphy",
      image: neo1,
    },
    {
      title: "Graphic Design",
      image: neo2,
    },
    {
      title: "UX research",
      image: neo3,
    },
  ];

  const projects = [
    {
      title: "Photoshoot",
      image: neo1,
    },
    {
      title: "Color Wave",
      image: neo2,
    },
    {
      title: "Swift Logistics",
      image: neo3,
    },
  ];
  return (
    <section className="bg-white px-[2rem] md:px-[4rem] lg:md-[7rem] py-[2rem] ">
      <div className="grid lg:grid-cols-2 gap-8 items-center text-[#0E0D0D] ">
        <img src={neoAbout} alt="" />
        <div>
          <h2 className="text-[2.25rem] font-bold">Hey, Im Sarah Lee</h2>
          <p>
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Dorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis. Dorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc vulputate libero et
            velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className="pt-[5rem]">
        <h3 className="text-center text-[#0E0D0D] mb-7 font-bold text-[1.5rem]">
          My Services{" "}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            return (
              <article key={service.title} className="relative">
                <img src={service.image} alt="service image" />
                <div className="text-white absolute bottom-[1rem] left-[1rem]">
                  <h3 className="text-[1.5rem] font-bold">{service.title}</h3>
                  <p className="text-[1rem]">little description</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="pt-[5rem]">
        <h3 className="text-center text-[#0E0D0D] mb-7 font-bold text-[1.5rem]">
          My Projects{" "}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            return (
              <article key={project.title} className="relative">
                <img src={project.image} alt="service image" />
                <div className="text-white absolute bottom-[1rem] left-[1rem]">
                  <h3 className="text-[1.5rem] font-bold">{project.title}</h3>
                  <p className="text-[1rem]">little description</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Neo;
