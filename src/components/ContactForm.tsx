import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { Instagram, Facebook, Linkedin, Twitter, Phone, Mail } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully!');
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">We'd love to hear from you!</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-400">
            <Phone className="w-5 h-5" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Mail className="w-5 h-5" />
            <span>contact@example.com</span>
          </div>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="bg-white/5 border-white/10"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/5 border-white/10"
          />
        </div>
        <div>
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[150px] bg-white/5 border-white/10"
          />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90">
          Send Message
        </Button>
      </form>
    </div>
  );
};