export const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-400">
            I'm a passionate developer with over 5 years of experience in
            creating beautiful and functional web applications. I specialize in
            React, Node.js, and modern web technologies.
          </p>
          <p className="text-gray-400">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing my knowledge
            through blog posts and tutorials.
          </p>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl absolute -z-10" />
          <img
            src="src\pictures\243014809_3046318972352917_307000034270486270_n.jpg"
            alt="About Me"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};
