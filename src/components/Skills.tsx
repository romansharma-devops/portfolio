import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud, 
  Container, 
  Settings, 
  GitBranch, 
  Monitor, 
  Shield,
  Database,
  Cpu
} from "lucide-react";

const Skills = () => {
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
    },
    {
      category: "CI/CD & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI", level: 85 },
        { name: "GitHub Actions", level: 88 }
      ]
    },
    {
      category: "Monitoring & Observability",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "Prometheus", level: 90 },
        { name: "Grafana", level: 85 },
        { name: "ELK Stack", level: 80 }
      ]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "DevSecOps", level: 85 },
        { name: "SAST/DAST", level: 80 },
        { name: "Compliance", level: 75 }
      ]
    }
  ];

  const technologies = [
    "AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins", 
    "Prometheus", "Grafana", "GitLab", "Ansible", "Python", "Bash",
    "Helm", "ArgoCD", "Istio", "Vault", "Consul", "ElasticSearch"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across the entire DevOps ecosystem with deep knowledge of cloud platforms, 
            automation tools, and modern software delivery practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient p-6 border-border/50 hover:border-primary/30 transition-colors">
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

        <Card className="card-gradient p-8 border-border/50">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
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
  );
};

export default Skills;