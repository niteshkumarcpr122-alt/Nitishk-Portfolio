import PageTransition from "@/components/PageTransition";
import { SKILLS } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
              <span className="text-primary">01.</span> About
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground font-body">
              <p>
                Hello! I'm Nitesh Kumar, a creative developer with a passion for building immersive digital experiences. My journey started with a fascination for video game UIs and evolved into creating performant, interactive websites.
              </p>
              <p>
                I specialize in the intersection of design and engineering, ensuring that every pixel serves a purpose and every interaction feels magical.
              </p>
              <p className="text-white font-bold">
                Currently open to freelance opportunities and collaborations.
              </p>
            </div>

            <div className="mt-12">
               <h3 className="text-2xl font-display font-bold mb-6">Education</h3>
               <div className="border-l border-white/10 pl-6 py-2">
                  <h4 className="text-xl text-white">B.Sc. Computer Science</h4>
                  <p className="text-muted-foreground">University of Technology, 2023</p>
               </div>
            </div>
          </div>

          {/* Skills Visualization */}
          <div className="bg-white/5 p-8 border border-white/10 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 font-mono text-6xl font-bold">SKILLS</div>
            
            <div className="space-y-6 relative z-10 mt-8">
              {SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 font-mono text-sm uppercase tracking-wider">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-black/50 w-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
