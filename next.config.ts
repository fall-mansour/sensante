import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // On s'attend à une erreur ici car le type NextConfig peut varier
  // selon la version et ne pas reconnaître explicitement 'eslint'
  // @ts-expect-error: 'eslint' might not be recognized in some NextConfig versions
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
