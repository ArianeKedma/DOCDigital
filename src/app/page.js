// page.js
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <main className="text-center p-6">
        <img
          src="/macaco.png"
          alt="Donkey Mascote"
          className="w-50 h-35 rounded-full mb-2 mx-auto"
        />
        <h1 className="text-3xl font-bold mb-2">
          Bem-vindo ao <span className="text-blue-400">DOC Digital</span>
        </h1>
        <p className="text-sm mb-6">
          Antes de ter acesso à planilha <br />
          precisamos saber seu nível de acesso
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Botão Representante */}
          <Link href="/representante" legacyBehavior>
            <a
              className="cursor-pointer hover:shadow-lg text-white pulse-hover"
              style={{
                border: '3px solid #5a79ff', // borda
                padding: '6px',               // espaço entre borda e fundo
                display: 'inline-block',
                borderRadius: '16px',         // arredonda a borda externa
              }}
            >
              <div
                style={{
                  backgroundColor: '#120a8f', // fundo azul
                  padding: '16px 32px',       // espaço interno
                  borderRadius: '12px',       // arredonda dentro (um pouco menor)
                }}
              >
                <h2 className="font-semibold">Sou Representante</h2>
              </div>
            </a>
          </Link>

          {/* Botão Administrador */}
          <Link href="/administrador" legacyBehavior>
            <a
              className="cursor-pointer hover:shadow-lg text-white pulse-hover"
              style={{
                border: '3px solid #4ebeff',
                padding: '6px',
                display: 'inline-block',
                borderRadius: '16px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#0979b0',
                  padding: '16px 32px',
                  borderRadius: '12px',
                }}
              >
                <h2 className="font-semibold">Sou Administrador</h2>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
