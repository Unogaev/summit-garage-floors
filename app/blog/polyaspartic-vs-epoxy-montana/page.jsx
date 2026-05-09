import Link from "next/link";

export const metadata = {
  title: "Polyaspartic vs Epoxy Garage Floor Montana | Summit Garage Floors",
  description: "Honest comparison of polyaspartic and epoxy garage floor coatings for Montana homes. Which system lasts longer and is worth the cost.",
};

export default function PolyasparticVsEpoxyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          Back to Guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Guide</span>
        </div>

        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          Polyaspartic vs Epoxy
          <br />
          <em className="italic text-[#C8A96E]">A Montana Perspective</em>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          Both systems work. The right choice depends on your budget, usage, and how long you want the floor to last.
        </p>

        <div className="space-y-12 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">The Short Answer</h2>
            <div className="p-6 border border-[#C8A96E]/20 bg-[#C8A96E]/[0.03] rounded-sm">
              <p>For a Montana garage that sees real use, <span className="text-white font-medium">polyaspartic is the better system</span>. It costs more upfront but lasts significantly longer and performs better in cold climates.</p>
              <p className="mt-3">For a climate-controlled, lightly-used garage with a tighter budget, epoxy is a reasonable choice.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Performance Comparison</h2>
            <div className="space-y-2">
              {[
                { feature: "Cost installed", epoxy: "$4-$7/sq ft", poly: "$7-$12/sq ft" },
                { feature: "Cure time", epoxy: "3-7 days", poly: "1 day" },
                { feature: "UV stability", epoxy: "Yellows over time", poly: "100% UV stable" },
                { feature: "Hot tire resistance", epoxy: "Moderate", poly: "Excellent" },
                { feature: "Cold temperature", epoxy: "Can crack", poly: "Flexible bond" },
                { feature: "Lifespan", epoxy: "5-10 years", poly: "15-20+ years" },
                { feature: "Warranty", epoxy: "None", poly: "Lifetime" },
              ].map((row) => (
                <div key={row.feature} className="grid grid-cols-3 gap-4 py-3 border-b border-white/[0.07]">
                  <span className="text-gray-400">{row.feature}</span>
                  <span className="text-gray-500">{row.epoxy}</span>
                  <span className="text-[#C8A96E]">{row.poly}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Why Epoxy Fails in Montana</h2>
            <p>Standard epoxy contains aromatic compounds that react with UV light and turn yellow within a single season. A white or light gray floor becomes amber-tinted and looks dirty even when clean.</p>
            <p className="mt-4">Montana garages can swing 50-70 degrees in a single day during spring and fall. Rigid epoxy does not flex well with this movement and can crack or delaminate from the concrete over time.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Why Polyaspartic Costs More</h2>
            <p>The material cost is higher, and professional application requires specialized equipment and training. The higher price reflects both better materials and more demanding installation requirements.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Our Recommendation</h2>
            <p>For Summit Garage Floors clients across Montana, we install polyaspartic systems exclusively. The performance difference is significant, the warranty is lifetime, and the finished result looks better and lasts longer.</p>
          </section>

        </div>

        <div className="mt-16 p-8 border border-[#C8A96E]/20 rounded-sm bg-[#C8A96E]/[0.03]">
          <div className="font-serif text-2xl text-white font-light mb-2">Get a Free Estimate</div>
          <p className="text-gray-500 text-sm mb-6">We visit your property and give you an honest recommendation. No pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+17867085686" className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-black px-8 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-white transition-all text-center">
              Call (786) 708-5686
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
