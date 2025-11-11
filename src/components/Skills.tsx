import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Cloud, Brain, Users, Github, Code, Database, Server } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "PHP", "Java", "SQL"],
      color: "from-[#64FFDA] to-[#00D9FF]",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["React", "Node.js", "Express", "HTML/CSS"],
      color: "from-[#00D9FF] to-[#64FFDA]",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["AWS", "Azure", "Docker(Learning)"],
      color: "from-[#64FFDA] to-[#00D9FF]",
    },
    {
      title: "AI & Data",
      icon: Brain,
      skills: ["PowerBI", "TensorFlow", "Tableau", "Pandas", "NumPy"],
      color: "from-[#00D9FF] to-[#64FFDA]",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
      color: "from-[#64FFDA] to-[#00D9FF]",
    },
  ];

  const tools = [
    { name: "GitHub", icon: Github },
    { name: "VS Code", icon: Code },
    { name: "Azure", icon: Cloud },
    { name: "Docker", icon: Server },
    { name: "MongoDB", icon: Database },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#CCD6F6] font-mono">
            Skills & Expertise
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-blue rounded-xl p-6 group hover:shadow-[0_0_30px_rgba(100,255,218,0.2)] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all`}>
                  <category.icon className="w-6 h-6 text-[#0A192F]" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-[#CCD6F6] font-mono">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#112240] rounded-lg text-sm text-[#8892B0] border border-[#64FFDA]/20 hover:border-[#64FFDA] hover:bg-[#64FFDA]/10 hover:text-[#64FFDA] transition-all font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-blue rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-[#CCD6F6] font-mono">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#64FFDA] to-[#00D9FF] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(100,255,218,0.6)] transition-all">
                    <tool.icon className="w-8 h-8 text-[#0A192F]" />
                  </div>
                  <span className="text-sm text-[#8892B0] group-hover:text-[#64FFDA] transition-colors font-mono">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}