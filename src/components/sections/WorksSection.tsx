export const WorksSection = () => {
  const works = [
    {
      title: 'Futsal Booking WebApp',
      description: 'A comprehensive booking system for futsal courts with real-time availability and payment integration.'
    },
    {
      title: 'Inventory Management System',
      description: 'A complete solution for managing inventory with tracking, reporting, and analytics features.'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work) => (
            <div
              key={work.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
              <p className="text-gray-400">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};