import { useState } from "react";
import TemplateSidebar from "../component/sidebars/TemplateSidebar";
import ColorSidebar from "../component/sidebars/ColorSidebar";
import PrivacySidebar from "../component/sidebars/PrivacySidebar";
import TypographySidebar from "../component/sidebars/TypographySidebar";
import Template from "../component/Template";
import theme1 from "../assets/theme1.png";
import theme2 from "../assets/theme2.png";
import workFolio from '/WorkFolio.svg';
import { Link } from "react-router-dom";

const DashboardLayout = () => {
  const templates = [
    {
      name: "dutchess",
      image: theme1,
    },
    {
      name: "neo",
      image: theme2,
    },
  ];
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
    console.log(selectedTemplate);
    
  const sidebarDetails = ["template", "color", "typography", "privacy"];
  const [selectedDetails, setSelectedDetails] = useState("template");

  return (
    <section className="mx-auto">
      <nav className="bg-white py-6 px-8 border-b-[2px] border-[#FCFCFC] ">
        <div>
          <Link to={"/"}>
            <img src={workFolio} alt="" />
          </Link>
        </div>
      </nav>
      <div className="grid grid-cols-6">
        <div className="col-span-1 bg-white min-h-[100vh] pt-6 hidden md:block">
          <ul className="flex gap-4 overflow-scroll ml-8">
            {sidebarDetails.map((item, index) => {
              return (
                <li
                  key={index}
                  className={` cursor-pointer capitalize pb-[0.5rem] ${
                    selectedDetails === item
                      ? "text-[#0E0D0D] border-b-[1px] border-[#0000FE]"
                      : "text-[#AAA]"
                  }`}
                  onClick={() => setSelectedDetails(item)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <div>
            {selectedDetails === "template" ? (
              <TemplateSidebar
                templates={templates}
                setSelectedTemplate={setSelectedTemplate}
                selectedTemplate={selectedTemplate}
              />
            ) : selectedDetails === "color" ? (
              <ColorSidebar />
            ) : selectedDetails === "typography" ? (
              <TypographySidebar />
            ) : selectedDetails === "privacy" ? (
              <PrivacySidebar />
            ) : null}
          </div>
        </div>
        <main className="col-span-6 md:col-span-5 bg-[#FCFCFC] md:px-[3rem] py-[3rem] mb-[4rem]">
          <div>
            <div></div>
            <div className="flex gap-4 pb-12 justify-end">
              <button className="btn bg-[#0000FE] rounded-full text-white">Share</button>
              <button className="btn bg-[#E5E5E5] rounded-full">Preview</button>
            </div>
          </div>
          <Template selectedTemplate={selectedTemplate} />
        </main>
      </div>
    </section>
  );
};
export default DashboardLayout;
