import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col justify-center container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-primary font-mono text-sm tracking-[0.2em] mb-4 uppercase">
            Creative Developer_
          </h2>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-none tracking-tighter mb-6">
            NITESH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">KUMAR</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10 border-l-2 border-primary/50 pl-6">
            Interactive 3D web & UX — I build neon experiences that bridge the gap between imagination and browser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <a className="group relative px-8 py-4 bg-primary/10 border border-primary text-primary font-display font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 w-fit flex items-center gap-3">
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-8 py-4 border border-white/10 text-white font-display font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300 w-fit">
                Contact Me
              </a>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 right-6 text-right hidden md:block">
          <p className="font-mono text-xs text-white/30">
            LOC: 34.0522° N, 118.2437° W<br />
            SYS: ONLINE<br />
            VER: 2.0.25
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
