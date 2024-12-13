import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section min-h-screen pt-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 animate-gradient-xy" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">John Doe</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
            A passionate full-stack developer creating beautiful and functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 px-8 py-6 text-lg"
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline"
              className="border-white/10 hover:bg-white/5 px-8 py-6 text-lg"
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full aspect-square rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-3xl absolute -z-10" />
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};