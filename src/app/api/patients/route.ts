import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET /api/patients --- Lister tous les patients (PROTÉGÉ)
export async function GET() {
  try {
    // 1. Vérification de la session côté serveur
    const session = await getServerSession(authOptions);

    // 2. Blocage si l'utilisateur n'est pas connecté
    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    // 3. Si authentifié, récupération des données
    const patients = await prisma.patient.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 },
    );
  }
}

// POST /api/patients --- Créer un patient (PROTÉGÉ)
export async function POST(request: Request) {
  try {
    // 1. Vérification de la session côté serveur
    const session = await getServerSession(authOptions);

    // 2. Blocage si l'utilisateur n'est pas connecté
    if (!session) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    // 3. Si authentifié, création du patient
    const body = await request.json();
    const patient = await prisma.patient.create({
      data: {
        nom: body.nom,
        prenom: body.prenom,
        dateNaissance: new Date(body.dateNaissance),
        sexe: body.sexe,
        telephone: body.telephone || null,
        adresse: body.adresse || null,
        region: body.region,
      },
    });
    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la création" },
      { status: 500 },
    );
  }
}
