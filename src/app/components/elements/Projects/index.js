import { useCallback, useEffect, useState } from "react";
import { PortfolioCard, PortfolioModal, PopUpWrapper } from "../";

function Projects({ projects, type }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [popupData, setPopupData] = useState(null);
  const [open, setOpen] = useState(false);

  const filter = useCallback(() => {
    // Filter projects by type
    if (type === "All") return setFilteredProjects(projects);
    setFilteredProjects(projects.filter((project) => project.type === type));
  }, [projects, type]);

  const closeModal = () => setPopupData(null);

  useEffect(() => filter(), [filter]);

  useEffect(() => {
    // Open modal based on popupData
    if (popupData) setOpen(true);
    else setOpen(false);
  }, [popupData])

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-6 max-w-5xl mx-auto">
        {filteredProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            {...project}
            project={project}
            onClick={() => setPopupData(project)}
          />
        ))}
      </div>
      {/* ==== Project Modal ==== */}
      <PopUpWrapper open={open} nested onClose={closeModal}>
        <PortfolioModal onClose={closeModal} popupData={popupData} />
      </PopUpWrapper>
    </>
  );
}

export default Projects;
