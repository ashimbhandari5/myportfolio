export const WorksSection = () => {
  const works = [
    {
      image: "/futsal.png",
      title: "Futsal Booking System",
      link: "https://github.com/yourusername/futsal-booking", // replace with your repo/url
    },
    {
      image: "/ivm.jpg",
      title: "Inventory Management System",
      link: "https://github.com/yourusername/inventory-system", // replace with your repo/url
    },
  ];

  return (
    <section id="works" className="section px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-12">My Works</h2>

        {/* Photo Gallery */}
        <div className="grid sm:grid-cols-2 gap-12 mb-12">
          {works.map((work, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-8">{work.title}</h3>

              {/* Clickable Image */}
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full overflow-hidden rounded-2xl group"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
