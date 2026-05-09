"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const FINISHES = [
  {
    id: "midnight", name: "Midnight Stone", sub: "Black · Charcoal · Silver flake", badge: "Signature",
    swatchFrom: "#1C1C1C", swatchTo: "#3A3A3A", minP: 7, maxP: 12, life: "15–20+ yrs", cure: "~1 hour",
    desc: "Full-broadcast black and charcoal flake on a dark base. The go-to for exotic car collections and modern luxury garages.",
    layers: [{ c: "#333", t: "Diamond grind + moisture barrier" },{ c: "#555", t: "Dark polyurea base coat" },{ c: "#888", t: "Black & charcoal flake broadcast" },{ c: "#222", t: "UV-stable polyaspartic topcoat" }],
    baseColor: [28, 28, 28], flakeColors: [[60,60,60],[90,90,90],[130,130,130],[180,180,180],[220,220,220],[40,40,40],[255,255,255],[70,70,70]],
    pattern: "fullflake", gloss: 0.35,
  },
  {
    id: "titanium", name: "Titanium Blend", sub: "Gray · Silver · White flake", badge: "Most Popular",
    swatchFrom: "#7A7A7A", swatchTo: "#A8A8A8", minP: 7, maxP: 12, life: "15–20+ yrs", cure: "~1 hour",
    desc: "The most popular luxury garage finish. Gray and silver flakes with white accents — works with any car color.",
    layers: [{ c: "#666", t: "Diamond grind + prep" },{ c: "#888", t: "Gray polyurea base coat" },{ c: "#AAA", t: "Silver & white flake broadcast" },{ c: "#777", t: "Polyaspartic topcoat" }],
    baseColor: [110, 110, 110], flakeColors: [[200,200,200],[240,240,240],[160,160,160],[255,255,255],[130,130,130],[180,180,180],[220,220,220],[145,145,145]],
    pattern: "fullflake", gloss: 0.45,
  },
  {
    id: "arctic", name: "Arctic White", sub: "White · Light Gray · Silver", badge: "Showroom",
    swatchFrom: "#D0D0D0", swatchTo: "#F0F0F0", minP: 7, maxP: 12, life: "15–20+ yrs", cure: "~1 hour",
    desc: "Bright showroom-white finish. Makes the garage feel like a luxury dealership. Stunning with dark cars.",
    layers: [{ c: "#AAA", t: "Surface prep + primer" },{ c: "#CCC", t: "White polyurea base coat" },{ c: "#EEE", t: "White & silver flake system" },{ c: "#DDD", t: "Clear polyaspartic topcoat" }],
    baseColor: [220, 220, 218], flakeColors: [[255,255,255],[240,240,240],[200,200,200],[225,225,225],[210,210,210],[255,255,255],[190,190,190],[245,245,245]],
    pattern: "fullflake", gloss: 0.55,
  },
  {
    id: "sandstone", name: "Desert Sandstone", sub: "Tan · Beige · Brown flake", badge: "Warm Tone",
    swatchFrom: "#A89070", swatchTo: "#C8AA88", minP: 7, maxP: 12, life: "15–20+ yrs", cure: "~1 hour",
    desc: "Warm earth tones inspired by Montana stone. Popular for mountain homes, ranches, and custom workshops.",
    layers: [{ c: "#8B7355", t: "Surface prep + repair" },{ c: "#A0855A", t: "Tan polyurea base coat" },{ c: "#C8AA88", t: "Desert blend flake broadcast" },{ c: "#9A7B55", t: "Polyaspartic topcoat" }],
    baseColor: [168, 140, 105], flakeColors: [[200,175,140],[220,195,160],[180,155,120],[240,215,180],[160,135,100],[210,185,150],[195,170,135],[230,205,170]],
    pattern: "fullflake", gloss: 0.35,
  },
  {
    id: "cobalt", name: "Cobalt Metallic", sub: "Deep Blue · Silver shimmer", badge: "Bold",
    swatchFrom: "#1A3A5C", swatchTo: "#2A5A8C", minP: 9, maxP: 14, life: "10–15 yrs", cure: "24–48 hrs",
    desc: "Deep cobalt metallic epoxy with silver shimmer. A bold statement for the serious car enthusiast.",
    layers: [{ c: "#1A2A3A", t: "Surface prep + primer" },{ c: "#1A3A6A", t: "Cobalt epoxy base" },{ c: "#4A7AAA", t: "Metallic pigment blend" },{ c: "#2A4A6A", t: "Urethane topcoat" }],
    baseColor: [25, 55, 100], flakeColors: [], pattern: "metallic", gloss: 0.6, metallicSheen: [80, 140, 220],
  },
  {
    id: "gold", name: "Gold Metallic", sub: "Bronze · Gold · Copper shimmer", badge: "Premium",
    swatchFrom: "#7A5A10", swatchTo: "#C89A20", minP: 9, maxP: 15, life: "8–12 yrs", cure: "24–72 hrs",
    desc: "Hand-applied gold metallic with copper undertones. Every floor is unique — for clients who want extraordinary.",
    layers: [{ c: "#555", t: "Concrete prep + primer" },{ c: "#8B6914", t: "Epoxy base layer" },{ c: "#C8A020", t: "Gold metallic pigment blend" },{ c: "#5F5033", t: "Urethane protective topcoat" }],
    baseColor: [140, 100, 20], flakeColors: [], pattern: "metallic", gloss: 0.65, metallicSheen: [240, 190, 60],
  },
];

function drawEpoxyFloor(ctx, W, H, floorStart, finish, alpha) {
  const fy = floorStart;
  const fh = H - fy;
  if (fh <= 0) return;

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, fy, W, fh);
  ctx.clip();

  const [br, bg, bb] = finish.baseColor;

  if (finish.pattern === "fullflake") {
    ctx.fillStyle = `rgba(${br},${bg},${bb},${(alpha * 0.9).toFixed(2)})`;
    ctx.fillRect(0, fy, W, fh);

    const seed = finish.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const rand = (n, s) => { const x = Math.sin(n * 9301 + s * 49297 + seed) * 93243; return x - Math.floor(x); };
    const maxFlakes = Math.min(Math.floor((W * fh) / 16), 9000);

    for (let i = 0; i < maxFlakes; i++) {
      const [fr, fg, fb] = finish.flakeColors[Math.floor(rand(i, 0) * finish.flakeColors.length)];
      const fx = rand(i, 1) * W;
      const fy2 = fy + rand(i, 2) * fh;
      const fsize = 2.5 + rand(i, 3) * 5;
      const angle = rand(i, 4) * Math.PI;
      const aspect = 0.3 + rand(i, 5) * 0.5;
      const sides = 4 + Math.floor(rand(i, 6) * 3);
      ctx.save();
      ctx.translate(fx, fy2);
      ctx.rotate(angle);
      ctx.beginPath();
      for (let s = 0; s < sides; s++) {
        const a = (s / sides) * Math.PI * 2;
        const r = fsize * (0.7 + rand(i * sides + s, 7) * 0.3);
        s === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r * aspect) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r * aspect);
      }
      ctx.closePath();
      const v = (rand(i, 8) - 0.5) * 30;
      ctx.fillStyle = `rgba(${Math.min(255,Math.max(0,fr+v))},${Math.min(255,Math.max(0,fg+v))},${Math.min(255,Math.max(0,fb+v))},${0.7 + rand(i, 9) * 0.3})`;
      ctx.fill();
      if (rand(i, 10) > 0.6) { ctx.strokeStyle = `rgba(255,255,255,${0.15 + rand(i,11)*0.2})`; ctx.lineWidth = 0.5; ctx.stroke(); }
      ctx.restore();
    }

    const gg = ctx.createLinearGradient(0, fy, W * 0.7, fy + fh * 0.3);
    gg.addColorStop(0, `rgba(255,255,255,${(finish.gloss * alpha * 0.4).toFixed(2)})`);
    gg.addColorStop(0.4, `rgba(255,255,255,${(finish.gloss * alpha * 0.08).toFixed(2)})`);
    gg.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gg; ctx.fillRect(0, fy, W, fh);

  } else {
    const [sr, sg, sb] = finish.metallicSheen;
    const g = ctx.createLinearGradient(0, fy, W, H);
    g.addColorStop(0, `rgba(${br},${bg},${bb},${alpha})`);
    g.addColorStop(0.15, `rgba(${Math.min(255,br+40)},${Math.min(255,bg+40)},${Math.min(255,bb+40)},${alpha})`);
    g.addColorStop(0.35, `rgba(${sr},${sg},${sb},${(alpha*0.7).toFixed(2)})`);
    g.addColorStop(0.5, `rgba(${br},${bg},${bb},${alpha})`);
    g.addColorStop(0.7, `rgba(${Math.max(0,br-20)},${Math.max(0,bg-20)},${Math.max(0,bb-20)},${alpha})`);
    g.addColorStop(0.85, `rgba(${sr},${sg},${sb},${(alpha*0.5).toFixed(2)})`);
    g.addColorStop(1, `rgba(${br},${bg},${bb},${alpha})`);
    ctx.fillStyle = g; ctx.fillRect(0, fy, W, fh);

    for (let i = 0; i < 14; i++) {
      const sd = finish.id.charCodeAt(0) * (i + 1);
      const rx = ((sd * 7919) % 1000) / 1000 * W;
      const ry = fy + ((sd * 6271) % 1000) / 1000 * fh;
      const rr = (20 + ((sd * 3571) % 100)) * (W / 400);
      const rg = ctx.createRadialGradient(rx, ry, 0, rx, ry, rr);
      rg.addColorStop(0, `rgba(${sr},${sg},${sb},${(alpha*0.55).toFixed(2)})`);
      rg.addColorStop(0.5, `rgba(${sr},${sg},${sb},${(alpha*0.2).toFixed(2)})`);
      rg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = rg; ctx.fillRect(0, fy, W, fh);
    }

    const sw = ctx.createLinearGradient(0, fy, W * 0.5, H);
    sw.addColorStop(0, `rgba(255,255,255,${(finish.gloss*alpha*0.35).toFixed(2)})`);
    sw.addColorStop(0.3, `rgba(255,255,255,${(finish.gloss*alpha*0.1).toFixed(2)})`);
    sw.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = sw; ctx.fillRect(0, fy, W, fh);
  }

  // Floor line indicator
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "rgba(200,169,110,0.6)";
  ctx.lineWidth = 1.5;
  ctx.setLineDash([8, 4]);
  ctx.beginPath();
  ctx.moveTo(0, fy);
  ctx.lineTo(W, fy);
  ctx.stroke();
  ctx.restore();
}

export default function FloorVisualizer() {
  const [sel, setSel] = useState("titanium");
  const [phase, setPhase] = useState("idle");
  const [floorLine, setFloorLine] = useState(50); // % from top where floor starts
  const [snapData, setSnapData] = useState(null);
  const [resultSrc, setResultSrc] = useState(null);
  const [opacity, setOpacity] = useState(88);
  const [sqft, setSqft] = useState(500);

  const vidRef = useRef(null);
  const ovRef = useRef(null);
  const snapRef = useRef(null);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const selRef = useRef(sel);
  const opRef = useRef(opacity);
  const floorRef = useRef(floorLine);

  useEffect(() => { selRef.current = sel; }, [sel]);
  useEffect(() => { opRef.current = opacity; }, [opacity]);
  useEffect(() => { floorRef.current = floorLine; }, [floorLine]);

  const finish = FINISHES.find(f => f.id === sel);

  const startLive = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const vid = vidRef.current; const ov = ovRef.current;
      if (!vid || !ov || !vid.videoWidth) return;
      if (ov.width !== vid.videoWidth) { ov.width = vid.videoWidth; ov.height = vid.videoHeight; }
      const ctx = ov.getContext("2d");
      ctx.clearRect(0, 0, ov.width, ov.height);
      const f = FINISHES.find(x => x.id === selRef.current);
      const fy = Math.floor(ov.height * (floorRef.current / 100));
      drawEpoxyFloor(ctx, ov.width, ov.height, fy, f, (opRef.current / 100) * 0.9);
    }, 80);
  }, []);

  useEffect(() => {
    if (phase === "live") startLive();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, startLive]);

  useEffect(() => {
    if (phase === "result" && snapData) applyToSnap(snapData, finish, opacity, floorLine);
  }, [sel, opacity, floorLine]);

  const startCam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (vidRef.current) {
        vidRef.current.srcObject = stream;
        vidRef.current.onloadedmetadata = () => { vidRef.current.play(); setPhase("live"); };
      }
    } catch { alert("Camera access denied — allow in browser settings."); }
  };

  const takeSnap = () => {
    const vid = vidRef.current; const sc = snapRef.current;
    if (!vid || !sc) return;
    sc.width = vid.videoWidth || 1280; sc.height = vid.videoHeight || 720;
    sc.getContext("2d").drawImage(vid, 0, 0);
    const data = sc.toDataURL("image/jpeg", 0.93);
    setSnapData(data);
    if (timerRef.current) clearInterval(timerRef.current);
    applyToSnap(data, finish, opacity, floorLine);
    setPhase("result");
  };

  const applyToSnap = (data, f, op, fl) => {
    const sc = snapRef.current; if (!sc) return;
    const out = document.createElement("canvas");
    out.width = sc.width; out.height = sc.height;
    const ctx = out.getContext("2d");
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      const fy = Math.floor(sc.height * (fl / 100));
      drawEpoxyFloor(ctx, sc.width, sc.height, fy, f, (op / 100) * 0.93);
      setResultSrc(out.toDataURL("image/jpeg", 0.93));
    };
    img.src = data;
  };

  const reset = () => {
    setPhase("live"); setResultSrc(null); setSnapData(null);
    if (vidRef.current) vidRef.current.style.display = "block";
    const ov = ovRef.current;
    if (ov) ov.style.display = "block";
    startLive();
  };

  const download = () => {
    if (!resultSrc) return;
    const a = document.createElement("a"); a.href = resultSrc;
    a.download = `summit-garage-${sel}.jpg`; a.click();
  };

  return (
    <section className="bg-[#0A0A09] border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-px bg-[#C8A96E]" />
          <span className="text-[#C8A96E] text-[10px] tracking-[0.22em] uppercase">Floor Visualizer</span>
        </div>
        <h2 className="font-serif font-light text-4xl md:text-6xl text-[#F5F2EE] leading-[1.06] tracking-tight mb-4">
          See Your Finish <em className="text-[#C8A96E] not-italic italic">Before</em><br />We Install It
        </h2>
        <p className="text-[#6B6860] text-sm leading-relaxed max-w-lg">
          Point your phone at your garage floor, adjust the floor line, and see any premium finish applied live.
        </p>
      </div>

      <div className="border-t border-b border-white/[0.07] grid grid-cols-2 md:grid-cols-4">
        {[
          { n: "01", title: "Choose a Finish", sub: "Pick from our collection" },
          { n: "02", title: "Enable Camera", sub: "Point at your garage floor" },
          { n: "03", title: "Adjust Floor Line", sub: "Move slider to match your floor" },
          { n: "04", title: "Capture & Save", sub: "See the finish applied" },
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
              {phase === "idle" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-8">
                  <div className="w-16 h-16 rounded-full border border-[#C8A96E]/30 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,110,0.5)" strokeWidth="1.2">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.18em] uppercase text-[#C8A96E] mb-2">Ready when you are</p>
                    <p className="text-[#6B6860] text-sm leading-relaxed max-w-[220px]">Enable camera and point at your garage floor</p>
                  </div>
                </div>
              )}

              <video ref={vidRef} autoPlay playsInline muted
                className="absolute inset-0 w-full h-full object-cover"
                style={{ display: phase === "result" || phase === "idle" ? "none" : "block" }} />

              <canvas ref={ovRef} className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ display: phase === "result" ? "none" : "block" }} />

              <canvas ref={snapRef} className="hidden" />

              {resultSrc && phase === "result" && (
                <img src={resultSrc} alt="Floor preview" className="absolute inset-0 w-full h-full object-cover" />
              )}

              {phase === "live" && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/80 border border-white/10 px-3 py-1.5 rounded-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] animate-pulse" />
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#9A9690]">Live</span>
                </div>
              )}

              {phase !== "idle" && (
                <div className="absolute top-4 right-4 bg-black/80 border border-[#C8A96E]/25 px-3 py-1.5 rounded-sm">
                  <span className="font-serif text-[#C8A96E] text-sm">{finish.name}</span>
                </div>
              )}

              {phase === "live" && (
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6 pt-10"
                  style={{ background: "linear-gradient(transparent, rgba(10,10,9,0.92))" }}>
                  <button onClick={takeSnap}
                    className="w-16 h-16 rounded-full bg-[#F5F2EE] flex items-center justify-center active:scale-90 transition-transform">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A09" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5" fill="#0A0A09"/>
                    </svg>
                  </button>
                </div>
              )}

              {phase === "result" && (
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 px-5 pb-6 pt-10"
                  style={{ background: "linear-gradient(transparent, rgba(10,10,9,0.92))" }}>
                  <button onClick={reset} className="text-[10px] tracking-[0.14em] uppercase text-white/60 border border-white/20 px-5 py-2.5 rounded-sm hover:text-white transition-all">Retake</button>
                  <button onClick={download} className="text-[10px] tracking-[0.14em] uppercase text-white/60 border border-white/20 px-5 py-2.5 rounded-sm hover:text-white transition-all">Save Image</button>
                </div>
              )}
            </div>

            {phase === "idle" && (
              <div className="flex justify-center py-7 border-b border-white/[0.07]">
                <button onClick={startCam}
                  className="text-[11px] tracking-[0.16em] uppercase bg-[#C8A96E] text-[#0A0A09] px-9 py-4 rounded-sm hover:bg-[#8B6E3E] hover:text-[#F5F2EE] transition-all">
                  Enable Camera
                </button>
              </div>
            )}

            {(phase === "live" || phase === "result") && (
              <div className="px-6 py-4 border-b border-white/[0.07] space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#6B6860] whitespace-nowrap">Floor Line</span>
                  <input type="range" min={20} max={85} value={floorLine} step={1}
                    onChange={e => setFloorLine(Number(e.target.value))}
                    className="flex-1 accent-[#C8A96E]" />
                  <span className="font-serif text-[#C8A96E] text-base min-w-[36px] text-right">{floorLine}%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.14em] uppercase text-[#6B6860] whitespace-nowrap">Intensity</span>
                  <input type="range" min={40} max={98} value={opacity} step={1}
                    onChange={e => setOpacity(Number(e.target.value))}
                    className="flex-1 accent-[#C8A96E]" />
                  <span className="font-serif text-[#C8A96E] text-base min-w-[36px] text-right">{opacity}%</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col bg-[#111110]">
            <div className="p-5 border-b border-white/[0.07]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#6B6860] mb-4">Premium Finish Collection</div>
              <div className="flex flex-col gap-2">
                {FINISHES.map(f => (
                  <button key={f.id} onClick={() => setSel(f.id)}
                    className={`flex items-center gap-3 p-3 rounded-sm border text-left transition-all ${f.id === sel ? "border-[#C8A96E] bg-[#C8A96E]/[0.06]" : "border-white/[0.07] hover:border-white/20"}`}>
                    <div className="w-8 h-8 rounded-sm flex-shrink-0 overflow-hidden relative"
                      style={{ background: `linear-gradient(135deg,${f.swatchFrom},${f.swatchTo})` }}>
                      {f.pattern === "fullflake" && (
                        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle 1px at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 50%), radial-gradient(circle 1.5px at 60% 70%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle 1px at 80% 20%, rgba(255,255,255,0.9) 0%, transparent 50%), radial-gradient(circle 1px at 40% 80%, rgba(255,255,255,0.7) 0%, transparent 50%)` }} />
                      )}
                      {f.pattern === "metallic" && (
                        <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, rgba(255,255,255,0.3) 0%, transparent 40%, rgba(255,255,255,0.2) 70%, transparent 100%)` }} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium leading-tight ${f.id === sel ? "text-[#C8A96E]" : "text-[#F5F2EE]"}`}>{f.name}</div>
                      <div className="text-[11px] text-[#6B6860] mt-0.5">${f.minP}–${f.maxP}/sq ft</div>
                    </div>
                    <span className="text-[9px] tracking-[0.07em] uppercase px-2 py-0.5 rounded-sm flex-shrink-0 bg-[#C8A96E]/10 text-[#C8A96E]">{f.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 border-b border-white/[0.07]">
              <div className="font-serif text-[#F5F2EE] text-2xl font-light mb-1">{finish.name}</div>
              <div className="text-[11px] text-[#C8A96E] mb-3 tracking-wide">{finish.sub}</div>
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
                <input type="range" min={100} max={1400} value={sqft} step={10}
                  onChange={e => setSqft(Number(e.target.value))} className="flex-1 accent-[#C8A96E]" />
                <span className="font-serif text-[#F5F2EE] text-base min-w-[72px] text-right">{sqft.toLocaleString()} sq ft</span>
              </div>
              <div className="bg-[#0A0A09] border border-white/[0.06] rounded-sm p-3.5 flex justify-between items-end">
                <div>
                  <div className="text-[9px] tracking-[0.14em] uppercase text-[#6B6860] mb-1">Estimated Investment</div>
                  <div className="font-serif text-[#C8A96E] text-2xl font-light">
                    ${(sqft * finish.minP).toLocaleString()} – ${(sqft * finish.maxP).toLocaleString()}
                  </div>
                </div>
                <div className="text-[10px] text-[#6B6860] text-right leading-relaxed">Installed<br />incl. prep</div>
              </div>
            </div>

            <div className="p-5 mt-auto">
              <a href="#quote" className="block w-full text-center text-[11px] tracking-[0.18em] uppercase py-4 bg-[#C8A96E] text-[#0A0A09] rounded-sm hover:bg-[#8B6E3E] hover:text-[#F5F2EE] transition-all mb-3">
                Book Private Estimate →
              </a>
              <div className="text-center text-[10px] text-[#6B6860] leading-relaxed">
                <a href="tel:+14062824033" className="text-[#C8A96E] hover:underline">(786) 708-5686</a>{" · "}
                <a href="mailto:hello@summitgaragefloors.com" className="text-[#C8A96E] hover:underline">hello@summitgaragefloors.com</a>
                <br />Free estimate · 1–2 day install · Lifetime warranty
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
