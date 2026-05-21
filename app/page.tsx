export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-red-950 text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <img
          src="/gurram-jashua.png"
          alt="Gurram Jashua"
          className="w-72 rounded-3xl shadow-2xl border-4 border-red-500 mb-8 hover:scale-105 transition-all"
        />

        <h1 className="text-6xl md:text-8xl font-black text-red-500 drop-shadow-lg">
          GURRAM JASHUA
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-2xl leading-8">
          The legendary horse-mask meme king who dances under moonlight,
          destroys the internet with goofy dance moves,
          and spreads maximum horse energy 🐴🔥
        </p>

        <button className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:scale-110 transition-all">
          Join The Meme Army
        </button>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-5xl font-extrabold text-red-400 mb-8">
            Who Is Gurram Jashua?
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            Nobody knows where he came from.
            Some say he escaped from a secret dance laboratory.
            Others believe he was born during a full moon while TikTok music played in the background.
          </p>

          <ul className="mt-8 space-y-4 text-xl">
            <li>🐴 Horse power level: MAXIMUM</li>
            <li>🕺 Dancing skills: Illegal in 12 countries</li>
            <li>🍕 Can smell pizza from 20km away</li>
            <li>💀 Meme energy overload</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">

          <div className="text-7xl text-center">
            🐴
          </div>

          <h3 className="text-3xl font-bold text-center text-red-400 mt-6">
            Official Status
          </h3>

          <div className="mt-8 bg-black/40 rounded-2xl p-6">
            <p className="text-green-400 font-mono">
              STATUS:
            </p>

            <p className="mt-4 text-lg">
              Currently moonwalking through the internet.
            </p>
          </div>
        </div>
      </section>

      {/* MEME MOVES */}
      <section className="bg-black/30 py-20 px-6">

        <h2 className="text-5xl font-extrabold text-center text-red-400 mb-16">
          Legendary Dance Moves
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white/10 rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all">
            <div className="text-6xl mb-4">🔥</div>

            <h3 className="text-2xl font-bold text-red-300 mb-4">
              Ultra Horse Dab
            </h3>

            <p className="text-gray-300">
              Scientists still cannot explain this dangerous movement.
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all">
            <div className="text-6xl mb-4">🌙</div>

            <h3 className="text-2xl font-bold text-red-300 mb-4">
              Midnight Wiggle
            </h3>

            <p className="text-gray-300">
              Causes random people nearby to start dancing uncontrollably.
            </p>
          </div>

          <div className="bg-white/10 rounded-3xl p-8 border border-white/10 hover:scale-105 transition-all">
            <div className="text-6xl mb-4">💀</div>

            <h3 className="text-2xl font-bold text-red-300 mb-4">
              Turbo Knee Shuffle
            </h3>

            <p className="text-gray-300">
              Banned from professional competitions worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-5xl font-extrabold text-center text-red-400 mb-16">
          Internet Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-br from-red-500/20 to-black rounded-3xl p-8">
            <p className="text-xl italic">
              “I laughed so hard I forgot my WiFi password.”
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-black rounded-3xl p-8">
            <p className="text-xl italic">
              “This horse changed my life forever.”
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500/20 to-black rounded-3xl p-8">
            <p className="text-xl italic">
              “Why is he dancing like that? 10/10.”
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">

        <p className="text-lg">
          © 2026 Gurram Jashua Meme Universe 🐴
        </p>

        <p className="mt-2 text-sm">
          Warning: Excessive exposure may cause uncontrollable dancing.
        </p>

      </footer>

    </div>
  );
}