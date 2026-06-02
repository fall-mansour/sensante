"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Définition de l'interface pour accepter la prop isOpen
interface SidebarProps {
  isOpen: boolean;
}

const liens = [
  { nom: "Accueil", href: "/", icone: "H" },
  { nom: "Patients", href: "/patients", icone: "P" },
  { nom: "Consultations", href: "/consultations", icone: "C" },
  { nom: "Dashboard", href: "/dashboard", icone: "D" },
  { nom: "Profil", href: "/profil", icone: "U" },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay pour mobile : ferme le menu si on clique à côté */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" />}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-teal-800 text-white transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 md:min-h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4">
          <nav className="space-y-2 mt-4">
            {liens.map((lien) => {
              const actif = pathname === lien.href;
              return (
                <Link
                  key={lien.href}
                  href={lien.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    actif ? "bg-teal-600 font-bold" : "hover:bg-teal-700"
                  }`}
                >
                  <span className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-sm">
                    {lien.icone}
                  </span>
                  <span>{lien.nom}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
