import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="technologies" className="max-h-screen flex items-center py-16">
      {/* <div className="mx-auto px-3 "> */}
      {/* <div className="max-w-7xl p-10 mx-auto  border border-b-olive-600 max-sm:p-1 max-w-sm:py-16 max-w-sm:max-w-full "> */}
      <div className="max-w-6xl mx-auto px-3 max-sm:mt-88">
        <h2 className="text-4xl font-bold mb-8">Technologies</h2>
        <div className="  flex flex-wrap gap-4 p-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-400 px-5 py-3 rounded-lg text-center w-xl dark:bg-gray-800 dark:text-white max-w-32"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-5/6 h-5/6 object-fill "
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
