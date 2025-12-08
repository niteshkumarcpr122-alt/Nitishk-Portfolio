import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "3D Commerce", "Web App", "Audio", "Design"];

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
              <span className="text-secondary">02.</span> Projects
            </h1>
            <p className="text-muted-foreground">A selection of my recent work.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-mono uppercase tracking-wider border transition-colors ${
                  filter === cat 
                    ? 'bg-primary border-primary text-black' 
                    : 'bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
