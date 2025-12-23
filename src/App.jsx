import React from 'react';
import { Github, Linkedin, Mail, Code2, Terminal, ShieldAlert, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-cyan/10 via-transparent to-transparent -z-10" />
        
        <p className="text-cyber-cyan font-mono tracking-[0.3em] mb-4 animate-pulse uppercase">Desenvolvedor Web & Inovador</p>
        <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white to-cyber-cyan bg-clip-text text-transparent">
          NELTON AMBATE
        </h1>
        
        <div className="max-w-2xl glass-card p-6 border-l-4 border-cyber-cyan rounded-r-xl">
          <p className="italic text-gray-300">
            "Se você não gosta do seu destino, não o aceite. Em vez disso, tenha a coragem de mudá-lo do jeito que você quer que ele seja."
          </p>
          <span className="block mt-2 text-cyber-cyan font-bold">— Naruto Uzumaki</span>
        </div>

        <div className="mt-12 flex gap-4">
          <a href="#projetos" className="bg-cyber-cyan text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition">Ver Projetos</a>
          <a href="#contato" className="border border-gray-700 px-8 py-3 rounded-full hover:border-cyber-cyan transition">Contato</a>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyber-cyan font-mono">01.</span> Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-400 text-lg">
          <div className="space-y-6">
            <p>
              Sou o <span className="text-white">Nelton Ambate</span>, moçambicano de 17 anos. Uso a tecnologia para criar soluções que impactam a sociedade.
            </p>
            <p className="border-l-2 border-cyber-purple pl-4">
              Fluente em Inglês, especialista em <span className="text-cyber-cyan">React e Cordova</span>, e atualmente explorando o mundo do Pentest com <span className="text-cyber-purple">Kali Linux</span>.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Terminal size={20}/> Skills</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {['React', 'JavaScript', 'HTML/CSS', 'Cordova', 'Kali Linux', 'Pentesting'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-cyber-cyan font-mono">02.</span> Projetos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-2xl hover:border-cyber-cyan transition group">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyber-cyan transition">App Cozinha Moçambicana</h3>
            <p className="text-gray-400 mb-4">Preservando a culinária moçambicana com tecnologia React e Cordova.</p>
          </div>
          <div className="glass-card p-8 rounded-2xl hover:border-cyber-purple transition group">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyber-purple transition">Plataforma de Estudos</h3>
            <p className="text-gray-400 mb-4">Inovação na educação facilitando o acesso a materiais de estudo.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-cyber-cyan transition"><Github /></a>
          <a href="#" className="text-gray-400 hover:text-cyber-cyan transition"><Linkedin /></a>
          <a href="#" className="text-gray-400 hover:text-cyber-cyan transition"><Mail /></a>
        </div>
        <p className="text-gray-600 font-mono text-sm">Nelton Ambate • Moçambique • 2024</p>
      </footer>
    </div>
  );
}