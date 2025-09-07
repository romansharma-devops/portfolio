import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Shield, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Cloud-native architecture design and implementation"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Automation",
      description: "CI/CD pipelines and infrastructure as code"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "DevSecOps practices and compliance frameworks"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Monitoring, observability, and optimization"
    }
  ];

  return (
    <section id="about" className="py-20 container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate DevOps engineer with 7+ years of experience building resilient, 
            scalable infrastructure and streamlining development workflows.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
              <Badge variant="outline" className="border-tech-blue text-tech-blue">AWS Certified</Badge>
              <Badge variant="outline" className="border-tech-purple text-tech-purple">Kubernetes Expert</Badge>
              <Badge variant="outline" className="border-tech-cyan text-tech-cyan">Terraform Specialist</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="card-gradient p-6 hover:scale-105 transition-transform border-border/50">
                <div className="text-primary mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;