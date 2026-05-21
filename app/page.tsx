import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_60%)] pointer-events-none" />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />

        <div className="relative z-10">

          <div className="inline-block border border-red-700 text-red-400 px-5 py-2 rounded-full tracking-[4px] uppercase text-sm mb-8">
            Classified Archive
          </div>

          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-[6px] text-red-600">
            Humane Labs
          </h1>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-300">
            The Chronicles
          </h2>

          <p className="mt-8 max-w-4xl text-xl text-gray-400 leading-relaxed">
            Secret experiments. Underground organizations.
            Government coverups. Biological reconstruction.
            The truth buried beneath Los Santos.
          </p>

          <div className="mt-12">
            <Image
              src="/gurram-jashua.png"
              alt="Gurram Jashua"
              width={420}
              height={420}
              className="rounded-3xl border-4 border-red-700 shadow-[0_0_80px_rgba(255,0,0,0.45)] mx-auto"
            />
          </div>

        </div>
      </section>

      {/* CITY STATUS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-14">
          CITY STATUS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-400">
              BLACK MANIACS
            </h3>

            <p className="mt-6 text-green-400 text-xl font-bold">
              ACTIVE
            </p>

            <p className="mt-4 text-gray-400">
              Underground operations expanding through Los Santos.
            </p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-400">
              HELL BOYS
            </h3>

            <p className="mt-6 text-red-500 text-xl font-bold">
              HIGH THREAT
            </p>

            <p className="mt-4 text-gray-400">
              Criminal activity increasing across city sectors.
            </p>
          </div>

          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-red-400">
              HUMANE LABS
            </h3>

            <p className="mt-6 text-yellow-400 text-xl font-bold">
              FILES LEAKED
            </p>

            <p className="mt-4 text-gray-400">
              Underground sectors remain partially undiscovered.
            </p>
          </div>

        </div>
      </section>

      {/* CHARACTER DATABASE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          CHARACTER DATABASE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* GURRAM */}
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 transition-all">

            <h3 className="text-3xl font-black text-red-400">
              GURRAM JASHUA
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <p>
                <span className="text-red-500">Status:</span> Active
              </p>

              <p>
                <span className="text-red-500">Threat:</span> Extreme
              </p>

              <p>
                <span className="text-red-500">Affiliation:</span> Black Maniacs
              </p>

              <p>
                Experimental biological reconstruction survivor.
              </p>

            </div>
          </div>

          {/* SPIDER */}
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 transition-all">

            <h3 className="text-3xl font-black text-red-400">
              SPIDER REDDY
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <p>
                <span className="text-red-500">Status:</span> Investigating
              </p>

              <p>
                <span className="text-red-500">Threat:</span> Unknown
              </p>

              <p>
                <span className="text-red-500">Ability:</span> Enhanced Instincts
              </p>

              <p>
                Exposed to Humane Labs experimental chemicals.
              </p>

            </div>
          </div>

          {/* LEONARDO */}
          <div className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 transition-all">

            <h3 className="text-3xl font-black text-red-400">
              LEONARDO RIO
            </h3>

            <div className="mt-6 space-y-4 text-gray-300">

              <p>
                <span className="text-red-500">Status:</span> Unknown
              </p>

              <p>
                <span className="text-red-500">Threat:</span> Catastrophic
              </p>

              <p>
                <span className="text-red-500">Affiliation:</span> Hell Boys Legacy
              </p>

              <p>
                Mastermind behind the Humane Labs conspiracies.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* FACTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          FACTIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* BLACK MANIACS */}
          <div className="bg-gradient-to-br from-zinc-950 to-black border border-green-700 rounded-3xl p-10">

            <h3 className="text-4xl font-black text-green-400">
              BLACK MANIACS
            </h3>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              Built on loyalty, survival, protection, and brotherhood.
              Operating through Black Wolf Customs beneath Los Santos.
            </p>

            <ul className="mt-8 space-y-3 text-gray-400 text-lg">
              <li>• Underground Operations</li>
              <li>• Racing Networks</li>
              <li>• Protection Systems</li>
              <li>• Black Market Connections</li>
            </ul>

          </div>

          {/* HELL BOYS */}
          <div className="bg-gradient-to-br from-zinc-950 to-black border border-red-700 rounded-3xl p-10">

            <h3 className="text-4xl font-black text-red-500">
              HELL BOYS
            </h3>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              A criminal empire rebuilt from the ashes of old networks.
              Feared across Los Santos for violence and control.
            </p>

            <ul className="mt-8 space-y-3 text-gray-400 text-lg">
              <li>• Armed Robberies</li>
              <li>• Underground Trafficking</li>
              <li>• Extortion Operations</li>
              <li>• Tactical Assassinations</li>
            </ul>

          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          INCIDENT TIMELINE
        </h2>

        <div className="space-y-10">

          <div className="border-l-4 border-red-700 pl-8">
            <h3 className="text-3xl font-bold text-red-400">
              HUMANE LABS ERA
            </h3>

            <p className="mt-4 text-gray-400 text-lg">
              Illegal biological research begins beneath Los Santos.
            </p>
          </div>

          <div className="border-l-4 border-red-700 pl-8">
            <h3 className="text-3xl font-bold text-red-400">
              THE BIGGEST ROBBERY
            </h3>

            <p className="mt-4 text-gray-400 text-lg">
              Jesús Marquina attacks Humane Labs. Government coverup follows.
            </p>
          </div>

          <div className="border-l-4 border-red-700 pl-8">
            <h3 className="text-3xl font-bold text-red-400">
              THE CREATION OF GURRAM
            </h3>

            <p className="mt-4 text-gray-400 text-lg">
              Ethan Jashua survives unauthorized biological reconstruction.
            </p>
          </div>

          <div className="border-l-4 border-red-700 pl-8">
            <h3 className="text-3xl font-bold text-red-400">
              BLACK MANIACS RISE
            </h3>

            <p className="mt-4 text-gray-400 text-lg">
              Underground factions divide Los Santos forever.
            </p>
          </div>

        </div>
      </section>

      {/* CLASSIFIED FILE */}
      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="bg-zinc-950 border border-red-900 rounded-3xl p-12 shadow-[0_0_50px_rgba(255,0,0,0.15)]">

          <div className="text-red-500 tracking-[5px] uppercase text-sm">
            Restricted Access
          </div>

          <h2 className="mt-6 text-5xl font-black text-red-400">
            CLASSIFIED REPORT
          </h2>

          <p className="mt-10 text-gray-300 text-xl leading-loose">
            Remaining underground sectors beneath Humane Labs continue to show
            signs of abandoned experimental activity.
          </p>

          <p className="mt-6 text-gray-300 text-xl leading-loose">
            Multiple witnesses claim sightings of unknown figures operating
            beneath the city after midnight.
          </p>

          <p className="mt-6 text-red-500 text-2xl font-bold">
            STATUS: INVESTIGATION ACTIVE
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 text-center text-gray-500">

        <p className="text-lg">
          Humane Labs Chronicles • Classified Archive
        </p>

        <p className="mt-2 text-sm">
          FiveM ATRP Universe
        </p>

      </footer>

    </main>
  );
}