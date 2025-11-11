import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:aarya.kulshreshtha@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aarya-kulshreshtha-prog" },
    { icon: Github, label: "GitHub", href: "https://github.com/Aarya-prog" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/soy_aarya" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#CCD6F6] font-mono">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-blue rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#CCD6F6] font-mono">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#8892B0] mb-2 font-mono">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#112240] border-[#64FFDA]/30 text-[#CCD6F6] placeholder:text-[#8892B0] focus:border-[#64FFDA] focus:ring-[#64FFDA] font-mono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8892B0] mb-2 font-mono">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-[#112240] border-[#64FFDA]/30 text-[#CCD6F6] placeholder:text-[#8892B0] focus:border-[#64FFDA] focus:ring-[#64FFDA] font-mono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#8892B0] mb-2 font-mono">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="bg-[#112240] border-[#64FFDA]/30 text-[#CCD6F6] placeholder:text-[#8892B0] focus:border-[#64FFDA] focus:ring-[#64FFDA] resize-none font-mono"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 py-6 text-lg font-mono font-semibold shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-8 text-[#CCD6F6] font-mono">Connect With Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="glass-blue rounded-xl p-6 flex items-center gap-4 group hover:shadow-[0_0_30px_rgba(100,255,218,0.2)] transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#64FFDA] to-[#00D9FF] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all">
                      <social.icon className="w-6 h-6 text-[#0A192F]" />
                    </div>
                    <div>
                      <p className="text-[#CCD6F6] font-semibold group-hover:text-[#64FFDA] transition-colors font-mono">
                        {social.label}
                      </p>
                      <p className="text-sm text-[#8892B0] font-mono">Connect on {social.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 glass-blue rounded-xl p-6"
              >
                <p className="text-[#8892B0] leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                  Feel free to reach out through any of the channels above!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}