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
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao <span className="text-blue-400">DOC Digital</span></h1>
        <p className="text-sm mb-6">
          Antes de ter acesso à planilha <br />
          precisamos saber seu nível de acesso
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/representante" legacyBehavior>
            <a
              className="p-6 rounded cursor-pointer hover:shadow-lg text-white pulse-hover"
              style={{
                backgroundColor: '#120a8f',
                border: '2px solid #120a8f',
                display: 'block',
              }}
            >
              <h2 className="font-semibold">Sou Representante</h2>
              <p className="text-3xl mt-2"></p>
            </a>
          </Link>
          <Link href="/administrador" legacyBehavior>
            <a
              className="p-6 rounded cursor-pointer hover:shadow-lg text-white pulse-hover"
              style={{
                backgroundColor: '#0979b0',
                border: '2px solid #0979b0',
                display: 'block',
              }}
            >
              <h2 className="font-semibold">Sou Administrador</h2>
              <p className="text-3xl mt-2"></p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}