"use client";

import { useState } from "react";
import AlerteIA from "@/components/AlerteIA";

export default function IAPage() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* En-tête de section */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          Assistant IA
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Outil d&rsquo;aide à la décision clinique basé sur les observations
          patient.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Panneau de saisie */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                  Symptômes et Observations
                </label>
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-bold">
                  Analyse Directe
                </span>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-64 p-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-700 placeholder:text-slate-300 resize-none leading-relaxed"
                placeholder="Décrivez ici l&rsquo;état du patient..."
              />

              <button className="w-full bg-slate-800 hover:bg-indigo-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                <span>Lancer l&rsquo;analyse</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Panneau de résultat */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 px-2">
            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
            <h2 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
              Dernier Diagnostic Généré
            </h2>
          </div>

          <AlerteIA
            diagnostic="Suspicion de paludisme. Orientation recommandée vers un centre de santé pour confirmation biologique."
            confiance={78}
            niveau="urgent"
          />

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-indigo-500">ℹ️</span>
              Notes d&rsquo;utilisation
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Le moteur IA de SmartTech Central analyse les motifs cliniques
              récurrents. Pour une précision optimale, incluez la durée des
              symptômes et les constantes vitales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
