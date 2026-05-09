"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const FINISHES = [
  {
    id: "midnight",
    name: "Midnight Stone",
    sub: "Black · Graphite · Silver",
    badge: "Signature",
    swatchFrom: "#1A1A1A",
    swatchTo: "#2E2E2E",
    minP: 7, maxP: 12,
    life: "15–20+ yrs", cure: "~1 hour",
    desc: "Black, graphite, and silver flakes in a polyaspartic system. The signature choice for collector garages and modern luxury homes.",
    layers: [
      { c: "#444", t: "Diamond grind + moisture check" },
      { c: "#777", t: "Polyurea base coat" },
      { c: "#4A4A4A", t: "Black & graphite flake broadcast" },
      { c: "#1A1A1A", t: "UV-stable polyaspartic topcoat" },
    ],
    rgba: (a) => `rgba(30,30,34,${a})`,
    pattern: "flake",
    flakes: ["#888","#AAA","#555","#CCC","#666","#999"],
  },
  {
    id: "granite",
    name: "Granite Luxe",
    sub: "Warm Stone · Neutral Gray",
    badge: "Popular",
    swatchFrom: "#6A6058",
    swatchTo: "#8A8070",
    minP: 7, maxP: 12,
    life: "15–20+ yrs", cure: "~1 hour",
    desc: "A warm stone finish that brings sophistication to modern homes and heated garages. Timeless and clean.",
    layers: [
      { c: "#555", t: "Concrete surface preparation" },
      { c: "#8B7355", t: "Polyurea base coat" },
      { c: "#9A8878", t: "Granite blend flake system" },
      { c: "#6B5E50", t: "Polyaspartic clear topcoat" },
    ],
    rgba: (a) => `rgba(115,105,95,${a})`,
    pattern: "flake",
    flakes: ["#AAA","#998877","#BBB","#887766","#999","#776655"],
  },
  {
    id: "arctic",
    name: "Arctic Concrete",
    sub: "Bright · Clean · Modern",
    badge: "Light",
    swatchFrom: "#B8B4AC",
    swatchTo: "#D8D4CC",
    minP: 7, maxP: 12,
    life: "15–20+ yrs", cure: "~1 hour",
    desc: "A bright clean finish that opens up the space. Perfect for luxury residential garages and showroom floors.",
    layers: [
      { c: "#777", t: "Diamond grind prep" },
      { c: "#DDD", t: "Light polyurea base coat" },
      { c: "#C8C4BC", t: "White & silver flake broadcast" },
      { c: "#E8E4DC", t: "UV polyaspartic topcoat" },
    ],
    rgba: (a) => `rgba(195,191,183,${a})`,
    pattern: "flake",
    flakes: ["#FFF","#EEE","#DDD","#CCC","#E5E5E5","#F0F0F0"],
  },
  {
    id: "ranch",
    name: "Ranch Slate",
    sub: "Warm Gray · Montana Tones",
    badge: "Montana",
    swatchFrom: "#7A7060",
    swatchTo: "#9A9080",
    minP: 7, maxP: 12,
    life: "15–20+ yrs", cure: "~1 hour",
    desc: "Warm gray tones inspired by Montana stone. For mountain homes, ranches, and custom workshops.",
    layers: [
      { c: "#555", t: "Surface prep + crack repair" },
      { c: "#7A7060", t: "Polyurea base coat" },
      { c: "#8A8070", t: "Slate & warm gray flake blend" },
      { c: "#6A6050", t: "Polyaspartic topcoat" },
    ],
    rgba: (a) => `rgba(132,122,106,${a})`,
    pattern: "flake",
    flakes: ["#AAA","#998","#BBB","#887","#999","#AA9"],
  },
  {
    id: "metallic",
    name: "Metallic Luxe",
    sub: "Custom · 3D Effect · Unique",
    badge: "Designer",
    swatchFrom: "#7A6010",
    swatchTo: "#C8960B",
    minP: 9, maxP: 15,
    life: "8–12 yrs", cure: "24–72 hrs",
    desc: "Hand-applied metallic epoxy with a stunning 3D depth. Every floor is a one-of-a-kind piece.",
    layers: [
      { c: "#555", t: "Concrete prep + primer" },
      { c: "#888", t: "Epoxy base layer" },
      { c: "#C8A040", t: "Metallic pigment blend" },
      { c: "#5F5E5A", t: "Urethane protective topcoat" },
    ],
    rgba: (a) => `rgba(178,128,10,${a})`,
    pattern: "metallic",
    flakes: [],
  },
];

function drawCoating(ctx, W, H, alpha, finish) {
  const fy = Math.floor(H * 0.42);
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, fy, W, H - fy);
  ctx.clip();
  if (finish.pattern === "metallic") {
    const g = ctx.createLinearGradient(0, fy, W, H);
    g.addColorStop(0, finish.rgba(alpha));
    g.addColorStop(0.18, `rgba(255,210,70,${(alpha * 0.65).toFixed(2)})`);
    g.addColorStop(0.5, finish.rgba(alpha));
    g.addColorStop(0.82, `rgba(70,45,0,${(alpha * 0.82).toFixed(2)})`);
    g.addColorStop(1, finish.rgba(alpha));
    ctx.fillStyle = g;
    ctx.fillRect(0, fy, W, H - fy);
    for (let i = 0; i < 8; i++) {
      const rx = Math.random() * W;
      const ry = fy + Math.random() * (H - fy);
      const rr = 25 + Math.random() * 100;
      const rg = ctx.createRadialGradient(rx, ry, 0, rx, ry, rr);
      rg.addColorStop(0, `rgba(255,230,130,${(alpha * 0.55).toFixed(2)})`);
      rg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = rg;
      ctx.fillRect(0, fy, W, H - fy);
    }
  } else {
    ctx.fillStyle = finish.rgba(alpha.toFixed(2));
    ctx.fillRect(0, fy, W, H - fy);
    const seed = finish.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const rand = (n, s) => { const x = Math.sin(n * 9301 + s * 49297 + seed) * 93243; return x - Math.floor(x); };
    for (let i = 0; i < 320; i++) {
      const fx = rand(i, 1) * W;
      const fy2 = fy + rand(i, 2) * (H - fy);
      const fw = 2 + rand(i, 3) * 6;
      const fh = 1 + rand(i, 4) * 2.5;
      const fa = rand(i, 5) * Math.PI;
      ctx.save();
      ctx.translate(fx, fy2);
      ctx.rotate(fa);
      ctx.fillStyle = finish.flakes[Math.floor(rand(i, 6) * finish.flakes.length)];
      ctx.globalAlpha = 0.25 + rand(i, 7) * 0.5;
      ctx.fillRect(-fw / 2, -fh / 2, fw, fh);
      ctx.restore();
    }
  }
  ctx.restore();
  ctx.strokeStyle = "rgba(200,169,110,0.18)";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(0, fy);
  ctx.lineTo(W, fy);
  ctx.stroke();
}

export default function FloorVisualizer() {
  const [sel, setSel] = useState("midnight");
  const [camOn, setCamOn] = useState(false);
  const [snapped, setSnapped] = useState(false);
  const [snapData, setSnapData] = useState(null);
  const [resultSrc, setResultSrc] = useState(null);
  const [opacity, setOpacity] = useState(70);
  const [sqft, setSqft] = useState(500);
  const [status, setStatus] = useState("");

  const vidRef = useRef(null);
  const ovRef = useRef(null);
  const snapRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const finish = FINISHES.find((f) => f.id === sel);

  const startLive = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const vid = vidRef.current;
      const ov = ovRef.current;
      if (!vid || !ov || !vid.videoWidth) return;
      ov.width = vid.videoWidth;
      ov.height = vid.videoHeight;
      const ctx = ov.getContext("2d");
      ctx.clearRect(0, 0, ov.width, ov.height);
      const f = FINISHES.find((x) => x.id === sel);
      drawCoating(ctx, ov.width, ov.height, (opacity / 100) * 0.48, f);
    }, 80);
  }, [sel, opacity]);

  useEffect(() => {
    if (camOn && !snapped) startLive();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [camOn, snapped, sel, opacity, startLive]);

  const startCam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (vidRef.current) {
        vidRef.current.srcObject = stream;
        vidRef.current.onloadedmetadata = () => { vidRef.current.play(); setCamOn(true); setStatus("Point camera at your garage floor"); };
      }
    } catch { setStatus("Camera access denied — allow in browser settings."); }
  };

  const takeSnap = () => {
    const vid = vidRef.current;
    const sc = snapRef.current;
    if (!vid || !sc) return;
    sc.width = vid.videoWidth || 1280;
    sc.height = vid.videoHeight || 720;
    sc.getContext("2d").drawImage(vid, 0, 0);
    const data = sc.toDataURL("image/jpeg", 0.93);
    setSnapData(data);
    setSnapped(true);
    if (timerRef.current) clearInterval(timerRef.current);
    applyToSnap(data, finish, opacity);
    setStatus("Photo captured — adjust finish or intensity.");
  };

  const applyToSnap = (data, f, op) => {
    const sc = snapRef.current;
    if (!sc || !data) return;
    const out = document.createElement("canvas");
    out.width = sc.width; out.height = sc.height;
    const ctx = out.getContext("2d");
    const img = new Image();
    img.onload = () => { ctx.drawImage(img, 0, 0); drawCoating(ctx, out.width, out.height, (op / 100) * 0.70, f); setResultSrc(out.toDataURL("image/jpeg", 0.93)); };
    img.src = data;
  };

  useEffect(() => { if (snapped && snapData) applyToSnap(snapData, finish, opacity); }, [sel, opacity]);

  const reset = () => { setSnapped(false); setSnapData(null); setResultSrc(null); setStatus("Point camera at your garage floor"); };
  const download = () => { if (!resultSrc) return; const a = document.createElement("a"); a.href = resultSrc; a.download = `summit-${sel}.jpg`; a.click(); };

  return (
    <section className="bg-[#0A0A09] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">AI Floor Visualizer</span>
        </div>
        <h2 className="font-serif font-light text-4xl md:text-6xl text-[#F5F2EE] leading-[1.06] tracking-tight mb-4">
          See Your Finish <em className="text-[#C8A96E] not-italic italic">Before</em><br />We Install It
        </h2>
        <p className="text-[#6B6860] text-sm leading-relaxed max-w-lg">
          Point your phone at your garage floor and preview any designer finish on your actual space — live, right now.
        </p>
      </div>
      <div className="border-t border-b border-white/[0.07] grid grid-cols-2 md:grid-cols-4">
        {[
          { n: "01", title: "Choose a Finish", sub: "Pick from our designer collection" },
          { n: "02", title: "Enable Camera", sub: "Point at your garage floor" },
          { n: "03", title: "Take a Photo", sub: "Freeze & see the result" },
          { n: "04", title: "Book Estimate", sub: "Private consultation, no pressure" },
        ].map((s, i) => (
          <div key={i} className="px-6 py-5 border-r border-white/[0.07] last:border-r-0">
            <div className="font-serif text-[#C8A96E] text-3xl font-light leading-none mb-2">{s.n}</div>
            <div className="text-[#F5F2EE] text-sm mb-1">{s.title}</div>
            <div className="text-[#6B6860] text-[11px]">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
          <div className="border-r border-white/[0.07]">
            <div className="relative w-full aspect-[4/5] md:aspect-[16/10] bg-[#0D0D0C] overflow-hidden">
              {!camOn && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-8">
                  <div className="w-16 h-16 rounded-full border border-[#C8A96E]/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.5)" strokeWidth="1.2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.18em] uppercase text-[#C8A96E] mb-2">Ready when you are</p>
                    <p className="text-[#6B6860] text-sm leading-relaxed max-w-[200px]">Enable camera to preview any finish on your actual garage floor</p>
                  </div>
                </div>
              )}
              <video ref={vidRef} autoPlay playsInline muted className="w-full h-full object-cover" style={{ display: snapped ? "none" : "block" }} />
              <canvas ref={ovRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ display: snapped ? "none" : "block" }} />
              <canvas ref={snapRef} className="hidden" />
              {resultSrc && <img src={resultSrc} alt="Floor preview" className="absolute inset-0 w-full h-full object-cover" />}
              {camOn && !snapped && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 border border-white/10 px-3 py-1.5 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#9A9690]">Live Preview</span>
                </div>
              )}
              {camOn && (
                <div className="absolute top-4 right-4 bg-black/80 border border-[#C8A96E]/25 px-3 py-1.5 rounded-sm">
                  <span className="font-serif text-[#C8A96E] text-sm">{finish.name}</span>
                </div>
              )}
              {camOn && (
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 px-5 pb-6 pt-10" style={{ background: "linear-gradient(transparent, rgba(10,10,9,0.85))" }}>
                  {snapped && <button onClick={reset} className="text-[10px] tracking-[0.14em] uppercase text-white/50 border border-white/20 px-4 py-2 rounded-sm hover:text-white transition-all">Retake</button>}
                  {!snapped && (
                    <button onClick={takeSnap} className="w-16 h-16 rounded-full bg-[#F5F2EE] flex items-center justify-center active:scale-90 transition-transform">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A09" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5" fill="#0A0A09"/>
                      </svg>
                    </button>
                  )}
                  {snapped && <button onClick={download} className="text-[10px] tracking-[0.14em] uppercase text-white/50 border border-white/20 px-4 py-2 rounded-sm hover:text-white transition-all">Save</button>}
                </div>
              )}
            </div>
            {!camOn && (
              <div className="flex justify-center py-7 border-b border-white/[0.07]">
                <button onClick={startCam} className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-[#0A0A09] px-9 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-[#F5F2EE] transition-all">Enable Camera</button>
              </div>
            )}
            {snapped && (
              <div className="flex items-center gap-4 px-6 py-3.5 border-b border-white/[0.07]">
                <span className="text-[10px] tracking-[0.14em] uppercase text-[#6B6860] whitespace-nowrap">Overlay Intensity</span>
                <input type="range" min={15} max={95} value={opacity} step={1} onChange={(e) => setOpacity(Number(e.target.value))} className="flex-1 accent-[#C8A96E]" />
                <span className="font-serif text-[#C8A96E] text-lg min-w-[36px] text-right">{opacity}%</span>
              </div>
            )}
            {status && <div className="px-6 py-2 text-[11px] text-[#6B6860]">{status}</div>}
          </div>
          <div className="flex flex-col bg-[#111110]">
            <div className="p-5 border-b border-white/[0.07]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#6B6860] mb-4">Designer Finish Collection</div>
              <div className="flex flex-col gap-2">
                {FINISHES.map((f) => (
                  <button key={f.id} onClick={() => setSel(f.id)} className={`flex items-center gap-3 p-3 rounded-sm border text-left transition-all ${f.id === sel ? "border-[#C8A96E] bg-[#C8A96E]/[0.06]" : "border-white/[0.07] hover:border-white/20"}`}>
                    <div className="w-7 h-7 rounded-sm flex-shrink-0" style={{ background: `linear-gradient(160deg, ${f.swatchFrom}, ${f.swatchTo})` }} />
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium leading-tight ${f.id === sel ? "text-[#C8A96E]" : "text-[#F5F2EE]"}`}>{f.name}</div>
                      <div className="text-[11px] text-[#6B6860] mt-0.5">${f.minP}–${f.maxP}/sq ft</div>
                    </div>
                    <span className="text-[9px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-sm flex-shrink-0 bg-[#C8A96E]/10 text-[#C8A96E]">{f.badge}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="p-5 border-b border-white/[0.07]">
              <div className="font-serif text-[#F5F2EE] text-2xl font-light mb-2">{finish.name}</div>
              <div className="text-[#6B6860] text-xs leading-relaxed mb-4">{finish.desc}</div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-[#6B6860] mb-2.5">System Layers</div>
              {finish.layers.map((l, i) => (
                <div key={i} className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: l.c }} />
                  <span className="text-[11px] text-[#6B6860]">{l.t}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 p-5 border-b border-white/[0.07]">
              <div className="bg-[#0A0A09] border border-white/[0.06] rounded-sm p-3">
                <div className="text-[9px] tracking-[0.14em] uppercase text-[#6B6860] mb-1">Lifespan</div>
                <div className="font-serif text-[#C8A96E] text-xl">{finish.life}</div>
              </div>
              <div className="bg-[#0A0A09] border border-white/[0.06] rounded-sm p-3">
                <div className="text-[9px] tracking-[0.14em] uppercase text-[#6B6860] mb-1">Cure Time</div>
                <div className="font-serif text-[#F5F2EE] text-xl">{finish.cure}</div>
              </div>
            </div>
            <div className="p-5 border-b border-white/[0.07]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#6B6860] mb-4">Estimate Calculator</div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] text-[#6B6860] uppercase tracking-wider whitespace-nowrap">Sq Ft</span>
                <input type="range" min={100} max={1400} value={sqft} step={10} onChange={(e) => setSqft(Number(e.target.value))} className="flex-1 accent-[#C8A96E]" />
                <span className="font-serif text-[#F5F2EE] text-base min-w-[72px] text-right">{sqft.toLocaleString()} sq ft</span>
              </div>
              <div className="bg-[#0A0A09] border border-white/[0.06] rounded-sm p-3.5 flex justify-between items-end">
                <div>
                  <div className="text-[9px] tracking-[0.14em] uppercase text-[#6B6860] mb-1">Estimated Investment</div>
                  <div className="font-serif text-[#C8A96E] text-2xl font-light">${(sqft * finish.minP).toLocaleString()} – ${(sqft * finish.maxP).toLocaleString()}</div>
                </div>
                <div className="text-[10px] text-[#6B6860] text-right leading-relaxed">Installed<br/>incl. prep</div>
              </div>
            </div>
            <div className="p-5 mt-auto">
              <a href="#quote" className="block w-full text-center text-[11px] tracking-[0.18em] uppercase py-4 bg-[#C8A96E] text-[#0A0A09] rounded-sm hover:bg-[#8B6E3E] hover:text-[#F5F2EE] transition-all mb-3">Book Private Estimate →</a>
              <div className="text-center text-[10px] text-[#6B6860] leading-relaxed">
                <a href="tel:+17867085686" className="text-[#C8A96E] hover:underline">(786) 708-5686</a>{" · "}
                <a href="mailto:hello@summitgaragefloors.com" className="text-[#C8A96E] hover:underline">hello@summitgaragefloors.com</a>
                <br/>Free estimate · 1–2 day install · Lifetime warranty
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-4 px-6 text-center text-[10px] text-[#6B6860]/60">
        No images are stored or transmitted. Camera stays on your device only.
      </div>
    </section>
  );
}
