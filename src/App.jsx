export default function DagerrPortfolio() {
  const youtubeVideos = [
    {
      title: "YouTube Shorts Showcase",
      link: "https://www.youtube.com/shorts/kNouBI6AICQ",
      thumbnail: "https://i.ytimg.com/vi/kNouBI6AICQ/maxresdefault.jpg",
      label: "Shorts",
      featured: true,
    },
    {
      title: "Gaming Cinematic Edit",
      link: "https://www.youtube.com/@Dagerrrrrrrr",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
      label: "Cinematic",
      featured: false,
    },
  ];

  const tiktokVideos = [
    {
      title: "1M Views TikTok Edit",
      link: "https://www.tiktok.com/@dagerr02/video/7629050645424704776?is_from_webapp=1&sender_device=pc&web_id=7639757484844828178",
      thumbnail:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
      label: "Viral",
      views: "1.2M",
    },
    {
      title: "Cozy Gaming Montage",
      link: "https://www.tiktok.com/@dagerr02",
      thumbnail:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=800&auto=format&fit=crop",
      label: "Montage",
      views: "847K",
    },
  ];

  const services = [
    {
      num: "01",
      title: "Gaming Video Editing",
      desc: "Smooth cuts, sync edits, immersive atmosphere",
    },
    {
      num: "02",
      title: "TikTok Short Content",
      desc: "Fast-paced viral-style shorts and reels",
    },
    {
      num: "03",
      title: "Livestream Branding",
      desc: "Overlays, alerts, transitions, and scene packages",
    },
    {
      num: "04",
      title: "Cinematic Montage",
      desc: "Story-driven sequences with motion & music sync",
    },
    {
      num: "05",
      title: "Motion Graphics",
      desc: "Animated titles, lower thirds, dynamic visuals",
    },
    {
      num: "06",
      title: "YouTube Thumbnail Design",
      desc: "Click-worthy thumbnails that convert views",
    },
  ];

  const tickerItems = [
    "GAMING EDITS",
    "CINEMATIC CONTENT",
    "VIRAL SHORTS",
    "LIVESTREAM BRANDING",
    "MOTION GRAPHICS",
    "COZY AESTHETIC",
    "YOUTUBE SHORTS",
    "4K EDITING",
  ];

  const stats = [
    { label: "Projects Completed", value: "50+", color: "text-cyan-400" },
    { label: "Editing Resolution", value: "4K", color: "text-purple-400" },
    { label: "Viral TikTok Views", value: "1M+", color: "text-cyan-400" },
    { label: "Turnaround", value: "24–48h", color: "text-purple-400" },
  ];

  return (
    <div className="relative min-h-screen bg-[#06070f] text-white grain overflow-x-hidden">
      {/* Atmospheric ambient glows — fixed so they don't scroll */}
      <div
        aria-hidden
        className="fixed top-[-10%] left-[10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="fixed bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.09) 0%, transparent 70%)",
        }}
      />

      {/* ── Navigation ── */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
        <span className="font-display text-2xl tracking-widest text-cyan-400">
          DAGERR
        </span>
        <div className="hidden md:flex items-center gap-10 font-mono text-xs tracking-widest text-gray-400 uppercase">
          <a href="#work" className="hover:text-white transition-colors duration-200">
            Work
          </a>
          <a href="#services" className="hover:text-white transition-colors duration-200">
            Services
          </a>
          <a
            href="https://www.youtube.com/@Dagerrrrrrrr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            YouTube
          </a>
          <a
            href="https://www.tiktok.com/@dagerr02"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors duration-200"
          >
            TikTok
          </a>
        </div>
        <a
          href="https://www.tiktok.com/@dagerr02"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs tracking-widest border border-cyan-500/40 text-cyan-400 px-5 py-2.5 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
        >
          HIRE ME
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 px-8 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Left — text */}
          <div>
            <p className="font-mono text-xs tracking-[0.45em] text-cyan-400/60 uppercase mb-8">
              Video Editor · Content Creator · 50+ Projects
            </p>

            <h1 className="font-display leading-none mb-10">
              <span
                className="block text-white/95"
                style={{ fontSize: "clamp(72px, 14vw, 190px)" }}
              >
                DAGERR
              </span>
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  fontSize: "clamp(38px, 7vw, 95px)",
                  backgroundImage:
                    "linear-gradient(90deg, #22d3ee, #a78bfa)",
                }}
              >
                EDIT WORK
              </span>
            </h1>

            <p className="font-heading text-gray-400 text-lg leading-relaxed max-w-lg mb-10">
              Professional gaming &amp; cinematic editor specializing in cozy modern
              aesthetics — smooth transitions, immersive atmosphere, and
              storytelling that sticks.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@Dagerrrrrrrr"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-8 py-3.5 rounded-full bg-cyan-500 text-[#06070f] font-medium hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                YouTube Channel
              </a>
              <a
                href="https://www.tiktok.com/@dagerr02"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-8 py-3.5 rounded-full border border-white/12 text-gray-300 hover:border-purple-400/50 hover:text-white transition-all duration-300"
              >
                TikTok Profile
              </a>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="lg:mt-16 bg-white/[0.03] border border-white/[0.07] rounded-3xl p-7 backdrop-blur-sm">
            <div className="space-y-0 divide-y divide-white/[0.06]">
              {stats.map(({ label, value, color }) => (
                <div
                  key={label}
                  className="flex items-center justify-between py-5 first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                    {label}
                  </span>
                  <span className={`font-display text-3xl ${color}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker ── */}
      <div className="relative z-10 border-y border-white/[0.05] py-4 overflow-hidden my-4">
        <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-sm tracking-[0.3em] text-gray-600 flex items-center gap-14"
            >
              {item}
              <span className="text-cyan-500/30 text-base">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── YouTube Section ── */}
      <section id="work" className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-[10px] tracking-[0.4em] text-cyan-400/50 uppercase">
              01 / YouTube
            </span>
            <h2 className="font-display text-5xl mt-2">YouTube Showcase</h2>
          </div>
          <a
            href="https://www.youtube.com/@Dagerrrrrrrr"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-600 hover:text-cyan-400 transition-colors hidden md:block"
          >
            View Channel →
          </a>
        </div>

        {/* Asymmetric grid: large left + tall right */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-5">
          {/* Featured */}
          <a
            href={youtubeVideos[0].link}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="overflow-hidden aspect-video">
              <img
                src={youtubeVideos[0].thumbnail}
                alt={youtubeVideos[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1400&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[10px] text-cyan-400 tracking-[0.3em] uppercase">
                {youtubeVideos[0].label}
              </span>
              <h3 className="font-heading text-2xl font-bold mt-1.5">
                {youtubeVideos[0].title}
              </h3>
              <p className="font-mono text-xs text-gray-600 mt-2">
                Watch the YouTube Shorts editing showcase
              </p>
            </div>
          </a>

          {/* Secondary */}
          <a
            href={youtubeVideos[1].link}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="overflow-hidden aspect-square">
              <img
                src={youtubeVideos[1].thumbnail}
                alt={youtubeVideos[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[10px] text-cyan-400 tracking-[0.3em] uppercase">
                {youtubeVideos[1].label}
              </span>
              <h3 className="font-heading text-xl font-bold mt-1.5">
                {youtubeVideos[1].title}
              </h3>
            </div>
          </a>
        </div>
      </section>

      {/* ── TikTok Section ── */}
      <section className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-[10px] tracking-[0.4em] text-purple-400/50 uppercase">
              02 / TikTok
            </span>
            <h2 className="font-display text-5xl mt-2">TikTok Reels</h2>
          </div>
          <a
            href="https://www.tiktok.com/@dagerr02"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-600 hover:text-purple-400 transition-colors hidden md:block"
          >
            View Profile →
          </a>
        </div>

        {/* Portrait-ratio cards, like actual TikTok */}
        <div className="grid md:grid-cols-2 gap-5">
          {tiktokVideos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.02] hover:border-purple-500/30 transition-all duration-500"
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "9/14" }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070f]/90 via-transparent to-transparent" />
                {/* View count badge */}
                <div className="absolute top-4 right-4 font-display text-sm bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-purple-300 tracking-wider">
                  {video.views}
                </div>
                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-mono text-[10px] text-purple-400 tracking-[0.3em] uppercase">
                    {video.label}
                  </span>
                  <h3 className="font-heading text-xl font-bold mt-1">
                    {video.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.4em] text-gray-500 uppercase">
            03 / Services
          </span>
          <h2 className="font-display text-5xl mt-2">What I Do</h2>
        </div>

        {/* Numbered list — avoids the 3-equal-card AI tell */}
        <div className="divide-y divide-white/[0.05]">
          {services.map(({ num, title, desc }) => (
            <div
              key={num}
              className="group flex items-center justify-between py-6 -mx-4 px-4 rounded-xl hover:bg-white/[0.025] transition-colors duration-300"
            >
              <div className="flex items-center gap-8">
                <span className="font-mono text-xs text-gray-700 w-6 shrink-0">
                  {num}
                </span>
                <h3 className="font-heading text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                  {title}
                </h3>
              </div>
              <p className="font-mono text-xs text-gray-600 hidden md:block max-w-xs text-right leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 px-8 py-24 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] border border-white/[0.07] overflow-hidden p-12 md:p-20 text-center">
          {/* Subtle gradient fill */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, rgba(147,51,234,0.07) 50%, transparent 80%)",
            }}
          />
          {/* Thin top border accent */}
          <div
            className="absolute top-0 left-[20%] right-[20%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), rgba(167,139,250,0.4), transparent)",
            }}
          />

          <div className="relative">
            <h2
              className="font-display leading-none mb-6 text-transparent bg-clip-text"
              style={{
                fontSize: "clamp(64px, 12vw, 160px)",
                backgroundImage: "linear-gradient(90deg, #22d3ee, #a78bfa)",
              }}
            >
              HIRE ME
            </h2>
            <p className="font-heading text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Open for new projects — gaming edits, TikTok content, cinematic
              montages, and livestream branding packages.
            </p>
            <a
              href="https://www.tiktok.com/@dagerr02"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm inline-block px-12 py-4 rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/20"
              style={{
                background: "linear-gradient(90deg, #06b6d4, #9333ea)",
              }}
            >
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.05] px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span
            className="font-display text-2xl tracking-widest text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #22d3ee, #a78bfa)",
            }}
          >
            DAGERR
          </span>
          <p className="font-mono text-[10px] text-gray-700 tracking-widest uppercase">
            Cozy · Cinematic · Clean
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.youtube.com/@Dagerrrrrrrr"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-cyan-400 transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com/@dagerr02"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-gray-600 hover:text-purple-400 transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
