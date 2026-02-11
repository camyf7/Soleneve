/** @type {import('next').NextConfig} */
const nextConfig = {
  // SUAS CONFIGURAÇÕES ATUAIS
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // NOVAS CONFIGURAÇÕES PARA RESOLVER OS ERROS
  turbopack: false,  // DESATIVA O TURBOPACK
  
  allowedDevOrigins: ['localhost', '10.81.205.37', '192.168.*', '10.*']  // RESOLVE O CORS
}

export default nextConfig