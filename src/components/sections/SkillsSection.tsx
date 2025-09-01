export const SkillsSection = () => {
  const frontendSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Nest.js",
    "REST APIs",
    "GraphQL",
    "SQL",
    "PostgreSQL",
    "MongoDB",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Insonmia",
    "Postman",
    "Docker",
    "AWS",
  ];

  const renderSkill = (skill: string) => (
    <span
      key={skill}
      className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2 border border-gray-700"
    >
      {skill}
    </span>
  );

  return (
    <section id="skills" className="section px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 text-white">
          Technologies & Tools
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are the technologies, frameworks, and tools I work with on a
          regular basis. I'm always learning and expanding my skillset to stay
          up-to-date with the latest trends.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8">
        {/* Frontend */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center">
            {frontendSkills.map(renderSkill)}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center">
            {backendSkills.map(renderSkill)}
          </div>
        </div>

        {/* Tools & Others */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">
            Tools & Others
          </h3>
          <div className="flex flex-wrap justify-center">
            {toolsSkills.map(renderSkill)}
          </div>
        </div>
      </div>
    </section>
  );
};
