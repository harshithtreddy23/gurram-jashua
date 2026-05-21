import Image from "next/image";

export default function Home() {
  const reputation = 92;

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.25),transparent_60%)]" />

        <Image
          src="/gurram-jashua.png"
          alt="Gurram Jashua"
          width={500}
          height={500}
          className="relative rounded-3xl border-4 border-red-600 shadow-[0_0_80px_rgba(255,0,0,0.4)]"
        />

        <h1 className="relative mt-10 text-6xl md:text-8xl font-black tracking-widest text-red-600">
          GURRAM JASHUA
        </h1>

        <p className="relative mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
          The man the city fears after midnight.
          Street legend. Underground operator.
          A shadow moving through Los Santos while sirens echo in the distance.
        </p>

        <button className="relative mt-10 px-10 py-5 bg-red-700 hover:bg-red-800 transition-all duration-300 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(255,0,0,0.5)]">
          ENTER THE UNDERWORLD
        </button>
      </section>

      {/* STREET REPUTATION */}
      <section className="relative max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-10">
          STREET REPUTATION
        </h2>

        <div className="bg-zinc-900 border border-red-800 rounded-full h-10 overflow-hidden shadow-lg">
          <div
            className="bg-gradient-to-r from-red-700 to-red-500 h-full transition-all duration-1000"
            style={{ width: `${reputation}%` }}
          />
        </div>

        <div className="text-center mt-6">
          <span className="text-4xl font-extrabold text-red-400">
            {reputation}%
          </span>

          <p className="mt-4 text-gray-400 text-lg">
            Current Status:
            <span className="text-red-500 font-bold">
              {" "}
              HIGHLY WANTED
            </span>
          </p>
        </div>
      </section>

      {/* CHARACTER PROFILE */}
      <section className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-20">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-black text-red-500 mb-8">
            CHARACTER PROFILE
          </h2>

          <div className="space-y-6 text-lg text-gray-300">

            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>Name</span>
              <span className="text-red-400">Gurram Jashua</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>Occupation</span>
              <span className="text-red-400">Underground Operator</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>Affiliation</span>
              <span className="text-red-400">Independent</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>Status</span>
              <span className="text-red-400">Active</span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-3">
              <span>City</span>
              <span className="text-red-400">Los Santos</span>
            </div>

          </div>
        </div>

        {/* LORE */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-black text-red-500 mb-8">
            BACKSTORY
          </h2>

          <p className="text-lg text-gray-300 leading-loose">
            Nobody knows where Gurram Jashua came from.
            Some claim he arrived in Los Santos with nothing but a duffel bag
            and a reputation already written in blood.
          </p>

          <p className="text-lg text-gray-300 leading-loose mt-6">
            As the city descended into chaos, his name spread through the streets,
            whispered in clubs, alleyways, and police radio chatter.
          </p>

          <p className="text-lg text-gray-300 leading-loose mt-6">
            One thing became clear:
            crossing paths with Gurram Jashua never ends quietly.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative px-6 py-20 max-w-5xl mx-auto">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          RP TIMELINE
        </h2>

        <div className="space-y-10">

          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-2xl font-bold text-red-400">
              2023 — Arrival
            </h3>

            <p className="text-gray-400 mt-2">
              Entered Los Santos and began building underground connections.
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-2xl font-bold text-red-400">
              2024 — Street Influence
            </h3>

            <p className="text-gray-400 mt-2">
              Expanded operations throughout the city and gained notoriety.
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-2xl font-bold text-red-400">
              2025 — Most Wanted
            </h3>

            <p className="text-gray-400 mt-2">
              Became one of the most feared names in ATRP.
            </p>
          </div>

        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative py-24 text-center px-6">

        <div className="max-w-4xl mx-auto bg-zinc-950 border border-red-900 rounded-3xl p-12 shadow-2xl">

          <p className="text-3xl md:text-5xl italic text-gray-200 leading-relaxed">
            “Trust nobody after midnight.”
          </p>

          <p className="mt-8 text-red-500 text-xl font-bold">
            — Gurram Jashua
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-zinc-900 py-10 text-center text-gray-500">

        <p className="text-lg">
          Gurram Jashua • ATRP Character Profile
        </p>

        <p className="mt-2 text-sm">
          FiveM Roleplay Universe
        </p>

      </footer>

    </main>
  );
}