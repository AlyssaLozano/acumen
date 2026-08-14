import { programs } from '../../../../mocks/programs';

const program = programs[0]; // Security+

const whyAcumen = [
  {
    icon: 'ri-price-tag-3-line',
    title: '$6,725 Total',
    desc: 'Less than half what national bootcamps charge for a comparable credential.',
  },
  {
    icon: 'ri-live-line',
    title: 'Live Every Session',
    desc: 'Not pre-recorded videos. Real instructor, real cohort, real accountability - every class.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Real Tools from Day One',
    desc: 'You work in the same platforms SOC analysts use: Splunk, Wireshark, and more.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'GNPEC Authorized',
    desc: 'Georgia-authorized institution. Not a pop-up bootcamp. A credentialed training program.',
  },
];

export default function SecPlusDomains() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Domains */}
          <div className="reveal-element">
            <span className="font-mono text-gold text-xs tracking-widest mb-3 block">EXAM BLUEPRINT</span>
            <h2 className="font-display text-4xl font-bold text-ice mb-4">Five Core Domains</h2>
            <p className="font-sans text-steel text-base leading-relaxed mb-8">
              Our curriculum is precisely mapped to the CompTIA Security+ exam blueprint.
              Every session is designed to build competency across all five weighted domains.
            </p>

            <div className="space-y-5">
              {program.domains.map((domain) => (
                <div key={domain.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-ice text-sm font-medium">{domain.name}</span>
                    <span className="font-mono text-gold text-sm font-bold">~{domain.weight}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-navy-700/80">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-gold to-gold/60 transition-all duration-700"
                      style={{ width: `${domain.weight * 3.3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card border border-gold/15 p-4 rounded-xl">
              <p className="font-mono text-steel text-xs leading-relaxed">
                Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA.
                CompTIA Security+ is a registered trademark of CompTIA, Inc.
              </p>
            </div>
          </div>

          {/* Target Roles + Highlights */}
          <div className="space-y-8 reveal-element">
            <div>
              <span className="font-mono text-gold text-xs tracking-widest mb-3 block">TARGET CAREER ROLES</span>
              <h2 className="font-display text-4xl font-bold text-ice mb-6">Where You&apos;ll Land</h2>
              <div className="space-y-3">
                {program.targetRoles.map((role) => (
                  <div key={role} className="glass-card border border-gold/15 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <i className="ri-shield-user-line text-gold" />
                    </div>
                    <span className="font-sans text-ice text-base font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-gold text-xs tracking-widest mb-3 block">PROGRAM HIGHLIGHTS</span>
              <div className="space-y-3">
                {program.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <i className="ri-check-line text-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-steel text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Acumen strip */}
        <div className="mt-20 reveal-element">
          <div className="text-center mb-10">
            <p className="font-mono text-gold text-xs tracking-widest mb-3">WHY ACUMEN FOR SECURITY+</p>
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-ice">
              Faster. Cheaper. More Hands-On.
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyAcumen.map((item, i) => (
              <div
                key={item.title}
                className="glass-card gold-border-glow p-6 rounded-2xl flex flex-col gap-3 reveal-element"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-gold/30 bg-gold/8">
                  <i className={`${item.icon} text-gold text-xl`} />
                </div>
                <p className="font-display font-bold text-ice text-base">{item.title}</p>
                <p className="font-sans text-steel text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison callout */}
        <div className="mt-10 reveal-element">
          <div className="relative rounded-2xl overflow-hidden border border-gold/20">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10 text-center">
              {[
                { label: 'National Bootcamp', value: '$10,000–$15,000+', sub: '6–12 months', highlight: false },
                { label: 'Community College', value: '$20,000+', sub: '1–2 years', highlight: false },
                { label: 'Acumen Practitioner', value: '$6,725', sub: '12 weeks · live instructor', highlight: true },
              ].map((item) => (
                <div key={item.label} className={`px-8 py-7 flex flex-col items-center gap-2 ${item.highlight ? 'bg-gold/5' : 'bg-navy-900'}`}>
                  <p className={`font-display font-bold text-2xl ${item.highlight ? 'text-gold' : 'text-ice/40'}`}>{item.value}</p>
                  <p className={`font-sans text-sm font-semibold ${item.highlight ? 'text-ice' : 'text-ice/40'}`}>{item.label}</p>
                  <p className={`font-mono text-xs ${item.highlight ? 'text-steel' : 'text-steel/30'}`}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
