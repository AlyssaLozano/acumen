import { setPageSeo } from '../../lib/seo';
import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Contact Us | Acumen Career Academy - Cybersecurity Training Augusta, Georgia';
    setPageSeo("Contact Acumen Career Academy in Augusta, GA. Questions about our online cybersecurity training, admissions, or cohorts? We're happy to help.");
  }, []);

  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <ContactHero />
        <section className="py-20 bg-navy-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mx-auto reveal-element">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
