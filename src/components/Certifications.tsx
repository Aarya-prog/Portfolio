import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Hackathon Participation Certificate",
      issuer: "Hacknode India LPU 2025",
      image: "/images/hackathon.jpeg",
    },
    {
      title: "Specialization Certificate on Artificial Intelligence & Machine Learning",
      issuer: "Batch 2022–25, Cumulative Grade: A",
      image: "/images/Specialization.png",
    },
    {
      title: "Data Science (AI & ML) Student Development Program",
      issuer: "E & ICT Academy, IIT Kanpur (20-03-2023 to 24-03-2023)",
      image: "/images/CourseCertificate - IFACET IITK (4).pdf",
    },
    {
      title: "Cyber Security (Web Hacking) Student Development Program",
      issuer: "E & ICT Academy, IIT Kanpur (05-06-2023 to 09-06-2023)",
      image: "/images/CourseCertificate - IFACET IITK (3).pdf",
    },
    {
      title: "Full Stack Web Developer Winter Training Program",
      issuer: "E & ICT Academy, IIT Kanpur (09-12-2024 to 23-12-2024)",
      image: "/images/CourseCertificate - IFACET IITK WTP.pdf",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera (in collaboration with IBM)",
      image: "/images/Coursera YPBY973RDJZ7.pdf",
    },
    {
      title: "Python Project for Data Science",
      issuer: "Coursera (in collaboration with IBM)",
      image: "/images/CourseCertificate - IFACET IITK WTP.pdf",
    },
    
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#CCD6F6] font-mono">
            Certifications & Achievements
          </h2>

          <p className="text-center text-[#8892B0] text-lg mb-16 max-w-2xl mx-auto">
            Each certificate reflects a milestone in my learning journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-blue rounded-xl overflow-hidden relative group hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Certificate Preview (Image or PDF) */}
                <div className="relative overflow-hidden border-2 border-[#64FFDA]/20 rounded-t-xl bg-white">
                  {cert.image.endsWith(".pdf") ? (
                    <iframe
                      src={cert.image}
                      className="w-full h-72 object-contain"
                      title={cert.title}
                    />
                  ) : (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors line-clamp-2 font-mono">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#8892B0] font-mono">{cert.issuer}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#64FFDA] opacity-10 group-hover:opacity-30 transition-opacity rounded-tr-xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
