import { Button } from "../ui/button";

export const AboutSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/cv.pdf"; // Path to your CV in the `public` folder
    link.download = "cv.pdf"; // Suggested file name
    link.click();
  };

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className=" text-6xl  font-bold text-center mb-12">About Me</h2>
          <p className="text-gray-400 text-xl">
            I'm a passionate developer focused on creating beautiful and
            functional web applications.
          </p>
          <p className="text-gray-400 text-xl">
            When I'm not coding, you can find me exploring new technologies and
            focusing on myself to be the best.
          </p>
        </div>
        <div className="relative">
          <div className="w-full aspect-square rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-3xl absolute -z-10" />
          <img
            src="/about.jpg"
            alt="About Me"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </div>

        <div className="space-y-0">
          <div className="flex items-center gap-6 justify-center lg:justify-start"></div>

          <div className="flex flex-col sm:flex-row gap- justify-center lg:justify-start">
            <button
              onClick={handleDownload}
              className="bg-red-600 hover:bg-red-700 text-white px-9 py-3 text-lg rounded-full"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
