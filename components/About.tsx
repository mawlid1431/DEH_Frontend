import { Globe, Heart, Users, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const countries = [
    'Türkiye', 'China', 'Somaliland', 'Vietnam', 'Afghanistan', 'Malaysia'
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Social Impact',
      description: 'Inspired by Muhammad Yunus\'s social business principles'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Youth Focus',
      description: 'Empowering marginalized youth aged 18-25 worldwide'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Digital Skills',
      description: 'Providing essential digital literacy and technical skills'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">About Digital Empowerment Hub</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A social business dedicated to breaking down digital barriers and creating sustainable pathways to economic opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission Content */}
          <div>
            <h3 className="text-3xl text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              The Digital Empowerment Hub (DEH) exists to bridge the digital divide that prevents millions of young people from accessing economic opportunities in our increasingly connected world.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that digital literacy is not a luxury—it's a fundamental right that opens doors to education, employment, and entrepreneurship.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-foreground mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1727553957752-bca64c93249e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGVtcG93ZXJtZW50JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc1ODYyNTM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Youth Empowerment"
              className="w-full h-96 object-cover rounded-lg grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="bg-black/50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-3xl text-white mb-6 text-center">The Challenge We Address</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-5xl text-white mb-4">73%</div>
              <p className="text-gray-300">of young people in developing countries lack basic digital skills</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-white mb-4">2.9B</div>
              <p className="text-gray-300">people worldwide still lack internet access</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 text-center mt-8 max-w-4xl mx-auto">
            This digital divide perpetuates cycles of poverty and limits access to education, employment, and entrepreneurial opportunities.
          </p>
        </div>

        {/* Target Countries */}
        <div className="text-center">
          <h3 className="text-3xl text-white mb-8">Our Focus Regions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-colors duration-200"
              >
                <Globe className="w-4 h-4 inline-block mr-2" />
                {country}
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            We begin our work in these six countries, each facing unique challenges in digital access and youth unemployment.
          </p>
        </div>
      </div>
    </section>
  );
}