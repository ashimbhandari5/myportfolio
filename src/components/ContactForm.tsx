import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Phone,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, [e.target.name]: e.target.value, email });
    setErrors({ ...errors, email: validateEmail(email) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xnnqyydz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-10">
        <div>
          <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-400">I'd love to hear from you!</p>
        </div>

        <div className="space-y-6">
          <a
            href="https://wa.me/9779861782951"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+9779861782951</span>
          </a>
          <a
            href="mailto:ashimbhandari700@gmail.com"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>ashimbhandari700@gmail.com</span>
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/ashim_bhandari_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/ashim.bhandari.750"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashim-bhandari-01071b307/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/ashimbhandari5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <div>
          <Input
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="bg-white/5 border-white/20 w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleEmailChange}
            className={cn(
              "bg-white/5 border-white/20 w-full",
              errors.email && "border-red-500"
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="min-h-[150px] bg-white/5 border-white/20 w-full"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};
