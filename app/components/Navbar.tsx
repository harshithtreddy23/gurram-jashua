import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-red-900">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-black text-red-500 tracking-[4px]">
          HUMANE LABS
        </h1>

        <div className="flex gap-6 text-gray-300 font-semibold">

          <Link href="/" className="hover:text-red-500">
            Home
          </Link>

          <Link href="/characters" className="hover:text-red-500">
            Characters
          </Link>

          <Link href="/factions" className="hover:text-red-500">
            Factions
          </Link>

          <Link href="/lore" className="hover:text-red-500">
            Lore
          </Link>

          <Link href="/classified" className="hover:text-red-500">
            Classified
          </Link>

        </div>

      </div>

    </nav>
  );
}