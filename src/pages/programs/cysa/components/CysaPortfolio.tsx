const deliverables = [
  {
    num: '01',
    icon: 'ri-file-text-line',
    title: 'Written Investigation Reports',
    desc: 'You write structured incident investigation reports documenting the full timeline, affected assets, attacker TTPs, evidence chain, and recommended remediation. The kind of artifact a hiring manager can actually read - not a quiz score.',
    tags: ['TheHive', 'Splunk', 'MITRE ATT&CK'],
  },
  {
    num: '02',
    icon: 'ri-code-s-slash-line',
    title: 'Three Original Detection Rules',
    desc: 'You write three original Sigma detection rules - each targeting a different ATT&CK tactic. Not copy-paste from a repo. You understand the logic, the data source, and why the rule fires. These go straight into your portfolio.',
    tags: ['Sigma', 'MITRE ATT&CK', 'Splunk'],
  },
  {
    num: '03',
    icon: 'ri-flow-chart',
    title: 'Multi-Source SOAR Workflow',
    desc: 'You build a working SOAR automation workflow in n8n that ingests alerts from multiple sources, enriches indicators, and routes cases to TheHive. Not a diagram - an actual running workflow you can demo to any employer.',
    tags: ['n8n', 'TheHive', 'Splunk'],
  },
  {
    num: '04',
    icon: 'ri-archive-drawer-line',
    title: 'Case Management Evidence',
    desc: 'You manage real cases end-to-end in TheHive - from initial alert triage through evidence collection, task assignment, and formal closure. Your case history is exportable, reviewable, and shows exactly how you work.',
    tags: ['TheHive', 'Chainsaw', 'Wireshark'],
  },
];

const tools = [
  { name: 'Splunk', role: 'SIEM & Log Analysis', icon: 'ri-bar-chart-box-line' },
  { name: 'Sigma', role: 'Detection Rules', icon: 'ri-code-s-slash-line' },
  { name: 'Wireshark', role: 'Network Traffic', icon: 'ri-radar-line' },
  { name: 'TheHive', role: 'Case Management', icon: 'ri-archive-drawer-line' },
  { name: 'n8n', role: 'SOAR Automation', icon: 'ri-flow-chart' },
  { name: 'Chainsaw', role: 'Log Forensics', icon: 'ri-search-eye-line' },
];

export default function CysaPortfolio() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-element">
          <p className="font-mono text-gold text-xs tracking-widest mb-3">WHAT YOU&apos;LL BUILD</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ice mb-5 leading-tight">
            Where Competitors Hand You a Certificate,<br />
            <span className="gold-text">We Hand You Evidence.</span>
          </h2>
          <p className="font-sans text-steel text-base leading-relaxed max-w-2xl mx-auto">
            Every Cyber Ops student produces four verifiable artifacts that prove real skill to any hiring manager.
            These aren&apos;t homework assignments - they&apos;re the kind of work you&apos;d do on the job.
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {deliverables.map((d, i) => (
            <div
              key={d.num}
              className="glass-card gold-border-glow rounded-2xl p-7 flex flex-col gap-5 program-card-hover reveal-element"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-gold/30 bg-gold/8 shrink-0">
                  <i className={`${d.icon} text-gold text-xl`} />
                </div>
                <div>
                  <p className="font-mono text-gold/60 text-xs tracking-widest mb-1">DELIVERABLE {d.num}</p>
                  <h3 className="font-display text-xl font-bold text-ice leading-snug">{d.title}</h3>
                </div>
              </div>
              <p className="font-sans text-steel text-sm leading-relaxed">{d.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gold/10">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-gold/8 border border-gold/20 text-gold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools section */}
        <div className="glass-card border border-gold/15 rounded-2xl p-8 mb-10 reveal-element">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="lg:w-1/3 shrink-0">
              <p className="font-mono text-gold text-xs tracking-widest mb-3">TOOLS FROM DAY ONE</p>
              <h3 className="font-display text-2xl font-bold text-ice leading-snug mb-2">
                No Simulations.<br />No Toy Environments.
              </h3>
              <p className="font-sans text-steel text-sm leading-relaxed">
                From the first session, you&apos;re working in the same platforms SOC analysts use every shift.
                Not sandboxed demos - real tools, real scenarios.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/8 bg-white/2 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-gold/20 bg-gold/5">
                    <i className={`${tool.icon} text-gold text-lg`} />
                  </div>
                  <p className="font-display font-bold text-ice text-sm text-center">{tool.name}</p>
                  <p className="font-mono text-steel/50 text-xs text-center leading-tight">{tool.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom value callout */}
        <div className="reveal-element">
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/10 text-center">
              {[
                {
                  icon: 'ri-time-line',
                  label: '8 Weeks',
                  sub: 'Where competitors take 6–12 months',
                  highlight: false,
                },
                {
                  icon: 'ri-price-tag-3-line',
                  label: '$4,725 Total',
                  sub: 'Where they charge $10,000–$15,000+',
                  highlight: false,
                },
                {
                  icon: 'ri-folder-chart-line',
                  label: 'Portfolio on Graduation',
                  sub: 'Where they hand you a certificate, we hand you evidence',
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`px-8 py-8 flex flex-col items-center gap-3 ${item.highlight ? 'bg-gold/5' : ''}`}
                >
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full border ${item.highlight ? 'border-gold/30 bg-gold/10' : 'border-white/10 bg-white/3'}`}>
                    <i className={`${item.icon} text-lg ${item.highlight ? 'text-gold' : 'text-steel/50'}`} />
                  </div>
                  <p className={`font-display font-bold text-lg ${item.highlight ? 'text-gold' : 'text-ice/50'}`}>
                    {item.label}
                  </p>
                  <p className={`font-sans text-xs leading-relaxed max-w-[180px] ${item.highlight ? 'text-steel' : 'text-steel/30'}`}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
