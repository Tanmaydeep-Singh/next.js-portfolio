import { LazyMotion, domAnimation } from "framer-motion";
import { HeadingDivider, Project } from "components";
import { PROJECTS } from "../../../constants";

export function ProjectSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section">
        <HeadingDivider title="Projects" />
		<div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                image={project.image}
                link={project.link}
                description={project.description}
              />
            ))}
          </div>
      </section>
    </LazyMotion>
  );
}
