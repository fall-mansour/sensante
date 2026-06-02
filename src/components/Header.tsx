"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <header className="bg-teal-700 text-white p-4 flex items-center justify-between min-h-[64px]">
      {/* Section Gauche : Menu Burger + Titre */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        {/* Bouton Menu : Visible sur Mobile et Tablette (Masqué sur PC via lg:hidden) */}
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-teal-600 rounded-lg transition-colors lg:hidden shrink-0"
          aria-label="Ouvrir le menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Section Droite : Statut de connexion / Actions (Toujours visible sur mobile) */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {session ? (
          <>
            {/* Le nom de l'utilisateur est masqué sur mobile pour gagner de la place, visible dès la tablette */}
            <span className="text-sm text-teal-200 hidden md:inline max-w-[120px] truncate">
              {session.user?.name}
            </span>
            <button
              onClick={() => signOut()}
              className="text-xs sm:text-sm bg-teal-600 px-3 py-2 rounded hover:bg-teal-500 transition font-medium whitespace-nowrap"
            >
              Déconnexion
            </button>
          </>
        ) : (
          /* Ce bouton de connexion reste maintenant parfaitement visible au premier plan sur mobile */
          <Link
            href="/login"
            className="text-xs sm:text-sm bg-teal-600 px-3 py-2 rounded hover:bg-teal-500 transition font-medium whitespace-nowrap"
          >
            Se connecter
          </Link>
        )}
      </div>
    </header>
  );
}
