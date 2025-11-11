import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Proffesional University",
      location: "Phagwara, Punjab",
      period: "2025 - 2027",
      description: "Focus on distributed systems and modern application architecture.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Institute of Management Studies",
      location: "Ghaziabad, Uttar Pradesh",
      period: "2022 - 2025",
      description: "Comprehensive foundation in computer science, programming, and software development. Graduated with distinction. Secured 81.2%",
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "St. Mary's Sr. Secondary School",
      location: "Mainpuri, Uttar Pradesh",
      period: "2021 - 2022",
      description: "Humanities stream with an aggregate of 92.2%",
    },
    {
      degree: "Secondary School (X)",
      institution: "St. Mary's Sr. Secondary School",
      location: "Mainpuri, Uttar Pradesh",
      period: "2019 - 2020",
      description: "Strong foundation in core subjects with special interest in technology and innovation.",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#CCD6F6] font-mono">
            Education Journey
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64FFDA] via-[#00D9FF] to-transparent" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "md:right-0" : "md:left-0"
                  } left-8 md:left-auto md:right-auto md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#64FFDA] to-[#00D9FF] shadow-[0_0_20px_rgba(100,255,218,0.6)] z-10`}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64FFDA] to-[#00D9FF] animate-ping opacity-75" />
                </motion.div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 glass-blue rounded-xl p-6 group hover:shadow-[0_0_30px_rgba(100,255,218,0.2)] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/5 to-[#00D9FF]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex w-12 h-12 rounded-lg bg-gradient-to-r from-[#64FFDA] to-[#00D9FF] items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all">
                      <GraduationCap className="w-6 h-6 text-[#0A192F]" />
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold mb-2 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors font-mono">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-[#8892B0] font-semibold mb-2 font-mono">{edu.institution}</p>

                    {/* Location & Period */}
                    <div className="flex flex-col gap-2 mb-3 text-sm text-[#8892B0]">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{edu.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#8892B0] leading-relaxed">{edu.description}</p>
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