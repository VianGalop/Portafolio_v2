import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-3 max-sm:mt-88">
        <h2 className="text-4xl font-bold mb-12 max-sm:px-10">Proyects</h2>
        <div className="grid md:grid-cols-2 gap-8 px-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="flex justify-between p-6">
                <div className="w-64">
                  <h3 className="text-white text-2xl font-bold mb-3 ">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="flex px-1 text-sm text-gray-300 border border-gray-300 rounded-full">
                  <a className="content-center" href={project.link}>
                    See Page
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
