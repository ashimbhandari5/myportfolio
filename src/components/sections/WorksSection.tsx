export const WorksSection = () => {
  const works = [
    {
      title: "Futsal Booking WebApp",
      description:
        "A comprehensive booking system for futsal courts with real-time availability and payment integration.",
      image: "/public/futsal.png",
    },
    {
      title: "Inventory Management System",
      description:
        "A complete solution for managing inventory with tracking, reporting, and analytics features.",
      image: "/public/ivm.jpg",
    },
  ];

  return (
    <section id="works" className="section px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Works
        </h2>

        {/* Photo Gallery */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {works.map((work) => (
            <div
              key={work.title}
              className="relative h-48 sm:h-64 overflow-hidden rounded-2xl group"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-xl font-bold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Works List */}
        <div className="grid sm:grid-cols-2 gap-8">
          {works.map((work) => (
            <div
              key={work.title}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl cursor-pointer group"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                {work.title}
              </h3>
              <p className="text-gray-400">{work.description}</p>
              <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
