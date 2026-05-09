import Link from "next/link";

export const metadata = {
  title: "How to Care for Your Garage Floor Coating | Summit Garage Floors",
  description: "Complete maintenance guide for polyaspartic and epoxy garage floor coatings. Cleaning tips, Montana winter care, and long-term maintenance.",
};

export default function CarePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          ← Back to Guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Maintenance</span>
        </div>

        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          How to Care for Your<br /><em className="italic text-[#C8A96E]">Garage Floor Coating</em>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          A professionally installed polyaspartic floor is one of the lowest-maintenance surfaces you can have. A little routine care keeps it looking showroom-perfect for decades.
        </p>

        <div className="space-y-12 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Daily & Weekly Cleaning</h2>
            <div className="space-y-3">
              {[
                { title: "Sweep or dust mop regularly", desc: "A soft-bristle broom or microfiber dust mop removes grit that can scratch the surface. In Montana, especially important during winter when road salt and gravel get tracked in on tires." },
                { title: "Clean spills immediately", desc: "Your polyaspartic coating resists oil, gasoline, brake fluid, antifreeze, and most chemicals — but wipe spills promptly. For oil or grease, use a paper towel to absorb, then clean with mild detergent." },
                { title: "Rinse with water", desc: "A garden hose or bucket of clean water handles most cleaning. The sealed surface rinses clean quickly without absorbing water." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                  <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                  <div>
                    <div className="text-white text-sm font-medium mb-1">{item.title}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Monthly Deep Cleaning</h2>
            <p>Use a pH-neutral cleaner diluted in warm water. Mop and rinse thoroughly.</p>
            <div className="mt-4 p-4 border border-red-500/20 bg-red-500/[0.03] rounded-sm">
              <div className="text-red-400 text-xs font-medium mb-2 uppercase tracking-wider">Avoid These</div>
              <div className="space-y-1">
                {[
                  "Soap-based cleaners that leave residue",
                  "Acidic cleaners (vinegar, citrus-based)",
                  "Harsh alkaline cleaners at high concentration",
                  "Steel wool or abrasive scrubbers",
                ].map((item) => (
                  <div key={item} className="text-gray-500 text-xs flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Montana-Specific Tips</h2>
            <div className="space-y-3">
              {[
                { title: "Road salt season (Nov–Apr)", desc: "Road salt is corrosive to concrete but your polyaspartic coating protects completely. Rinse the floor regularly during winter. When temperatures are above freezing, hose down and push water out the garage door." },
                { title: "Hot tire pickup",
