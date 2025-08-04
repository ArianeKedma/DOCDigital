import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <header className="w-full flex flex-col items-center border-b">
        <div className="w-full flex justify-between items-center p-4 text-lg font-bold">
          <img src="/logo.png" alt= "Imagem da Logo" className='w-24 h-24 roundead-full mb-2'></img>
          <div className="space-x-4">
            <a href="#">Devs</a>
            <a href="#">About</a>
          </div>
        </div>
      </header>

      <main className="text-center p-6">
        <img src="/logo.png" alt= "Imagem da Logo" className='w-24 h-24 roundead-full mb-2'></img>
        <h1 className="text-3xl font-bold mb-2">Bem-vindo ao DOC Digital</h1>
        <p className="text-sm mb-6">
          Antes de ter acesso à planilha <br />
          precisamos saber seu nível de acesso
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/representante">  
            <div className="border-2 p-6 rounded cursor-pointer hover:shadow-lg">
              <h2 className="font-semibold">Sou Representante</h2>
              <p className="text-3xl mt-2">👨‍🎓</p>
            </div>
          </Link> 
          <Link href="/administrador">
            <div className="border-2 p-6 rounded cursor-pointer hover:shadow-lg">
              <h2 className="font-semibold">Sou Administrador</h2>
              <p className="text-3xl mt-2">👨‍💼</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="w-full text-center p-4 border-t text-sm">
        Footer
      </footer>
    </div>
  );
}