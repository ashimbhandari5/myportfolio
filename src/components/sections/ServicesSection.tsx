export const ServicesSection = () => {
  const services = [
    {
      title: 'Web App Development',
      description: 'Building robust and scalable web applications using modern technologies and best practices.'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with focus on user experience and accessibility.'
    },
    {
      title: 'Website Development',
      description: 'Developing responsive and performant websites that deliver exceptional user experiences.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-6 rounded-2xl bg-white/5 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};