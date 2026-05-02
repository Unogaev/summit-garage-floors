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
            <img src="/images/hero.jpg" alt="Luxury Montana Garage" className="h-[520px] w-full rounded-[1.5rem] object-cover" />
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
