export const WorksSection = () => {
  const works = [
    {
      image: "/futsal.png",
    },
    {
      image: "/ivm.jpg",
    },
  ];

  return (
    <section id="works" className="section px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl  font-bold text-center mb-12">My Works</h2>

        {/* Photo Gallery */}
        <div className="grid sm:grid-cols-2 gap-12 mb-12">
          {works.map((work) => (
            <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl group">
              <img
                src={work.image}
                className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
