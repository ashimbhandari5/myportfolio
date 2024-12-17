import { ContactForm } from "@/components/ContactForm";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="section relative px-4 sm:px-6"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ContactForm />
      </div>
    </section>
  );
};
