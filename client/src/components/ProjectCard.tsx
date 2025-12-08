import { motion } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -10 }}
          className="group relative bg-card border border-white/5 overflow-hidden rounded-sm hover:border-primary/50 transition-colors duration-300 cursor-pointer text-left h-full flex flex-col"
        >
          {/* Image / Canvas Placeholder */}
          <div className="relative h-48 w-full overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute top-2 right-2 z-20">
              <span className="px-2 py-1 text-xs font-mono bg-black/80 text-primary border border-primary/30 uppercase tracking-widest">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative flex flex-col flex-grow">
            <div className="absolute -top-12 left-6 h-12 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
            
            <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-xs text-white/40 font-mono">#{t}</span>
              ))}
              {project.tech.length > 3 && <span className="text-xs text-white/40 font-mono">+{project.tech.length - 3}</span>}
            </div>

            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-secondary transition-colors">
                View Project <ArrowRight size={16} />
              </span>
            </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 group-hover:border-primary transition-colors" />
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 group-hover:border-primary transition-colors" />
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-black/90 border-primary/20 backdrop-blur-xl p-0 overflow-hidden gap-0">
         <div className="grid md:grid-cols-2 h-[80vh] md:h-auto">
            {/* Left: Image/Media */}
            <div className="relative bg-muted h-64 md:h-auto">
               <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Right: Details */}
            <div className="p-8 md:p-12 flex flex-col h-full overflow-y-auto">
               <DialogHeader className="mb-6">
                  <DialogTitle className="text-4xl font-display font-bold text-white mb-2">{project.title}</DialogTitle>
                  <DialogDescription className="font-mono text-primary uppercase tracking-widest">
                    {project.category} // {project.link === '#' ? 'Coming Soon' : 'Live'}
                  </DialogDescription>
               </DialogHeader>

               <div className="space-y-6 flex-grow">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-white mb-3 uppercase text-sm tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-white/70 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                  <Button className="flex-1 bg-primary text-black hover:bg-white font-bold font-display uppercase tracking-widest">
                    Launch Project
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5 hover:text-white uppercase tracking-widest font-mono">
                      Close
                    </Button>
                  </DialogClose>
               </div>
            </div>
         </div>
      </DialogContent>
    </Dialog>
  );
}
