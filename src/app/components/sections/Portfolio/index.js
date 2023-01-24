import { Button, Projects, ProjectTypes, SectionTitle } from "../../elements";
import { PORTFOLIO } from "../../../data";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";

function Portfolio() {
  const [selectedType, setSelectedType] = useState("All");
  const { title, subtitle, typeWriter, types, projects, github } = PORTFOLIO;

  return (
    <section name="Portfolio" className="element">
      <div className="container">
        {/* ==== Section Title ==== */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        {/* ==== Project Types ==== */}
        <ProjectTypes
          types={types}
          onChange={setSelectedType}
          selected={selectedType}
        />
        {/* ==== Projects ==== */}
        <Projects projects={projects} type={selectedType} />
        {/* ==== Github ==== */}
        <Button
          href={github}
          className="block w-fit mx-auto mt-5"
          target="_blank"
        >
          Visit my GitHub
          <AiFillGithub className="ml-1 text-lg" />
        </Button>
      </div>
    </section>
  );
}

export default Portfolio;
