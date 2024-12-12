export const WorksSection = () => {
  const works = [
    {
      title: 'Futsal Booking WebApp',
      description: 'A comprehensive booking system for futsal courts with real-time availability and payment integration.',
      image: '/photo-1488590528505-98d2b5aba04b.jpg'
    },
    {
      title: 'Inventory Management System',
      description: 'A complete solution for managing inventory with tracking, reporting, and analytics features.',
      image: '/photo-1486312338219-ce68d2c6f44d.jpg'
    }
  ];

  return (
    <section id="works" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Works</h2>
        
        {/* Photo Gallery */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {works.map((work) => (
            <div key={work.title} className="relative h-64 overflow-hidden rounded-2xl">
              <img 
                src={work.image} 
                alt={work.title}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Works List */}
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work) => (
            <div
              key={work.title}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">{work.title}</h3>
              <p className="text-gray-400">{work.description}</p>
              <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};