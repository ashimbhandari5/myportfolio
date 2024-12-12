import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section min-h-screen pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">John Doe</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
            A passionate full-stack developer creating beautiful and functional web experiences
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 px-8 py-6 text-lg"
          >
            Get in Touch
          </Button>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="w-full aspect-square rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-3xl absolute -z-10" />
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full max-w-md mx-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};