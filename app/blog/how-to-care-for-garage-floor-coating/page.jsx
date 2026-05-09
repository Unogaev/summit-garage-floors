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
          Back to Guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Maintenance</span>
        </div>

        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          How to Care for Your
          <br />
          <em className="italic text-[#C8A96E]">Garage Floor Coating</em>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          A professionally installed polyaspartic floor is one of the lowest-maintenance surfaces you can have. A little routine care keeps it looking showroom-perfect for decades.
        </p>

        <div className="space-y-12 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Daily and Weekly Cleaning</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Sweep or dust mop regularly</div>
                  <p className="text-gray-500 text-xs leading-relaxed">A soft-bristle broom or microfiber dust mop removes grit that can scratch the surface. In Montana, especially important during winter when road salt and gravel get tracked in on tires.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Clean spills immediately</div>
                  <p className="text-gray-500 text-xs leading-relaxed">Your polyaspartic coating resists oil, gasoline, brake fluid, antifreeze, and most chemicals. For oil or grease, use a paper towel to absorb, then clean with mild detergent.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Rinse with water</div>
                  <p className="text-gray-500 text-xs leading-relaxed">A garden hose or bucket of clean water handles most cleaning. The sealed surface rinses clean quickly without absorbing water.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Monthly Deep Cleaning</h2>
            <p>Use a pH-neutral cleaner diluted in warm water. Mop and rinse thoroughly.</p>
            <div className="mt-4 p-4 border border-red-500/20 bg-red-500/[0.03] rounded-sm">
              <div className="text-red-400 text-xs font-medium mb-2 uppercase tracking-wider">Avoid These</div>
              <div className="space-y-1">
                <div className="text-gray-500 text-xs flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />Soap-based cleaners that leave residue</div>
                <div className="text-gray-500 text-xs flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />Acidic cleaners like vinegar or citrus-based</div>
                <div className="text-gray-500 text-xs flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />Harsh alkaline cleaners at high concentration</div>
                <div className="text-gray-500 text-xs flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />Steel wool or abrasive scrubbers</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Montana-Specific Tips</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Road salt season Nov through Apr</div>
                  <p className="text-gray-500 text-xs leading-relaxed">Road salt is corrosive to concrete but your polyaspartic coating protects completely. Rinse the floor regularly during winter when temperatures are above freezing.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Hot tire pickup</div>
                  <p className="text-gray-500 text-xs leading-relaxed">This is a common failure with inferior epoxy coatings. Our polyaspartic topcoat is specifically formulated to resist hot tire pickup. You will not have this problem.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Snow melt and mud</div>
                  <p className="text-gray-500 text-xs leading-relaxed">Park wet vehicles without worry. The surface is impermeable — water, mud, and snow melt sit on top and can be swept or mopped up easily.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Long-Term Care</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Inspect annually</div>
                  <p className="text-gray-500 text-xs leading-relaxed">Once a year, look for any chips or areas where the coating has lifted. Small issues addressed early prevent larger problems.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border border-white/[0.07] rounded-sm">
                <div className="w-1 bg-[#C8A96E] rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium mb-1">Topcoat refresh after 15 plus years</div>
                  <p className="text-gray-500 text-xs leading-relaxed">After 15-20 years of heavy use, you may choose to have a fresh topcoat applied. Significantly less expensive than full reinstallation and restores the original gloss.</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-16 p-8 border border-[#C8A96E]/20 rounded-sm bg-[#C8A96E]/[0.03]">
          <div className="font-serif text-2xl text-white font-light mb-2">Ready to Install?</div>
          <p className="text-gray-500 text-sm mb-6">Free on-site estimate · 1-2 day install · Lifetime warranty</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+14062824033" className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-black px-8 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-white transition-all text-center">
              Call (406) 282-4033
            </a>
            <a href="mailto:hello@summitgaragefloors.com" className="text-[11px] tracking-[0.16em] uppercase border border-white/20 text-white px-8 py-4 rounded-sm hover:border-[#C8A96E] transition-all text-center">
              Email Us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.07]">
          <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
            Back to all guides
          </Link>
        </div>

      </div>
    </main>
  );
}
