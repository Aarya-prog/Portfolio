import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Attendify",
      description: "A face recognition-based attendance system using Python and OpenCV for automated attendance management.",
      tags: ["Python", "OpenCV", "Face Recognition", "Automation"],
      github: "https://github.com/Aarya-prog/Attendify",
    },
    {
      title: "Zyra",
      description: "An AI-powered chatbot built with React efficient real-time responses.",
      tags: ["Python", "NLP", "AI", "Chatbot"],
      github: "https://github.com/Aarya-prog/ZYRA",
    },
    {
      title: "Python Basic Projects",
      description: "A collection of Python-based beginner projects, including an ATM simulation and logic-based applications.",
      tags: ["Python", "ATM Simulation", "Logic Projects"],
      github: "https://github.com/Aarya-prog/CBTCIP",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#CCD6F6] font-mono">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-blue rounded-xl overflow-hidden group hover:shadow-[0_0_40px_rgba(100,255,218,0.2)] transition-all duration-300"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Project Content */}
                <div className="p-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#64FFDA] to-[#00D9FF] flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.6)] transition-all">
                    <Github className="w-8 h-8 text-[#0A192F]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors font-mono">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#8892B0] mb-4 leading-relaxed min-h-[80px]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#112240] rounded-lg text-xs text-[#8892B0] border border-[#64FFDA]/20 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => window.open(project.github, "_blank")}
                      size="sm"
                      className="bg-transparent border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 font-mono w-full"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}