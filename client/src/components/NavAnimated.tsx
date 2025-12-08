import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Music, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavAnimated() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 glass-panel">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="font-display text-2xl font-bold tracking-widest hover:text-primary transition-colors duration-300">
              NITESH<span className="text-primary">KUMAR</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`relative font-body font-medium uppercase tracking-wider text-sm hover:text-primary transition-colors duration-300 ${isActive(link.href) ? 'text-primary' : 'text-muted-foreground'}`}>
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary box-neon-purple"
                    />
                  )}
                </a>
              </Link>
            ))}
            
            {/* Audio Toggle (Visual Only) */}
            <button 
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="ml-4 p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-secondary"
            >
              {audioEnabled ? <Music size={18} /> : <VolumeX size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6"
          >
             {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={`text-4xl font-display uppercase font-bold ${isActive(link.href) ? 'text-primary' : 'text-white/50'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
