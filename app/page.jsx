"use client";
import FloorVisualizer from "./FloorVisualizer";
const cities = [
  "Bozeman", "Billings", "Missoula", "Whitefish",
  "Helena", "Kalispell", "Big Sky", "Livingston",
];

const finishes = [
  { name: "Midnight Stone", desc: "Black, graphite, and silver flakes for a luxury performance garage." },
  { name: "Granite Luxe", desc: "A premium stone finish for modern homes and heated garages." },
  { name: "Arctic Concrete", desc: "A bright, clean designer finish for luxury residential garages." },
  { name: "Ranch Slate", desc: "Warm gray tones for mountain homes, ranches, and custom workshops." },
];

const faqs = [
  { q: "Is polyaspartic better than epoxy?", a: "For premium garage projects, polyaspartic systems are often preferred because they cure faster, resist UV yellowing better, and deliver a high-end durable finish." },
  { q: "How long does installation take?", a: "Most standard garage floor coating projects can be completed in 1–2 days depending on concrete condition, repairs, square footage, temperature, and selected finish." },
  { q: "Can it handle Montana winters?", a: "Yes. Our coating systems are designed for real garage use: trucks, snow melt, road salt, mud, tools, tires, and daily traffic." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em]">SUMMIT GARAGE FLOORS</div>
            <div className="mt-1 text-xs text-gray-400">Luxury Garage Floor Systems</div>
          </div>
          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#finishes">Finishes</a>
            <a href="#process">Process</a>
            <a href="#pricing">Pricing</a>
            <a href="#quote">Estimate</a>
            <a href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">Guide</a>
          </nav>
          <a href="#quote" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">Book Estimate</a>
        </div>
      </header>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">Premium Montana Coatings</p>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">Garage Floors Built for Montana's Finest Homes</h1>
            <p className="mt-8 text-xl leading-relaxed text-gray-300">Premium polyaspartic and designer flake garage floor coatings for luxury homes, custom garages, car collections, mountain properties, and high-end workshops.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#quote" className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-black">Book Private Estimate</a>
              <a href="#finishes" className="rounded-2xl border border-white/30 px-8 py-4 text-center">Explore Designer Finishes</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-bold">1–2</div><div className="text-xs text-gray-400">Day Install</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-bold">UV</div><div className="text-xs text-gray-400">Stable Finish</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-bold">MT</div><div className="text-xs text-gray-400">Weather Ready</div></div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img src="/hero.png" alt="Luxury Montana Garage" className="h-[520px] w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Built for premium properties</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Your garage should match the quality of your home.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {["Luxury Homes","Collector Garages","Mountain Properties","Custom Workshops"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-xl font-semibold">{item}</div>
                <p className="mt-4 text-sm text-gray-400">A premium floor system designed to feel intentional, clean, durable, and architecturally finished.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="finishes" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Designer Finish Collection</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Premium finishes, not basic colors.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {finishes.map((finish) => (
              <div key={finish.name} className="overflow-hidden rounded-3xl bg-white text-black">
                <div className="h-36 bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-200" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{finish.name}</h3>
                  <p className="mt-3 text-sm text-gray-600">{finish.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Our Work</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">See the difference.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <img src="/gallery-1.png" alt="Gallery 1" className="rounded-3xl w-full h-64 object-cover" />
            <img src="/gallery-1.png" alt="Gallery 2" className="rounded-3xl w-full h-64 object-cover" />
            <img src="/gallery-1.png" alt="Gallery 3" className="rounded-3xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10 bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">Our Process</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">A premium result starts with preparation.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-5">
            {["Private Consultation","Diamond Grinding","Concrete Repair","Designer Flake System","Clear Protective Coat"].map((step, i) => (
              <div key={step} className="rounded-3xl border border-black/10 bg-gray-50 p-6">
                <div className="text-3xl font-bold">0{i + 1}</div>
                <div className="mt-4 font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Premium Project Pricing</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Built for quality, not the lowest bid.</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">Every garage is different. Pricing depends on square footage, concrete condition, crack repair, moisture, finish selection, and project complexity.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 text-black">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-500">Typical premium range</div>
            <div className="mt-4 text-5xl font-bold">$6–$12+</div>
            <div className="mt-2 text-gray-600">per sq. ft.</div>
            <div className="mt-8 space-y-3 text-gray-700">
              <p>• Luxury polyaspartic systems</p>
              <p>• Designer flake finish</p>
              <p>• Concrete preparation and repair</p>
              <p>• Custom quote after project review</p>
            </div>
          </div>
        </div>
      </section>

      <FloorVisualizer />
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Serving Montana</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Premium garage floor coatings for Montana luxury homes.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="rounded-2xl border border-white/10 bg-white/5 p-5">{city}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white px-6 py-20 text-black">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Questions premium homeowners ask.</h2>
          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-black/10 bg-gray-50 p-6">
                <h3 className="text-xl font-bold">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Private Estimate</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Tell us about your garage.</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">Send your city, garage size, and a few photos. We'll help you choose a premium finish and estimate the right system for your home.</p>
            <div className="mt-8 text-gray-400">
              Call/Text: <span className="text-white">(406) 282-4033</span><br />
              Email: <span className="text-white">hello@summitgaragefloors.com</span>
            </div>
          </div>
          <form className="space-y-4 rounded-3xl bg-white p-8 text-black">
            <input className="w-full rounded-xl border p-4" placeholder="Name" />
            <input className="w-full rounded-xl border p-4" placeholder="Phone" />
            <input className="w-full rounded-xl border p-4" placeholder="City" />
            <input className="w-full rounded-xl border p-4" placeholder="Garage size, e.g. 2-car / 800 sq ft" />
            <textarea className="min-h-32 w-full rounded-xl border p-4" placeholder="Tell us about your project" />
            <button className="w-full rounded-xl bg-black p-4 font-semibold text-white">Request Private Estimate</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-gray-500">
        © 2026 Summit Garage Floors. Luxury garage floor coating systems for premium Montana homes.
      </footer>
    {/* Floating CTA */}
<div className="fixed bottom-6 right-6 z-50">
  <button
    onClick={() => document.getElementById('float-form').classList.toggle('hidden')}
    className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-black shadow-2xl"
  >
    Get Free Quote
  </button>
  <div id="float-form" className="hidden absolute bottom-16 right-0 w-80 rounded-3xl bg-zinc-900 border border-white/10 p-6 shadow-2xl">
    <div className="text-lg font-bold mb-1">Get a Free Estimate</div>
    <p className="text-xs text-gray-400 mb-4">We'll respond within 1 business day.</p>
    <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3 text-sm text-white placeholder-gray-500 mb-3" placeholder="Your Name" />
    <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3 text-sm text-white placeholder-gray-500 mb-3" placeholder="Phone Number" />
    <input className="w-full rounded-xl bg-white/10 border border-white/10 p-3 text-sm text-white placeholder-gray-500 mb-4" placeholder="Garage size, e.g. 800 sq ft" />
    <button className="w-full rounded-xl bg-white py-3 text-sm font-bold text-black">Send Request</button>
  </div>
</div></main>
  );
}
