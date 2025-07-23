import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import Features from '../components/Features';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppDownloadSection from '../components/AppDownloadSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <Features />
      <ServicesSection />
      <TestimonialsSection />
      <AppDownloadSection />
    </main>
  );
}