import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#CCD6F6] font-mono">
            About Me
          </h2>

          <motion.div
            className="glass-blue rounded-2xl p-8 md:p-12 relative group hover:shadow-[0_0_40px_rgba(100,255,218,0.15)] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#64FFDA]/5 to-[#00D9FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-[#8892B0] leading-relaxed mb-6">
                Hello! I'm <span className="text-[#64FFDA] font-semibold">Aarya Kulshreshtha</span>, 
                a passionate <span className="text-[#CCD6F6] font-semibold">MCA student</span> specializing 
                in DevOps and Cloud Engineering. I thrive on building scalable, efficient systems and 
                exploring the intersection of cloud technologies and artificial intelligence.
              </p>
              
              <p className="text-lg md:text-xl text-[#8892B0] leading-relaxed">
                With a strong foundation in computer applications and hands-on experience across 
                multiple cloud platforms, I'm dedicated to staying at the forefront of DevOps practices 
                and emerging technologies. When I'm not coding, you'll find me exploring new tools, 
                contributing to open-source projects, or sharing knowledge with the tech community.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#64FFDA] rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#64FFDA] opacity-10 group-hover:opacity-20 transition-opacity" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}