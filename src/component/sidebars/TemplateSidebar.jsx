const TemplateSidebar = ({
  templates,
  setSelectedTemplate,
  selectedTemplate,
}) => {
  return (
    <aside className="px-[2rem] py-[2.5rem]">
      <h2 className="text-[#2B2B2B] font-bold text-lg">Choose your Template</h2>
      <div className="grid gap-4 pt-[2rem]">
        {templates.map((template) => {
          const { name, image } = template;
          const isSelected = selectedTemplate.name === name;
          return (
            <article
              key={name}
              className={`bg-[#FAFAFA] rounded-lg cursor-pointer ${
                isSelected ? "border-[4px] border-[#0000FE]" : ""
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="px-[2rem]">
                <img src={image} alt="template image" className="w-[14rem]" />
              </div>
              <div className="bg-[#DCE9FC] text-[#0E0D0D] py-[.5rem] grid place-items-center text-[1rem] rounded-b-lg">
                {name}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default TemplateSidebar;
