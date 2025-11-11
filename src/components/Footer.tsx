import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[#64FFDA]/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8892B0] text-sm font-mono">
            © {new Date().getFullYear()} Aarya Kulshreshtha.
          </p>

          <div className="flex items-center gap-2 text-[#8892B0] text-sm">
            <span className="font-mono">Built with</span>
            <span className="text-[#64FFDA] font-semibold font-mono">code</span>
            <span className="font-mono">and</span>
            <span className="text-[#64FFDA] font-semibold font-mono">love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
