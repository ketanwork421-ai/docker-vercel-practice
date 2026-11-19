
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
          DevOps & Cloud Practice
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My First Cloud Deployment
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Learning Docker, WSL, Linux, Next.js, GitHub and Cloud Deployment
          through hands-on practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-slate-800 p-5 rounded-xl">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">Docker</h2>
            <p className="text-slate-300 text-sm">
              Containerization and running applications.
            </p>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">WSL & Linux</h2>
            <p className="text-slate-300 text-sm">
              Exploring Ubuntu and Linux commands.
            </p>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">Vercel</h2>
            <p className="text-slate-300 text-sm">
              Deploying websites to the cloud.
            </p>
          </div>
        </div>

        <p className="text-slate-500 text-sm mt-10">
          Built with Next.js | DevOps Learning Project
        </p>
      </div>
    </main>
  );
}
