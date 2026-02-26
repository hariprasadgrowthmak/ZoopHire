import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ProblemSolution } from './components/ProblemSolution';
import { DemoVideo } from './components/DemoVideo';
import { Features } from './components/Features';
import { AudienceTabs } from './components/AudienceTabs';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.6,
      infinite: false,
    });
    lenisRef.current = lenis;

    // Add class for CSS targeting
    document.documentElement.classList.add('lenis');

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#ffffff' }}>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <DemoVideo />
      <Features />
      <AudienceTabs />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
