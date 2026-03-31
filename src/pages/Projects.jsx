import ProjectCard from "../components/common/ProjectCard";
import { projects } from "../data/project";

const Projects = () => {
  return (
    <section>
      <h1 className="mb-6 text-2xl font-bold">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;