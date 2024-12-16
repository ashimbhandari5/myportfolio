export const WorksSection = () => {
  const works = [
    {
      title: "Futsal Booking WebApp",
      description:
        "A comprehensive booking system for futsal courts with real-time availability and payment integration.",
      image: "/futsal.png",
    },
    {
      title: "Inventory Management System",
      description:
        "A complete solution for managing inventory with tracking, reporting, and analytics features.",
      image: "/ivm.jpg",
    },
  ];

  return (
    <section id="works" className="section px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl  font-bold text-center mb-12">My Works</h2>

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
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
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
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 transform transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 ">
                {work.title}
              </h3>
              <p className="text-gray-400">{work.description}</p>
              <div className="w-full h-1 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
