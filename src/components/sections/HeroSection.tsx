import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
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
  );
};