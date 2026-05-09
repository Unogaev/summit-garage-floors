import Link from "next/link";

export const metadata = {
  title: "Garage Floor Coating Guide | Summit Garage Floors",
  description: "Expert guides on garage floor coatings for Montana homes. Polyaspartic vs epoxy, care tips, cost guides, and city-specific information.",
};

const posts = [
  {
    slug: "garage-floor-coating-bozeman-mt",
    title: "Garage Floor Coating in Bozeman, MT",
    desc: "Premium polyaspartic and epoxy systems for Bozeman luxury homes. What works in Montana's climate and why.",
    tag: "Bozeman",
    date: "May 2026",
  },
  {
    slug: "garage-floor-coating-whitefish-mt",
    title: "Garage Floor Coating in Whitefish, MT",
    desc: "UV-stable polyaspartic systems for Whitefish and Flathead Valley luxury properties.",
    tag: "Whitefish",
    date: "May 2026",
  },
  {
    slug: "garage-floor-coating-big-sky-mt",
    title: "Garage Floor Coating in Big Sky, MT",
    desc: "High-altitude garage floor coatings for Big Sky resort properties and mountain homes.",
    tag: "Big Sky",
    date: "May 2026",
  },
  {
    slug: "polyaspartic-vs-epoxy-montana",
    title: "Polyaspartic vs Epoxy: A Montana Perspective",
    desc: "Honest comparison of both systems for Montana's climate. Which lasts longer, which is worth the cost.",
    tag: "Guide",
    date: "May 2026",
  },
  {
    slug: "how-to-care-for-garage-floor-coating",
    title: "How to Care for Your Garage Floor Coating",
    desc: "Complete maintenance guide. Road salt, Montana winters, cleaning tips, and long-term care.",
    tag: "Maintenance",
    date: "May 2026",
  },
  {
    slug: "garage-floor-coating-faq",
    title: "Garage Floor Coating FAQ",
    desc: "Answers to the most common questions about cost, installation time, warranties, and Montana winters.",
    tag: "FAQ",
    date: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Resources</span>
        </div>

        <h1 className="font-serif font-light text-5xl md:text-7xl text-white leading-[1.06] tracking-tight mb-6">
          The Floor<br /><em className="italic text-[#C8A96E]">Coating Guide</em>
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-16">
          Everything you need to know about premium garage floor coatings for Montana homes — from choosing the right system to maintaining it for decades.
        </p>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group flex items-start justify-between gap-6 p-6 border border-white/[0.07] rounded-sm hover:border-[#C8A96E]/40 hover:bg-[#C8A96E]/[0.03] transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] tracking-[0.14em] uppercase px-2 py-0.5 bg-[#C8A96E]/10 text-[#C8A96E] rounded-sm">{post.tag}</span>
                  <span className="text-[11px] text-gray-600">{post.date}</span>
                </div>
                <h2 className="font-serif text-xl text-white font-light mb-2 group-hover:text-[#C8A96E] transition-colors">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">{post.desc}</p>
              </div>
              <div className="text-[#C8A96E] text-xl mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">→</div>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-serif text-xl mb-1">Ready to transform your garage?</p>
            <p className="text-gray-500 text-sm">Free on-site estimate · 1–2 day install · Lifetime warranty</p>
          </div>
          <a href="#quote"
            className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-black px-8 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-white transition-all whitespace-nowrap">
            Book Estimate →
          </a>
        </div>
      </div>
    </main>
  );
}
