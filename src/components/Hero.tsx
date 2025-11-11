import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [displayedRole, setDisplayedRole] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Aarya Kulshreshtha";
  const fullRole = "Aspiring DevOps & Cloud Engineer";

  useEffect(() => {
    let nameIndex = 0;
    const nameTimer = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameTimer);
        // Start role typing after name is complete
        setTimeout(() => {
          let roleIndex = 0;
          const roleTimer = setInterval(() => {
            if (roleIndex <= fullRole.length) {
              setDisplayedRole(fullRole.slice(0, roleIndex));
              roleIndex++;
            } else {
              clearInterval(roleTimer);
              setShowCursor(false);
            }
          }, 80);
        }, 300);
      }
    }, 100);

    return () => clearInterval(nameTimer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#64FFDA] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-[#64FFDA] opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 border border-[#64FFDA] opacity-10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content - Apple Window Style */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="apple-window rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Window Control Dots */}
          <div className="absolute top-6 left-6 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-lg" />
            <div className="w-3 h-3 rounded-full bg-[#28CA42] shadow-lg" />
          </div>

          {/* Terminal Icon */}
          <div className="absolute top-5 right-6 opacity-30">
            <Terminal className="w-6 h-6 text-[#64FFDA]" />
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-8 mt-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#64FFDA] rounded-full blur-2xl opacity-20 animate-pulse-blue" />
              <img
                src="/images/Aarya_img-removebg-preview.png"
                alt="Aarya Kulshreshtha"
                className="relative w-32 h-32 rounded-full border-2 border-[#64FFDA] shadow-[0_0_30px_rgba(100,255,218,0.4)] object-cover"
              />
            </div>
          </motion.div>

          {/* Typewriter Name */}
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#CCD6F6] mb-2 font-mono">
              <span className="inline-block">
                {displayedName}
                {displayedName.length < fullName.length && (
                  <span className="inline-block w-0.5 h-12 bg-[#64FFDA] ml-1 animate-pulse" />
                )}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: displayedName.length === fullName.length ? 1 : 0,
              }}
              className="text-xl md:text-2xl text-[#64FFDA] font-mono font-semibold"
            >
              {displayedRole}
              {displayedRole.length < fullRole.length &&
                displayedRole.length > 0 && (
                  <span className="inline-block w-0.5 h-6 bg-[#64FFDA] ml-1 animate-pulse" />
                )}
            </motion.p>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.6 }}
            className="text-center text-[#8892B0] text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I build scalable, automated, and cloud-native systems. Passionate
            about infrastructure, CI/CD, and creating seamless developer
            experiences.
          </motion.p>

          {/* Buttons */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 4.5, duration: 0.6 }}
  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
>
  {/* Download Resume Button */}
  <a
    href="/images/Aarya_Kulshreshtha_Resume.pdf" // 
    download="/app/public/images/Aarya_Kulshreshtha_Resume.pdf" // 
  >
    <Button
      className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 px-8 py-6 text-lg font-mono rounded-xl shadow-[0_0_20px_rgba(100,255,218,0.2)] hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all duration-300"
    >
      <Download className="w-5 h-5 mr-2" />
      Download Resume
    </Button>
  </a>

  {/* LinkedIn Button */}
  <Button
    onClick={() => window.open("https://www.linkedin.com/in/aarya-kulshreshtha-prog/", "_blank")} 
    className="bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 px-8 py-6 text-lg font-mono font-semibold rounded-xl shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)] transition-all duration-300"
  >
    <Linkedin className="w-5 h-5 mr-2" />
    Connect on LinkedIn
  </Button>
</motion.div>


          {/* Decorative corner accents */}
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#64FFDA] opacity-10 rounded-br-3xl" />
          <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#64FFDA] opacity-10 rounded-tl-3xl" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#64FFDA] text-sm font-mono"
        >
          ↓ scroll
        </motion.div>
      </motion.div>
    </section>
  );
}