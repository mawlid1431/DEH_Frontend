import { Globe, Mail, Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'About': [
      { name: 'Our Mission', href: '#about' },
      { name: 'Team', href: '#team' },
      { name: 'Impact Report', href: '#impact' },
      { name: 'Partnerships', href: '#partnerships' }
    ],
    'Programs': [
      { name: 'Digital Skills Training', href: '#solutions' },
      { name: 'Community Hubs', href: '#solutions' },
      { name: 'Ambassador Program', href: '#innovation' },
      { name: 'Scholarships', href: '#contact' }
    ],
    'Resources': [
      { name: 'Learning Platform', href: '#platform' },
      { name: 'Research & Reports', href: '#research' },
      { name: 'Blog', href: '#blog' },
      { name: 'Documentation', href: '#docs' }
    ],
    'Connect': [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Join Us', href: 'https://deh-admin-dashboard-64jnjo44j-mawlid1431s-projects.vercel.app/' },
      { name: 'Media Kit', href: '#media' },
      { name: 'Newsletter', href: '#newsletter' }
    ]
  };

  const countries = [
    'Türkiye', 'China', 'Somaliland', 'Vietnam', 'Afghanistan', 'Malaysia'
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-background" />
              </div>
              <span className="text-foreground text-2xl">Digital Empowerment Hub</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Bridging the digital divide and empowering marginalized youth through sustainable technology solutions and community-driven education.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>contact@digitalhub.org</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Global, Virtual First</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Countries Section */}
        <div className="border-t border-border pt-8 mb-8">
          <h4 className="text-foreground mb-4 text-center">Our Focus Regions</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <span 
                key={country}
                className="bg-foreground/5 border border-border rounded-full px-4 py-2 text-muted-foreground text-sm hover:bg-foreground/10 transition-colors duration-200"
              >
                {country}
              </span>
            ))}
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground text-sm">Follow our journey:</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-foreground text-xs">Li</span>
                </div>
                <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-foreground text-xs">Tw</span>
                </div>
                <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-foreground text-xs">Fb</span>
                </div>
                <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-foreground text-xs">Ig</span>
                </div>
                <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors duration-200 cursor-pointer">
                  <span className="text-foreground text-xs">Yt</span>
                </div>
              </div>
            </div>

            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>for social impact</span>
              </div>
              <div>© 2024 Digital Empowerment Hub. All rights reserved.</div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 text-muted-foreground text-xs">
            <a href="#privacy" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors duration-200">Terms of Service</a>
            <a href="#cookies" className="hover:text-foreground transition-colors duration-200">Cookie Policy</a>
            <a href="#accessibility" className="hover:text-foreground transition-colors duration-200">Accessibility</a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto">
            "In the spirit of Muhammad Yunus's social business model, we believe that technology should serve humanity, not profit. Every digital skill taught, every community connected, and every young person empowered brings us closer to a more equitable world."
          </p>
        </div>
      </div>
    </footer>
  );
}