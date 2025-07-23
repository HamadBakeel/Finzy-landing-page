import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import Features from '../components/Features';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <Features />
      <ServicesSection />
    </main>
  );
}