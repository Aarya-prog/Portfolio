import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, FileCode, Server } from "lucide-react";

export default function TechnicalSummary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Python", icon: Code2, color: "from-[#3776AB] to-[#FFD43B]" },
    { name: "SQL", icon: Database, color: "from-[#00758F] to-[#F29111]" },
    { name: "HTML", icon: Globe, color: "from-[#E34F26] to-[#F06529]" },
    { name: "CSS", icon: FileCode, color: "from-[#1572B6] to-[#33A9DC]" },
    { name: "PHP", icon: Server, color: "from-[#777BB4] to-[#8892BF]" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#CCD6F6] font-mono">
            🧩 Skilled In
          </h2>

          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
                whileHover={{ scale: 1.2 }}
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(100,255,218,0.6)] transition-all`}>
                  <skill.icon className="w-10 h-10 text-white" />
                </div>
                <span className="text-sm text-[#8892B0] group-hover:text-[#64FFDA] transition-colors font-mono font-semibold">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-blue rounded-xl p-8 text-center"
          >
            <p className="text-lg md:text-xl text-[#8892B0] leading-relaxed">
              With hands-on experience across multiple technologies, I specialize in building efficient, scalable, and visually engaging systems.
              
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}