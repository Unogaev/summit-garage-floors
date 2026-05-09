import Link from "next/link";

export const metadata = {
  title: "Garage Floor Coating Whitefish MT | Summit Garage Floors",
  description: "Premium polyaspartic garage floor coatings for Whitefish and Flathead Valley luxury homes. UV-stable systems built for Northwest Montana winters.",
};

export default function WhitefishPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <Link href="/blog" className="text-[#C8A96E] text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 mb-12 hover:opacity-70 transition-opacity">
          ← Back to Guide
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Whitefish, MT</span>
        </div>

        <h1 className="font-serif font-light text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
          Garage Floor Coating<br /><em className="italic text-[#C8A96E]">in Whitefish, Montana</em>
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-16 max-w-xl">
          Whitefish is home to some of Montana's most spectacular luxury properties — ski-in/ski-out residences, lakefront estates on Whitefish Lake, and custom timber-frame homes throughout the Flathead Valley.
        </p>

        <div className="space-y-12 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Why Whitefish Needs UV-Stable Coatings</h2>
            <p>Western Montana gets significant UV exposure, especially at elevation near the Divide. Standard epoxy coatings yellow badly when exposed to UV — within a year, a white or light gray floor can turn distinctly amber.</p>
            <p className="mt-4">Our polyaspartic topcoat is 100% UV-stable. It will not yellow, fade, or discolor regardless of sun exposure. For Whitefish homes with south-facing garages or large windows, this is critical.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Popular Finishes for Whitefish Homes</h2>
            <div className="space-y-4">
              {[
                { name: "Arctic White", desc: "Bright showroom-white finish. Makes the garage feel like a luxury dealership. Stunning with dark cars and timber-frame aesthetics." },
                { name: "Titanium Blend", desc: "Gray and silver flake — the most versatile choice. Works with any home style and car color." },
                { name: "Midnight Stone", desc: "Black and charcoal flake. Bold and dramatic — the choice for serious car collectors." },
              ].map((f) => (
                <div key={f.name} className="border border-white/[0.07] rounded-sm p-4">
                  <div className="font-serif text-white text-lg mb-1">{f.name}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-white font-light mb-4">Whitefish & Flathead Valley Service Area</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Whitefish","Columbia Falls","Kalispell","Bigfork","Lakeside","Somers","Hungry Horse","West Glacier"].map((city) => (
                <div key={city} className="py-2 px-3 border border-white/[0.07] rounded-sm text-gray-400 text-xs">{city}</div>
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
          <div className="font-serif text-2xl text-white font-light mb-2">Get a Free Estimate in Whitefish</div>
          <p className="text-gray-500 text-sm mb-6">We visit your property, assess your concrete, and give you an honest quote. No pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+17867085686" className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-black px-8 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-white transition-all text-center">Call (786) 708-5686</a>
            <a href="mailto:hello@summitgaragefloors.com" className="text-[11px] tracking-[0.16em] uppercase border border-white/20 text-white px-8 py-4 rounded-sm hover:border-[#C8A96E] transition-all text-center">Email Us</a>
          </div>
