import { setPageSeo } from '../../lib/seo';
import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import Hero from './components/Hero';
import AuthorityStrip from './components/AuthorityStrip';
import StatsSection from './components/StatsSection';
import ProgramsOverview from './components/ProgramsOverview';
import PortfolioSection from './components/PortfolioSection';
import AcumenDifference from './components/AcumenDifference';
import CareerOutcomes from './components/CareerOutcomes';
import EmployerDemandSection from './components/EmployerDemandSection';
import CtaSection from './components/CtaSection';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Online Cybersecurity Training + Augusta, GA | Acumen Career Academy';
    setPageSeo("Live, instructor-led cybersecurity training you can take online or in Augusta, GA. CompTIA Security+ and SOC Analyst (Blue Team Level 1 and Cisco CCNA) programs. GNPEC-licensed, job-ready in 8-12 weeks.");
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <AuthorityStrip />
        <StatsSection />
        <ProgramsOverview />
        <PortfolioSection />
        <AcumenDifference />
        <CareerOutcomes />
        <EmployerDemandSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
