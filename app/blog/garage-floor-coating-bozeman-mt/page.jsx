import Link from "next/link";

export const metadata = {
  title: "Garage Floor Coating Bozeman MT | Summit Garage Floors",
  description: "Premium polyaspartic and epoxy garage floor coatings for Bozeman luxury homes. Built for Montana winters. Free on-site estimate.",
};

export default function BozemanPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          ← Back to Guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Bozeman, MT</span>
        </div>

        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          Garage Floor Coating<br /><em className="italic text-[#C8A96E]">in Bozeman, Montana</em>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          Bozeman is one of the fastest-growing luxury real estate markets in the American West. Custom homes in the Gallatin Valley deserve a garage floor that matches.
        </p>

        <div className="space-y-12 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">The Bozeman Climate Challenge</h2>
            <p>At 4,800 feet elevation, Bozeman sees real winter. Temperatures drop below zero, road salt gets tracked in from November through April, and the freeze-thaw cycle is brutal on untreated concrete. Standard big-box epoxy kits simply were not designed for this.</p>
            <p className="mt-4">Our polyaspartic system is 100% UV-stable, flexible enough to handle Montana temperature swings, and chemically resistant to road salt and vehicle fluids unavoidable in a Bozeman garage.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Popular Finishes for Bozeman Homes</h2>
            <div className="space-y-4">
              {[
                { name: "Titanium Blend", desc: "Gray, silver, and white flake. The most popular choice for modern Bozeman homes. Works with any car color and complements the mountain aesthetic." },
                { name: "Midnight Stone", desc: "Black and charcoal flake. The signature choice for collector garages and luxury properties. Dramatic and timeless." },
                { name: "Desert Sandstone", desc: "Warm tan and beige tones. Popular for ranch properties and mountain homes that want warmth rather than cool grays." },
              ].map((f) => (
                <div key={f.name} className="border border-white/[0.07] rounded-sm p-4">
                  <div className="font-serif text-white text-lg mb-1">{f.name}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Bozeman Project Pricing</h2>
            <div className="space-y-2">
              {[
                { size: "1-car garage (~200 sq ft)", price: "$1,400 – $2,400" },
                { size: "2-car garage (~480 sq ft)", price: "$3,360 – $5,760" },
                { size: "3-car garage (~720 sq ft)", price: "$5,040 – $8,640" },
              ].map((item) => (
                <div key={item.size} className="flex justify-between items-center py-3 border-b border-white/[0.07]">
                  <span className="text-gray-400">{item.size}</span>
                  <span className="font-serif text-[#C8A96E] text-lg">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-xs">Includes surface prep, crack repair, base coat, flake broadcast, and polyaspartic topcoat.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Why Polyaspartic Outperforms Epoxy in Bozeman</h2>
            <div className="space-y-3">
              {[
                { title: "UV Stability", desc: "Standard epoxy yellows in Montana sun within one season. Polyaspartic is 100% UV-stable and will not discolor." },
                { title: "Freeze-Thaw Performance", desc: "Our flexible polyurea base coat handles Bozeman temperature swings without cracking or delaminating." },
                { title: "1-Day Installation", desc: "Polyaspartic cures in hours. Your vehicles are back in the garage the same day or next morning." },
                { title: "Lifetime Warranty", desc: "Every Summit installation is backed by a lifetime warranty." },
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

        </div>

        <div className="mt-16 p-8 border border-[#C8A96E]/20 rounded-sm bg-[#C8A96E]/[0.03]">
          <div className="font-serif text-2xl text-white font-light mb-2">Get a Free Estimate in Bozeman</div>
          <p className="text-gray-500 text-sm mb-6">We visit your property, assess your concrete, and give you an honest quote. No pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+14062824033" className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-black px-8 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-white transition-all text-center">Call (786) 708-5686</a>
            <a href="mailto:hello@summitgaragefloors.com" className="text-[11px] tracking-[0.16em] uppercase border border-white/20 text-white px-8 py-4 rounded-sm hover:border-[#C8A96E] transition-all text-center">Email Us</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.07]">
          <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">← Back to all guides</Link>
        </div>

      </div>
    </main>
  );
}
