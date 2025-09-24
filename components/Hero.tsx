import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1756117921495-533bb54bcebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGRhcmt8ZW58MXx8fHwxNzU4NjI1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Digital Technology Background"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-background/60 transition-colors duration-300"></div>
      </div>

      {/* Abstract Tech Pattern Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-foreground/20 rounded-full transition-colors duration-300"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-foreground/10 rotate-45 transition-colors duration-300"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-lg bg-foreground/5 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" role="main" aria-labelledby="hero-title">
        <div className="max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 xs:mb-6 leading-tight text-foreground transition-colors duration-300">
            Bridging the Digital Divide,{' '}
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent transition-all duration-300">
              Empowering Youth
            </span>
          </h1>
          
          <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-6 xs:mb-8 max-w-3xl mx-auto px-4 text-muted-foreground transition-colors duration-300">
            Transforming lives through digital education and sustainable technology solutions for marginalized youth worldwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://deh-admin-dashboard-mawlid1431s-projects.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Join the Digital Empowerment Hub community"
            >
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-3 group hover:shadow-lg"
              >
                Join Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground/50 bg-transparent text-foreground hover:bg-foreground/10 hover:border-foreground px-8 py-3 group transition-all duration-300"
              aria-label="Learn more about our mission and programs"
            >
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 xs:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl xs:text-3xl lg:text-4xl mb-1 xs:mb-2 text-foreground transition-colors duration-300">6</div>
              <div className="text-xs xs:text-sm uppercase tracking-wide text-muted-foreground transition-colors duration-300">Target Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl lg:text-4xl mb-1 xs:mb-2 text-foreground transition-colors duration-300">18-25</div>
              <div className="text-xs xs:text-sm uppercase tracking-wide text-muted-foreground transition-colors duration-300">Age Group</div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl lg:text-4xl mb-1 xs:mb-2 text-foreground transition-colors duration-300">100%</div>
              <div className="text-xs xs:text-sm uppercase tracking-wide text-muted-foreground transition-colors duration-300">Social Impact</div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl lg:text-4xl mb-1 xs:mb-2 text-foreground transition-colors duration-300">2025</div>
              <div className="text-xs xs:text-sm uppercase tracking-wide text-muted-foreground transition-colors duration-300">Launch Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center transition-colors duration-300">
          <div className="w-1 h-3 rounded-full mt-2 bg-foreground/50 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
}
