"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState("");

  const message =
    "ACCESSING HUMANE LABS DATABASE... CLEARANCE ACCEPTED.";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(message.slice(0, index));
      index++;

      if (index > message.length) {
        clearInterval(interval);
      }
    }, 50);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return (
      <main className="h-screen bg-black flex items-center justify-center overflow-hidden relative">

        {/* Glow */}
        <div className="absolute w-[600px] h-[600px] bg-red-700/20 blur-[140px] rounded-full animate-pulse" />

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.08)_50%)] bg-[length:100%_4px]" />

        <div className="relative z-10 text-center">

          <h1 className="text-red-500 text-4xl md:text-6xl font-black tracking-[6px]">
            HUMANE LABS
          </h1>

          <p className="mt-8 text-green-400 text-xl font-mono min-h-[40px]">
            {typedText}
          </p>

          {/* Loading Bar */}
          <div className="mt-10 w-80 h-3 bg-zinc-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-red-600 animate-[loading_3s_linear_forwards]" />
          </div>

        </div>

        <style jsx>{`
          @keyframes loading {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Animated Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-red-700/20 blur-[160px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-250px] right-[-250px] w-[700px] h-[700px] bg-red-900/20 blur-[180px] rounded-full animate-pulse" />

      </div>

      {/* Scanlines */}
      <div className="fixed inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.08)_50%)] bg-[length:100%_4px]" />

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-500 rounded-full opacity-30 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="inline-block border border-red-700 text-red-400 px-5 py-2 rounded-full tracking-[5px] uppercase text-sm mb-8 animate-pulse">
          Classified Archive
        </div>

        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-[8px] text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]">
          Humane Labs
        </h1>

        <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-300">
          The Chronicles
        </h2>

        <p className="mt-8 max-w-4xl text-xl text-gray-400 leading-relaxed">
          Secret experiments. Underground organizations.
          Government coverups. Biological reconstruction.
          The hidden truth beneath Los Santos.
        </p>

        <div className="mt-14 relative">

          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-3xl bg-red-700/20 blur-3xl animate-pulse" />

          <Image
            src="/gurram-jashua.png"
            alt="Gurram Jashua"
            width={430}
            height={430}
            className="relative rounded-3xl border-4 border-red-700 shadow-[0_0_80px_rgba(255,0,0,0.5)] hover:scale-105 transition-all duration-500"
          />

        </div>

      </section>

      {/* STATUS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          CITY STATUS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "BLACK MANIACS",
              status: "ACTIVE",
              color: "text-green-400",
              desc: "Underground operations expanding through Los Santos.",
            },
            {
              title: "HELL BOYS",
              status: "HIGH THREAT",
              color: "text-red-500",
              desc: "Criminal activity increasing across city sectors.",
            },
            {
              title: "HUMANE LABS",
              status: "FILES LEAKED",
              color: "text-yellow-400",
              desc: "Underground sectors remain partially undiscovered.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 hover:border-red-500 transition-all duration-500 shadow-[0_0_30px_rgba(255,0,0,0.15)]"
            >
              <h3 className="text-2xl font-black text-red-400">
                {card.title}
              </h3>

              <p className={`mt-6 text-2xl font-bold ${card.color} animate-pulse`}>
                {card.status}
              </p>

              <p className="mt-4 text-gray-400">
                {card.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CHARACTER PROFILE */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          CHARACTER DATABASE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              name: "GURRAM JASHUA",
              threat: "EXTREME",
              status: "ACTIVE",
              desc: "Experimental biological reconstruction survivor.",
            },
            {
              name: "SPIDER REDDY",
              threat: "UNKNOWN",
              status: "INVESTIGATING",
              desc: "Exposed to Humane Labs experimental chemicals.",
            },
            {
              name: "LEONARDO RIO",
              threat: "CATASTROPHIC",
              status: "UNKNOWN",
              desc: "Mastermind behind Humane Labs conspiracies.",
            },
          ].map((char, i) => (
            <div
              key={i}
              className="bg-zinc-950 border border-red-900 rounded-3xl p-8 hover:scale-105 hover:border-red-500 transition-all duration-500 relative overflow-hidden"
            >

              <div className="absolute inset-0 bg-red-700/5 opacity-0 hover:opacity-100 transition-all duration-500" />

              <h3 className="text-3xl font-black text-red-400 relative z-10">
                {char.name}
              </h3>

              <div className="mt-6 space-y-4 text-gray-300 relative z-10">

                <p>
                  <span className="text-red-500">Threat:</span>{" "}
                  {char.threat}
                </p>

                <p>
                  <span className="text-red-500">Status:</span>{" "}
                  {char.status}
                </p>

                <p>{char.desc}</p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-red-500 mb-16">
          INCIDENT TIMELINE
        </h2>

        <div className="space-y-12">

          {[
            {
              title: "HUMANE LABS ERA",
              desc: "Illegal biological research begins beneath Los Santos.",
            },
            {
              title: "THE BIGGEST ROBBERY",
              desc: "Government coverups begin after major attacks.",
            },
            {
              title: "THE CREATION OF GURRAM",
              desc: "Unauthorized biological reconstruction succeeds.",
            },
            {
              title: "BLACK MANIACS RISE",
              desc: "Underground factions divide the city forever.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-red-700 pl-8 hover:translate-x-2 transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-red-400">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 text-lg">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CLASSIFIED REPORT */}
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
            Multiple witnesses report unidentified movement beneath the city
            after midnight.
          </p>

          <p className="mt-8 text-red-500 text-2xl font-bold animate-pulse">
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