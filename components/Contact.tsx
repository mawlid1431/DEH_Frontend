import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart, Briefcase, Users, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: ''
  });

  const involvementTypes = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Corporate Partnership',
      description: 'Technology partnerships, funding, and corporate social responsibility programs',
      benefits: ['Brand alignment with social impact', 'Employee engagement opportunities', 'Tax benefits and ESG reporting']
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Sponsorship',
      description: 'Financial support for scholarships, hub development, and program expansion',
      benefits: ['Direct impact measurement', 'Naming opportunities', 'Student success stories']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Volunteering',
      description: 'Skills-based volunteering, mentorship, and community engagement',
      benefits: ['Skill sharing opportunities', 'Cultural exchange', 'Personal fulfillment']
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Student Enrollment',
      description: 'Join our learning programs and become part of the digital empowerment community',
      benefits: ['Free digital skills training', 'Peer networking', 'Career opportunities']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-foreground mb-6">Get Involved</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in building a more digitally inclusive world. Together, we can create lasting change.
          </p>
        </div>

        {/* Involvement Options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {involvementTypes.map((type, index) => (
            <Card key={index} className="bg-card border-border hover:border-foreground/30 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-foreground group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <div>
                    <CardTitle className="text-foreground text-xl">{type.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl text-foreground mb-8">Start the Conversation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-foreground mb-2">
                  Organization
                </label>
                <Input
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/50"
                  placeholder="Your organization (optional)"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-foreground mb-2">
                  How would you like to get involved? *
                </label>
                <Select onValueChange={(value) => setFormData({...formData, type: value})}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select involvement type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="partnership" className="text-popover-foreground hover:bg-accent">Corporate Partnership</SelectItem>
                    <SelectItem value="sponsorship" className="text-popover-foreground hover:bg-accent">Sponsorship</SelectItem>
                    <SelectItem value="volunteering" className="text-popover-foreground hover:bg-accent">Volunteering</SelectItem>
                    <SelectItem value="student" className="text-popover-foreground hover:bg-accent">Student Enrollment</SelectItem>
                    <SelectItem value="other" className="text-popover-foreground hover:bg-accent">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/50"
                  placeholder="Tell us about your interest in joining our mission..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 py-3"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl text-foreground mb-8">Connect With Us</h3>
            
            <div className="space-y-8">
              <div className="bg-foreground/5 rounded-lg p-6">
                <h4 className="text-foreground mb-4">Direct Contact</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-foreground" />
                    <span className="text-muted-foreground">contact@digitalhub.org</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5 text-foreground" />
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5 text-foreground" />
                    <span className="text-muted-foreground">Global Headquarters, Virtual First</span>
                  </div>
                </div>
              </div>

              <div className="bg-foreground/5 rounded-lg p-6">
                <h4 className="text-foreground mb-4">Office Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM (UTC)</div>
                  <div>Saturday: 10:00 AM - 4:00 PM (UTC)</div>
                  <div>Sunday: Closed</div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="bg-foreground/5 rounded-lg p-6">
                <h4 className="text-foreground mb-4">Follow Our Journey</h4>
                <p className="text-muted-foreground mb-4">
                  Stay updated on our impact and progress across all six countries.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                    <span className="text-foreground text-sm">Li</span>
                  </div>
                  <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                    <span className="text-foreground text-sm">Tw</span>
                  </div>
                  <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                    <span className="text-foreground text-sm">Fb</span>
                  </div>
                  <div className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                    <span className="text-foreground text-sm">Ig</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-foreground/5 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl text-foreground mb-4">Stay Connected</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get monthly updates on our progress, success stories, and opportunities to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-foreground/50"
            />
            <Button className="bg-foreground text-background hover:bg-foreground/90 transition-colors duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}