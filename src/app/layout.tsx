"use client"; // Obligatoire car nous utilisons un état (useState) pour le menu

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SessionWrapper from "@/components/SessionWrapper";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="fr">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="flex flex-col min-h-screen">
            {/* On passe la fonction au Header pour le bouton menu */}
            <Header onMenuClick={toggleSidebar} />

            <div className="flex flex-1">
              {/* On passe l'état à la Sidebar pour l'affichage mobile */}
              <Sidebar isOpen={isSidebarOpen} />

              <main className="flex-1 bg-gray-50 p-8">{children}</main>
            </div>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
