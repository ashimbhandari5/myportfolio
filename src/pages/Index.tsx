import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="section pt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">John Doe</span>
            </h1>
            <p className="text-xl text-gray-400">
              A passionate full-stack developer creating beautiful and functional web experiences
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90">
              Get in Touch
            </Button>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-3xl absolute -z-10" />
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-gray-400">
              I'm a passionate developer with over 5 years of experience in creating beautiful and functional web applications. I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
            </p>
          </div>
          <div className="relative">
            <div className="w-full aspect-square rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl absolute -z-10" />
            <img
              src="/placeholder.svg"
              alt="About Me"
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Web Development', 'UI/UX Design', 'Mobile Development'].map((service) => (
              <div key={service} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              'React', 'Node.js', 'TypeScript', 'Python',
              'Docker', 'AWS', 'MongoDB', 'GraphQL'
            ].map((skill) => (
              <div
                key={skill}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;