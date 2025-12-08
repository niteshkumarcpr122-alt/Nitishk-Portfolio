export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/5 mt-20 relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground font-body">
        <p>© 2025 Alex Nova. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
