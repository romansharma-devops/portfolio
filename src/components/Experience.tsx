import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "TechFlow Solutions",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: "Lead DevOps initiatives for a cloud-native fintech platform serving 2M+ users. Architected and implemented multi-region AWS infrastructure with 99.99% uptime.",
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
      description: "Managed infrastructure for high-traffic e-commerce platforms. Designed and maintained CI/CD pipelines supporting 50+ development teams.",
      achievements: [
        "Automated infrastructure provisioning reducing setup time by 80%",
        "Implemented security best practices achieving SOC 2 compliance",
        "Optimized cloud costs resulting in 40% reduction in monthly spend"
      ],
      technologies: ["Azure", "Docker", "Jenkins", "Ansible", "Grafana"]
    },
    {
      role: "Systems Engineer",
      company: "DataCore Systems",
      period: "2017 - 2019",
      location: "Denver, CO",
      description: "Maintained and optimized on-premise and hybrid cloud infrastructure. Implemented monitoring solutions and disaster recovery procedures.",
      achievements: [
        "Built automated backup and recovery systems",
        "Migrated legacy applications to containerized environments",
        "Reduced system downtime by 90% through proactive monitoring"
      ],
      technologies: ["VMware", "Linux", "Python", "ELK Stack", "Bash"]
    }
  ];

  return (
    <section id="experience" className="py-20 container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building and scaling infrastructure solutions across diverse industries and technical challenges.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient p-8 border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
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
                <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
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
                <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
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
  );
};

export default Experience;