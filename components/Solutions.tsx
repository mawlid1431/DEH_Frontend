import { Smartphone, Users, DollarSign, Wifi, BookOpen, Sun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Solutions() {
  const solutions = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile-First E-Learning Platform',
      description: 'Accessible digital education designed for smartphones with offline capabilities',
      features: [
        'Offline-first architecture for areas with limited connectivity',
        'Localized content in multiple languages',
        'Adaptive learning pathways',
        'Peer-to-peer knowledge sharing',
        'Micro-learning modules optimized for mobile'
      ],
      highlight: 'Works without internet connection'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Community Digital Learning Hubs',
      description: 'Physical spaces that bring technology and learning to local communities',
      features: [
        'Solar-powered technology centers',
        'Community-managed learning spaces',
        'Train-the-trainer programs',
        'Local language support',
        'Collaborative project spaces'
      ],
      highlight: 'Sustainable and community-owned'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Sustainable Business Model',
      description: 'A no-dividend social business model that reinvests all profits into expansion',
      features: [
        'Zero dividend to investors',
        '100% profit reinvestment',
        'Scholarship programs for underserved youth',
        'Community partnership revenue',
        'Transparent impact reporting'
      ],
      highlight: 'All profits fund more scholarships'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">Our Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three interconnected approaches to sustainable digital empowerment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card border-border hover:border-foreground/30 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 text-foreground group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <CardTitle className="text-foreground text-xl mb-2">{solution.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-foreground/5 rounded-lg p-4 mb-4">
                  <div className="text-sm text-foreground/80 mb-2">Key Features:</div>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-foreground/10 rounded-lg p-3 text-center">
                  <div className="text-foreground font-medium text-sm">{solution.highlight}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-3xl text-foreground mb-8 text-center">How They Work Together</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="text-foreground mb-3">Access</h4>
              <p className="text-muted-foreground text-sm">Digital hubs provide internet access and device training for the mobile platform</p>
            </div>
            <div className="text-center">
              <div className="bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="text-foreground mb-3">Learn</h4>
              <p className="text-muted-foreground text-sm">Students access courses online and offline, with community support and mentorship</p>
            </div>
            <div className="text-center">
              <div className="bg-foreground/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="text-foreground mb-3">Sustain</h4>
              <p className="text-muted-foreground text-sm">Revenue funds new hubs and scholarships, creating a cycle of empowerment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}