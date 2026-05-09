import Link from "next/link";

export const metadata = {
  title: "Garage Floor Coating FAQ | Summit Garage Floors",
  description: "Answers to the most common questions about garage floor coatings in Montana.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">Back to Guide</Link>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">FAQ</span>
        </div>
        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          Common Questions<br /><em className="italic text-[#C8A96E]">Answered Honestly</em>
        </h1>
        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          Everything homeowners ask before booking an estimate, answered directly and without sales pressure.
        </p>
        <div className="space-y-4">
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">01</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">Is polyaspartic better than epoxy?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">For most residential garages in Montana, yes. Polyaspartic coatings cure faster, are 100% UV-stable, and perform better in temperature extremes. The main trade-off is cost: $2-4 more per square foot than standard epoxy.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">02</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">How long does installation take?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Most residential garages are completed in 1-2 days. Our polyaspartic topcoat cures fast enough that light foot traffic is possible in 4-6 hours, and vehicles return within 24 hours.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">03</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">How much does it cost in Montana?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Our systems run $7-$12 per square foot installed. A typical 2-car garage (480 sq ft) runs $3,360-$5,760 fully installed including surface preparation and crack repair.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">04</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">Can it handle Montana winters?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Yes. Road salt, snow melt, and freeze-thaw cycling from -30F to 90F are all part of Montana winter. Our polyurea base coat bonds permanently to concrete and will not crack or delaminate in cold temperatures.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">05</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">How long will the coating last?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Our polyaspartic systems are warranted for life. Realistically, expect 15-20 plus years before any significant wear with normal residential use and basic maintenance.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">06</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">Can you coat a floor with cracks?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Yes. Minor cracks are filled and repaired during surface preparation. The finished coating is seamless over the repaired surface.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">07</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">Do you offer a warranty?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">Yes, lifetime warranty on every installation. If the coating fails due to a defect in materials or installation, we make it right at no cost.</p>
              </div>
            </div>
          </div>
          <div className="border border-white/[0.07] rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="font-serif text-[#C8A96E] text-lg flex-shrink-0">08</span>
              <div>
                <h2 className="font-serif text-white text-lg font-light mb-3">What areas of Montana do you serve?</h2>
                <p className="text-gray-500 text-sm leading-relaxed">We serve luxury properties across Montana including Bozeman, Whitefish, Big Sky, Missoula, Helena, Billings, Livingston, Kalispell, and surrounding areas.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 p-8 border border-[#C8A96E]/20 rounded-sm bg-[#C8A96E]/[0.03]">
          <div className="font-serif text-2xl text-white font-light mb-2">Still have questions?</div>
          <p className="text-gray-500 text-sm mb-6">Call or email us directly. We give straight answers, no sales pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+17867085686" className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-black px-8 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-white transition-all text-center">Call (786) 708-5686</a>
            <a href="mailto:hello@summitgaragefloors.com" className="text-[11px] tracking-[0.16em] uppercase border border-white/20 text-white px-8 py-4 rounded-sm hover:border-[#C8A96E] transition-all text-center">Email Us</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/[0.07]">
          <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Back to all guides</Link>
        </div>
      </div>
    </main>
  );
}
