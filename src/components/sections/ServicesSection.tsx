import { Code2, Palette, Globe } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web App Development',
      description: 'Building robust and scalable web applications using modern technologies and best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with focus on user experience and accessibility.'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Developing responsive and performant websites that deliver exceptional user experiences.'
    }
  ];

  return (
    <section id="services" className="section px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title} 
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-12 h-12 mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-400 relative z-10">{service.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};