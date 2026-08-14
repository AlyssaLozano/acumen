import { Link } from 'react-router-dom';

const feeBreakdown = [
  { label: 'Program Tuition', value: '$6,500', highlight: true },
  { label: 'Application Fee (Non-Refundable)', value: '$150', highlight: false },
  { label: 'Books & Materials', value: '$75', highlight: false },
  { label: 'CompTIA Security+ Exam Fee', value: 'NOT INCLUDED', highlight: false, warning: true },
];

export default function SecPlusTuition() {
  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal-element">
          <span className="font-mono text-gold text-xs tracking-widest mb-3 block">PROGRAM INVESTMENT</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-4">Tuition &amp; Fees</h2>
          <p className="font-sans text-steel text-base max-w-2xl mx-auto">
            One clear price - no hidden fees. Program length is{' '}
            <strong className="text-ice">240 clock hours</strong> over 12 weeks.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="glass-card gold-border-glow rounded-2xl overflow-hidden reveal-element">
            <div className="px-7 py-5 border-b border-gold/15 flex items-center justify-between bg-gold/5">
              <div>
                <span className="font-mono text-gold text-xs tracking-widest block mb-1">TOTAL PROGRAM COST</span>
                <h3 className="font-display text-xl font-bold text-ice">Cybersecurity Practitioner Program</h3>
                <p className="font-mono text-steel text-xs mt-0.5">One all-inclusive price</p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-bold gold-text">$6,725</p>
                <p className="font-mono text-steel text-xs">total cost</p>
              </div>
            </div>

            <div className="divide-y divide-gold/10">
              {feeBreakdown.map((fee) => (
                <div key={fee.label} className="px-7 py-4 flex items-center justify-between">
                  <span className="font-sans text-steel text-sm">{fee.label}</span>
                  <span
                    className={`font-mono text-sm font-semibold ${
                      fee.warning ? 'text-red-400' : fee.highlight ? 'text-gold' : 'text-ice'
                    }`}
                  >
                    {fee.value}
                  </span>
                </div>
              ))}
              <div className="px-7 py-4 flex items-center justify-between bg-gold/5">
                <span className="font-sans text-ice font-semibold text-sm">Total (excl. exam)</span>
                <span className="font-mono text-gold text-lg font-bold">$6,725</span>
              </div>
            </div>

            <div className="px-7 py-5">
              <p className="font-sans text-steel text-sm leading-relaxed">
                Tuition covers instructional training, hands-on lab activities, and preparation for the CompTIA
                Security+ certification.
              </p>
            </div>
          </div>
        </div>

        {/* Statement on Tuition Structure */}
        <div className="glass-card border border-gold/15 rounded-2xl p-7 mb-8 reveal-element">
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5">
              <i className="ri-information-line text-gold" />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-ice mb-3">Statement on Tuition Structure</h4>
              <p className="font-sans text-steel text-sm leading-relaxed">
                Acumen Career Academy offers a single, transparent price for the Cybersecurity Practitioner Program.
                There are no hidden fees beyond the line items listed above. All fees are due prior to the start of
                your cohort unless a written payment plan is authorized.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers + CTA */}
        <div className="flex flex-col lg:flex-row gap-5 items-start reveal-element">
          <div className="glass-card border border-gold/10 p-5 rounded-xl flex-1">
            <p className="font-mono text-steel text-xs leading-relaxed">
              Exam fees are not included in tuition unless explicitly stated in writing at time of enrollment.
              Acumen Career Academy is not affiliated with, endorsed by, or authorized by CompTIA or Security Blue
              Team. Completion does not guarantee certification attainment or employment. GNPEC authorized institution.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              to="/admissions"
              className="btn-gold px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Apply Now <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-gold px-7 py-3.5 rounded-full text-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Questions About Tuition?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}