import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Code2,
  Menu,
  X,
  Cloud,
  Container,
  Settings,
  GitBranch,
  Monitor,
  Shield,
  Building,
  Calendar,
  ExternalLink,
  Play,
  Heart
} from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skillCategories = [
    {
      category: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 85 },
        { name: "Google Cloud", level: 75 }
      ]
    },
    {
      category: "Containerization",
      icon: <Container className="w-6 h-6" />,
      skills: [
        { name: "Kubernetes", level: 90 },
        { name: "Docker", level: 95 },
        { name: "Helm", level: 85 }
      ]
    },
    {
      category: "Infrastructure as Code",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Terraform", level: 95 },
        { name: "CloudFormation", level: 80 },
        { name: "Ansible", level: 85 }
      ]
    }
  ];

  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "TechFlow Solutions",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: "Lead DevOps initiatives for a cloud-native fintech platform serving 2M+ users.",
      achievements: [
        "Reduced deployment time by 75% through GitOps and automated pipelines",
        "Implemented comprehensive monitoring reducing MTTR by 60%",
        "Led migration from monolith to microservices on Kubernetes"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "GitLab CI", "Prometheus"]
    },
    {
      role: "DevOps Engineer",
      company: "CloudScale Inc",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Managed infrastructure for high-traffic e-commerce platforms.",
      achievements: [
        "Automated infrastructure provisioning reducing setup time by 80%",
        "Implemented security best practices achieving SOC 2 compliance",
        "Optimized cloud costs resulting in 40% reduction in monthly spend"
      ],
      technologies: ["Azure", "Docker", "Jenkins", "Ansible", "Grafana"]
    }
  ];

  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Designed and implemented a multi-cloud infrastructure management platform.",
      technologies: ["Terraform", "AWS", "Azure", "Kubernetes", "ArgoCD"],
      features: [
        "Cross-cloud resource provisioning",
        "Automated compliance checking",
        "Cost optimization recommendations"
      ]
    },
    {
      title: "GitOps Continuous Delivery Pipeline",
      description: "Built a comprehensive GitOps workflow enabling zero-downtime deployments.",
      technologies: ["GitLab CI", "ArgoCD", "Helm", "Prometheus", "Istio"],
      features: [
        "Automated testing and validation",
        "Progressive delivery with canary deployments",
        "Real-time monitoring and alerting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">AR</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" size="sm">
                Download CV
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50">
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Download CV
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rohan Sharma
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
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 hover:scale-105 transition-transform">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
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

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
              Hacker
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate DevOps engineer with 7+ years of experience building resilient, 
              scalable infrastructure and streamlining development workflows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in designing and implementing cloud-native solutions that bridge the gap 
                between development and operations. My expertise spans across AWS, Azure, Kubernetes, 
                and modern DevOps toolchains.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I believe in automation-first approaches, infrastructure as code, and creating 
                systems that enable teams to deliver value faster while maintaining the highest 
                standards of reliability and security.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary/50 text-primary">AWS Certified</Badge>
                <Badge variant="outline" className="border-primary/50 text-primary">Kubernetes Expert</Badge>
                <Badge variant="outline" className="border-primary/50 text-primary">Terraform Specialist</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover:scale-105 transition-transform bg-card/50 backdrop-blur">
                <div className="text-primary mb-3"><Cloud className="w-6 h-6" /></div>
                <h3 className="font-semibold mb-2">Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Cloud-native architecture design</p>
              </Card>
              <Card className="p-6 hover:scale-105 transition-transform bg-card/50 backdrop-blur">
                <div className="text-primary mb-3"><Code2 className="w-6 h-6" /></div>
                <h3 className="font-semibold mb-2">Automation</h3>
                <p className="text-sm text-muted-foreground">CI/CD pipelines and IaC</p>
              </Card>
              <Card className="p-6 hover:scale-105 transition-transform bg-card/50 backdrop-blur">
                <div className="text-primary mb-3"><Shield className="w-6 h-6" /></div>
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">DevSecOps practices</p>
              </Card>
              <Card className="p-6 hover:scale-105 transition-transform bg-card/50 backdrop-blur">
                <div className="text-primary mb-3"><Monitor className="w-6 h-6" /></div>
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">Monitoring & observability</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expertise across the entire DevOps ecosystem with deep knowledge of cloud platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-3">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins", 
                "Prometheus", "Grafana", "GitLab", "Ansible", "Python", "Bash"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building and scaling infrastructure solutions across diverse industries.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center text-lg text-muted-foreground mb-2">
                      <Building className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period} • {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative DevOps solutions that solve real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-primary/50" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" variant="outline">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to scale your infrastructure? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to improve development workflows.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">alex.rodriguez@email.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Find me online</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-xl font-bold mb-6">Send me a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project Discussion" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground text-center md:text-left">
                © 2024 Alex Rodriguez. Built with{" "}
                <Heart className="w-4 h-4 inline text-red-500" fill="currentColor" />{" "}
                and modern DevOps practices.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
