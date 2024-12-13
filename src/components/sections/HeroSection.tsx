import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="section min-h-screen pt-32 px-4 sm:px-6 relative overflow-hidden bg-[#0A0F2C]"
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Floating circles */}
      <div className="floating-circle w-64 h-64 -top-20 -right-20 opacity-90" />
      <div className="floating-circle w-32 h-32 top-1/2 right-20 opacity-70" />
      <div className="floating-circle w-96 h-96 -bottom-48 -left-48 opacity-80" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl text-gray-300">Hello, I am</h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Ashim
              <br />
              Bhandari
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              A passionate{" "}
              <span className="text-red-500">full-stack developer</span>{" "}
              creating beautiful and functional web experiences.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 justify-center lg:justify-start"></div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full aspect-square rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 blur-3xl absolute -z-10" />
          <img
            src="/5.png"
            alt="Profile"
            className=" pt-10 w-half max-w-full mx-full object-contain h-[600px]"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
