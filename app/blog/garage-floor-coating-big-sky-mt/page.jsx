import Link from "next/link";

export const metadata = {
  title: "Garage Floor Coating Big Sky MT | Summit Garage Floors",
  description: "Premium polyaspartic garage floor coatings for Big Sky resort properties and mountain homes. Built for high-altitude Montana conditions.",
};

export default function BigSkyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          ← Back to Guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Big Sky, MT</span>
        </div>

        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          Garage Floor Coating<br /><em className="italic text-[#C8A96E]">in Big Sky, Montana</em>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          Big Sky Resort properties represent some of the most valuable real estate in Montana. A premium garage floor coating protects your investment and transforms the space.
        </p>

        <div className="space-y-12 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">High-Altitude Considerations</h2>
            <p>Big Sky sits at over 7,000 feet at the resort base. Temperature swings are extreme — garage floors can go from below-zero overnight to warm afternoon temperatures in a single day. This thermal cycling destroys inferior coatings.</p>
            <p className="mt-4">Our polyurea base coat is specifically formulated to flex with these temperature changes. Unlike rigid epoxy systems that crack and delaminate, our system bonds permanently to the concrete and moves with it.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Every Big Sky Installation Includes</h2>
            <div className="space-y-3">
              {[
                { title: "Diamond Grinding", desc: "Creates the proper surface profile for maximum coating adhesion." },
                { title: "Moisture Vapor Testing", desc: "Critical at elevation where concrete holds more moisture than expected." },
                { title: "Crack Repair and Leveling", desc: "All cracks and imperfections filled before coating." },
                { title: "Full Polyurea Base Coat", desc: "Flexible, permanent bond to concrete — handles extreme temperature swings." },
                { title: "Designer Finish Layer", desc: "Flake or metallic finish in your choice of color." },
                { title: "UV-Stable Polyaspartic Topcoat", desc: "100% UV stable — will not yellow regardless of sun exposure." },
                { title: "Lifetime Warranty", desc: "Backed for life against defects in materials or installation." },
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
            <h2 className="font-serif text-2xl text-white font-light mb-4">Popular Finishes</h2>
            <div className="space-y-4">
              {[
                { name: "Midnight Stone", desc: "Black and charcoal flake — the dramatic choice for ski chalet garages and collector spaces." },
                { name: "Titanium Blend", desc: "Gray and silver — the versatile choice that works with any mountain home aesthetic." },
                { name: "Gold Metallic", desc: "Hand-applied metallic finish for clients who want something truly extraordinary." },
              ].map((f) => (
                <div key={f.name} className="border border-white/[0.07] rounded-sm p-4">
                  <div className="font-serif text-white text-lg mb-1">{f.name}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Project Pricing</h2>
            <div className="space-y-2">
              {[
                { size: "1-car garage (~200 sq ft)", price: "$1,400 – $2,400" },
                { size: "2-car garage (~480 sq ft)", price: "$3,360 – $5,760" },
                { size: "3-car garage (~720 sq ft)", price: "$5,040 – $8,640" },
                { size: "Oversized / custom", price: "Contact us" },
              ].map((item) => (
                <div key={item.size} className="flex justify-between items-center py-3 border-b border-white/[0.07]">
                  <span className="text-gray-400">{item.size}</span>
                  <span className="font-serif text-[#C8A96E] text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="mt-16 p-8 border border-[#C8A96E]/20 rounded-sm bg-[#C8A96E]/[0.03]">
          <div className="font-serif text-2xl text-white font-light mb-2">Get a Free Estimate in Big Sky</div>
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
