import { Users, GraduationCap, Heart, Briefcase, Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

export function Impact() {
  const sdgs = [
    {
      number: '1',
      title: 'No Poverty',
      description: 'Creating pathways to economic opportunity'
    },
    {
      number: '4',
      title: 'Quality Education',
      description: 'Accessible digital learning for all'
    },
    {
      number: '5',
      title: 'Gender Equality',
      description: 'Empowering women and girls in tech'
    },
    {
      number: '8',
      title: 'Decent Work',
      description: 'Building skills for digital economy jobs'
    }
  ];

  const impactMetrics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '10,000+',
      label: 'Youth to be Empowered',
      description: 'Projected reach by 2026'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: '85%',
      label: 'Course Completion Rate',
      description: 'Target engagement metric'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      number: '70%',
      label: 'Employment Rate',
      description: 'Job placement within 6 months'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '100%',
      label: 'Social Impact',
      description: 'All profits reinvested'
    }
  ];

  const testimonials = [
    {
      name: 'Amira Hassan',
      location: 'Somaliland',
      role: 'Digital Skills Graduate',
      quote: 'DEH gave me the digital skills I needed to start my own online business. Now I help other young women in my community access these same opportunities.',
      image: 'AH'
    },
    {
      name: 'Li Wei',
      location: 'China',
      role: 'Community Hub Leader',
      quote: 'As a hub leader, I see daily how technology transforms lives. The offline learning platform ensures no one is left behind, regardless of internet connectivity.',
      image: 'LW'
    },
    {
      name: 'Fatima Al-Rashid',
      location: 'Afghanistan',
      role: 'Student Ambassador',
      quote: 'Through DEH, I found my voice and my future. The peer-to-peer learning model helped me become a leader in my community while developing technical skills.',
      image: 'FR'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measuring success through lives transformed and communities empowered
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <div className="text-white">
                  {metric.icon}
                </div>
              </div>
              <div className="text-4xl text-white mb-2">{metric.number}</div>
              <div className="text-white mb-2">{metric.label}</div>
              <div className="text-gray-400 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="mb-20">
          <h3 className="text-3xl text-white mb-8 text-center">Supporting UN Sustainable Development Goals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgs.map((sdg, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-white/30 transition-all duration-300">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">{sdg.number}</span>
                  </div>
                  <h4 className="text-white text-lg">{sdg.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm text-center">{sdg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl text-white mb-12 text-center">Success Stories</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/50 border-white/10 hover:border-white/30 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white">{testimonial.image}</span>
                  </div>
                  <h4 className="text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role} • {testimonial.location}</p>
                </CardHeader>
                <CardContent>
                  <Quote className="w-6 h-6 text-white/40 mb-4" />
                  <p className="text-gray-300 text-sm italic">{testimonial.quote}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white/5 rounded-2xl p-8 lg:p-12 mt-20 text-center">
          <h3 className="text-3xl text-white mb-4">Be Part of Our Impact</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us in creating a more digitally inclusive world. Every contribution helps us reach more young people and build more sustainable communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://deh-admin-dashboard-mawlid1431s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-lg inline-block"
            >
              JOIN US NOW
            </a>
            <button>
              <a
                href="https://drive.google.com/file/d/1da9kEm24l82mGP2jrH62vuergkAAokLl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 transition-all duration-300 px-8 py-3 rounded-lg inline-block"
              >
                View Full Impact Report
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
