import Image from "next/image";

export default function Home() {
  const horseEnergy = 97;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      
      {/* HERO IMAGE */}
      <Image
        src="/gurram-jashua.png"
        alt="Gurram Jashua"
        width={500}
        height={500}
        className="rounded-3xl border-4 border-red-500 shadow-2xl shadow-red-500"
      />

      {/* TITLE */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-red-500 mt-10 text-center">
        GURRAM JASHUA
      </h1>

      {/* DESCRIPTION */}
      <p className="text-center text-xl md:text-2xl text-gray-300 mt-6 max-w-4xl leading-relaxed">
        The legendary horse-mask meme king who dances under moonlight,
        destroys the internet with goofy dance moves, and spreads maximum
        horse energy 🐴🔥
      </p>

      {/* BUTTON */}
      <button className="mt-10 bg-red-500 hover:bg-red-600 transition-all duration-300 px-10 py-5 rounded-full text-2xl font-bold shadow-lg shadow-red-500/50">
        Join The Meme Army
      </button>

      {/* HORSE ENERGY METER */}
      <section className="mt-20 w-full max-w-3xl">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-8">
          HORSE ENERGY METER ⚡🐴
        </h2>

        <div className="bg-gray-800 rounded-full h-10 overflow-hidden border-4 border-yellow-400">
          <div
            className="bg-yellow-400 h-full transition-all duration-1000"
            style={{ width: `${horseEnergy}%` }}
          />
        </div>

        <p className="text-center text-3xl font-bold mt-6 text-yellow-300">
          {horseEnergy}% MAXIMUM HORSE ENERGY
        </p>

        <div className="text-center mt-4 text-xl text-gray-300">
          Current Status:
          <span className="text-green-400 font-bold">
            {" "}
            DANCING TOO HARD 🔥
          </span>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mt-24 max-w-5xl text-center">
        <h2 className="text-5xl font-extrabold text-red-400 mb-8">
          Who Is Gurram Jashua?
        </h2>

        <p className="text-xl text-gray-300 leading-loose">
          Nobody knows where he came from. Some say he escaped from a secret
          dance laboratory. Others believe he was born during a full moon while
          TikTok music played in the background.
        </p>

        <p className="text-xl text-gray-300 leading-loose mt-6">
          One thing is certain:
          <span className="text-red-400 font-bold">
            {" "}
            when Gurram Jashua starts dancing...
          </span>{" "}
          the internet loses control.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="mt-24 text-gray-500 text-lg">
        Made with 🐴🔥 by the Gurram Jashua Meme Army
      </footer>
    </main>
  );
}