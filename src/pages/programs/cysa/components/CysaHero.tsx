import { Link } from 'react-router-dom';

export default function CysaHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy-900 grid-overlay pt-28 pb-16">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/4 rounded-full blur-3xl animate-blob-delay pointer-events-none" />
      <div
        className="absolute inset-0 bg-center bg-cover opacity-8 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/50 to-navy-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center gap-3 mb-6 reveal-element">
          <Link to="/programs" className="font-mono text-steel text-xs hover:text-gold transition-colors cursor-pointer">Programs</Link>
          <i className="ri-arrow-right-s-line text-steel text-xs" />
          <span className="font-mono text-gold text-xs">Cyber Ops Analyst</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card border border-gold/30 px-4 py-2 rounded-full mb-6 reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest">BLUE TEAM LEVEL 1 (BTL1) &amp; CCNA CYBERSECURITY (200-201)</span>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold text-ice leading-tight mb-6 reveal-element">
            Cybersecurity Operations<br />
            <span className="gold-text">Analyst Skills Program</span>
          </h1>

          <p className="font-sans text-steel text-lg leading-relaxed mb-8 reveal-element">
            Get working as a SOC analyst in 8 weeks for $4,725 total - aligned to the Blue Team Level 1 (BTL1)
            and CCNA Cybersecurity (200-201) certifications. From day one you&apos;re using the same tools
            real analysts use every shift: Splunk, Sigma, Wireshark, TheHive, n8n. You graduate with a verifiable
            portfolio of investigation reports, detection rules, and case documentation - not just a certificate.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 reveal-element">
            {[
              { icon: 'ri-time-line', label: 'Duration', value: '8 Weeks' },
              { icon: 'ri-price-tag-3-line', label: 'Total Cost', value: '$4,725' },
              { icon: 'ri-live-line', label: 'Format', value: 'Live Instructor-Led' },
              { icon: 'ri-folder-chart-line', label: 'Outcome', value: 'Portfolio + Cert Prep' },
            ].map((s) => (
              <div key={s.label} className="glass-card border border-gold/15 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <i className={`${s.icon} text-gold text-sm`} />
                  <span className="font-mono text-steel text-xs">{s.label}</span>
                </div>
                <p className="font-sans text-ice text-sm font-semibold">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 reveal-element">
            <Link
              to="/admissions"
              className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Apply Now <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-gold px-7 py-3.5 rounded-full text-sm cursor-pointer whitespace-nowrap"
            >
              Request Information
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
