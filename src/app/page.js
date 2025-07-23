import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import Features from '../components/Features';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <Features />
      <ServicesSection />
      <TestimonialsSection/>
    </main>
  );
}