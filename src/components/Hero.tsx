import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Roman-Sharma
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Senior DevOps
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Orchestrating cloud infrastructure and automating deployment pipelines to deliver scalable, 
            reliable solutions that drive business growth.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="hero-gradient text-white font-semibold px-8 py-3 tech-glow hover:scale-105 transition-transform">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all">
            Download CV
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110 transform">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;