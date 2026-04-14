import PatientCard from "@/components/PatientCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        SénSanté
      </h1>

      <p className="text-gray-600 mb-8">
        Assistant de santé communautaire avec IA
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Patients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PatientCard
          nom="Dieynaba Ndiaye"
          fonction="Médecin"
          groupe="GP7"
        />

        <PatientCard
          nom="Idrissa Sow"
          fonction="Pilote"
          groupe="GP7"
        />

        <PatientCard
          nom="Maguette Gaye"
          fonction="Gardien"
          groupe="GP7"
        />
      </div>

      <p className="text-xs text-gray-400 italic mt-8">
        Ceci n'est pas un outil médical.
        Consultez un professionnel de santé.
      </p>
    </main>
  );
}