import { ThemeProvider } from './components/ThemeProvider';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { Impact } from './components/Impact';
import { Innovation } from './components/Innovation';
import { Roadmap } from './components/Roadmap';
import { Reviews } from './components/Reviews';
import { PaymentIntegration } from './components/PaymentIntegration';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <SEOHead />
        <Header />
        <main>
          <Hero />
          <About />
          <Solutions />
          <Impact />
          <Innovation />
          <Roadmap />
          <Reviews />
          <PaymentIntegration />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}