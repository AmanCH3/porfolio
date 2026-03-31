const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl border p-4 shadow-md transition hover:shadow-lg">
      <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>

      <p className="mb-2 text-gray-600">{project.description}</p>

      <div className="mb-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="mr-2 rounded bg-gray-200 px-2 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        View Code
      </a>
    </div>
  );
};

export default ProjectCard;