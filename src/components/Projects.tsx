import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Designed and implemented a multi-cloud infrastructure management platform that abstracts cloud provider differences and provides unified deployment workflows.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      technologies: ["Terraform", "AWS", "Azure", "Kubernetes", "ArgoCD"],
      features: [
        "Cross-cloud resource provisioning",
        "Automated compliance checking",
        "Cost optimization recommendations"
      ],
      links: {
        demo: "#",
        github: "#",
        case_study: "#"
      }
    },
    {
      title: "GitOps Continuous Delivery Pipeline",
      description: "Built a comprehensive GitOps workflow enabling zero-downtime deployments across multiple environments with automatic rollback capabilities.",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=500&h=300&fit=crop",
      technologies: ["GitLab CI", "ArgoCD", "Helm", "Prometheus", "Istio"],
      features: [
        "Automated testing and validation",
        "Progressive delivery with canary deployments",
        "Real-time monitoring and alerting"
      ],
      links: {
        demo: "#",
        github: "#",
        case_study: "#"
      }
    },
    {
      title: "Container Security & Compliance Suite",
      description: "Developed an end-to-end security scanning and compliance framework for containerized applications with automated vulnerability assessment.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
      technologies: ["Docker", "Trivy", "OPA", "Falco", "SAST Tools"],
      features: [
        "Container image vulnerability scanning",
        "Runtime security monitoring",
        "Policy-as-code enforcement"
      ],
      links: {
        demo: "#",
        github: "#",
        case_study: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative DevOps solutions that solve real-world infrastructure and automation challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm text-foreground">Key Features:</h4>
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
  );
};

export default Projects;