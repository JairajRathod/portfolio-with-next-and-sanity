import { useState } from "react";
import SectionHeading from "../SectionHeading";
import SectionLabel from "../SectionLabel";
import { PROJECTS } from "@/sampleData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../modals/ProjectModel";
import { T } from "@/constant";
import { ProjectDataInterface } from "@/types/projectData";

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", borderBottom: `1px solid ${T.border}` }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <SectionLabel>Selected Work</SectionLabel>
          <SectionHeading>Projects</SectionHeading>
          <p
            style={{
              margin: "12px 0 0",
              color: T.textDim,
              fontFamily: T.body,
              fontSize: "14px",
            }}
          >
            Click any project to explore screenshots and full details.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {PROJECTS.map((project: ProjectDataInterface) => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </div>
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
