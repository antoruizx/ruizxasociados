import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('value1'),
      description: t('value1Description'),
    },
    {
      icon: Heart,
      title: t('value2'),
      description: t('value2Description'),
    },
    {
      icon: Award,
      title: t('value3'),
      description: t('value3Description'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-center mb-10 text-foreground">
              {t('valuesTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 border-border bg-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-primary/10 text-primary">
                        <value.icon className="h-10 w-10" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
