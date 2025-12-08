import PageTransition from "@/components/PageTransition";
import { EXPERIENCE } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">
          <span className="text-accent">03.</span> Experience
        </h1>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-background border border-accent rounded-full group-hover:bg-accent transition-colors" />
              
              <div className="bg-white/5 p-6 md:p-8 rounded-sm border border-white/5 hover:border-accent/30 transition-colors group">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full">
                  {job.period}
                </span>
                
                <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {job.role}
                </h3>
                
                <h4 className="text-lg text-muted-foreground mb-4 font-mono">
                  @ {job.company}
                </h4>
                
                <p className="text-white/70 leading-relaxed font-body">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
