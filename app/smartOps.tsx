"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Wallet, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Rocket, 
  Code2, 
  Zap, 
  Globe, 
  Terminal as TerminalIcon,
  CheckCircle2,
  Clock,
  TrendingDown,
  ChevronRight,
  Menu,
  X,
  Layers,
  Settings,
  Download,
  Share2,
  Box,
  Lock,
  Loader2,
  AlertCircle,
  History,
  LayoutDashboard,
  Timer
} from 'lucide-react';


const PIPELINE_DATA = [
  {
    category: "I. SOURCE & COMPILE",
    steps: [
      { id: 1, title: "Connect Git Source", desc: "Repository: monad-dex-v2", icon: <Github size={20} />, status: "complete" },
      { id: 2, title: "Solidity Fetcher", desc: "12 contracts identified", icon: <Code2 size={20} />, status: "complete" },
      { id: 3, title: "Compile Bytecode", desc: "Compiling via solc 0.8.24...", icon: <Cpu size={20} />, status: "loading" },
    ]
  },
  {
    category: "II. SHIELD & DEPLOY",
    steps: [
      { id: 4, title: "Security Audit", desc: "Pending bytecode...", icon: <ShieldCheck size={20} />, status: "pending" },
      { id: 5, title: "Testnet Simulation", desc: "Monad Devnet v1", icon: <Activity size={20} />, status: "disabled" },
      { id: 6, title: "Live Deployment", desc: "Mainnet Orchestration", icon: <Rocket size={20} />, status: "locked" },
    ]
  },
  {
    category: "III. SDK & OPS",
    steps: [
      { id: 7, title: "ABI & SDK Generation", desc: "Typescript & Python", icon: <Layers size={20} />, status: "pending" },
      { id: 8, title: "API Access Setup", desc: " Endpoints", icon: <Globe size={20} />, status: "disabled" },]
  }
];

const SmartOps = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [activeTab, setActiveTab] = useState('pipeline');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Landing Page sem "Saiba Mais"
  if (!isLogged) {
    return (
      <div className="min-h-screen bg-[#060612] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#3b00a3_0%,transparent_60%)] opacity-20 pointer-events-none" />
        
        <div className="relative z-10 text-center max-w-xl">
          <div className="bg-[#1a1a3a] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.3)]">
            <Zap className="text-purple-400 fill-purple-400" size={40} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic italic-gradient">
            SmartOps
          </h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            A infraestrutura DevOps para Web3.
            <br />Automatize o ciclo de vida dos seus Smart Contracts do push ao monitoramento.
          </p>
          
          <button 
            onClick={() => setIsLogged(true)}
            className="w-full flex items-center justify-center gap-3 bg-white text-black font-black py-5 px-8 rounded-2xl hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/10"
          >
            <Github size={24} />
            CONECTAR COM GITHUB
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060612] text-gray-200 flex font-sans">
      
      {/* Sidebar Desktop  */}
      {!isMobile && (
        <aside className="w-72 bg-[#0a0a1f] border-r border-white/5 flex flex-col p-6 sticky top-0 h-screen">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-purple-600 p-2 rounded-xl">
              <Zap size={20} className="text-white fill-white" />
            </div>
            <h2 className="text-2xl font-black tracking-tighter italic">SmartOps</h2>
          </div>

          <nav className="space-y-2 flex-1">
            <SidebarLink icon={<Box size={18} />} label="Pipeline" active />
            <SidebarLink icon={<Download size={18} />} label="Download SDK" />
            <SidebarLink icon={<Globe size={18} />} label="Access API" />
            <SidebarLink icon={<History size={18} />} label="Build History" />
          </nav>

          <div className="mt-auto p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-white/10 text-xs">GH</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">monad-dev-hacker</p>
                <p className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Online</p>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-20 px-6 flex items-center justify-between border-b border-white/5 bg-[#060612]/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-3">
             {isMobile && <Box className="text-purple-500" size={24} />}
             <h2 className="text-xl font-bold tracking-tight italic">
               SmartOps <span className="text-purple-500 not-italic ml-1">Pipeline</span>
             </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-gray-400">0x71C...4f3</span>
            </div>
            <button className="p-2.5 hover:bg-white/5 rounded-xl transition-colors border border-white/5">
              <Settings size={20} className="text-gray-400" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-10 pb-32 lg:pb-10">
          
          {/* Coluna Pipeline  */}
          <div className="flex-1 space-y-10">
            
            {/* Status do Deploy */}
            <section className="bg-[#12122b]/50 rounded-[2rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-bold text-purple-400 uppercase tracking-[0.2em]">Current Status</span>
                  <span className="text-xl font-black text-white italic">3/9 Steps</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white italic mb-6">Deploying to Testnet</h3>
                
                <div className="h-4 w-full bg-white/5 rounded-full mb-6 p-[3px] overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-1000"
                    style={{ width: `33%` }}
                  />
                </div>
                
                <div className="flex items-center gap-3 text-gray-400 text-xs">
                  <Loader2 size={16} className="animate-spin text-purple-500" />
                  <span className="font-medium tracking-wide italic">Optimizing bytecode for Monad EVM...</span>
                </div>
              </div>
            </section>

            {/* Lista de Categorias e Passos */}
            <div className="space-y-14 relative">
              {/* Linha Conectora Vertical  */}
              <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-white/5" />

              {PIPELINE_DATA.map((cat, catIdx) => (
                <div key={catIdx} className="relative z-10">
                  <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 ml-2 opacity-80">
                    {cat.category}
                  </h4>
                  
                  <div className="space-y-6">
                    {cat.steps.map((step) => (
                      <div key={step.id} className="flex gap-6 items-center">
                        {/* Ícone Lateral Circular com Glow */}
                        <div className={`w-15 h-15 min-w-[60px] min-h-[60px] rounded-2xl flex items-center justify-center border-2 transition-all duration-700 shadow-xl ${
                          step.status === 'complete' ? 'bg-blue-600 border-blue-400/50 shadow-blue-500/20' :
                          step.status === 'loading' ? 'bg-[#1a1a3a] border-purple-500 shadow-purple-500/50 animate-pulse' :
                          'bg-[#0a0a1a] border-white/5 opacity-40 grayscale'
                        }`}>
                          {step.status === 'complete' ? <CheckCircle2 className="text-white" size={26} /> : 
                           step.status === 'loading' ? <div className="text-purple-400">{step.icon}</div> :
                           <div className="text-gray-500">{step.icon}</div>}
                        </div>

                        {/* Card do Passo (Fiel ao design da imagem) */}
                        <div className={`flex-1 bg-[#12122b]/60 border-2 rounded-[1.5rem] p-6 flex items-center justify-between transition-all ${
                          step.status === 'loading' ? 'border-purple-500/50 bg-[#12122b]' : 'border-white/5 opacity-80'
                        }`}>
                          <div>
                            <h5 className={`font-bold text-lg tracking-tight ${step.status === 'locked' || step.status === 'disabled' ? 'text-gray-600' : 'text-white'}`}>
                              {step.title}
                            </h5>
                            <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            {step.status === 'complete' && <CheckCircle2 size={20} className="text-green-500" />}
                            {step.status === 'loading' && <Timer size={20} className="animate-spin text-purple-400" />}
                            {step.status === 'locked' && <Lock size={20} className="text-gray-800" />}
                            {step.status === 'pending' && <Clock size={20} className="text-gray-800" />}
                            {step.status === 'disabled' && <AlertCircle size={20} className="text-gray-800" />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal Desktop (Lateral no Web) */}
          <div className="lg:w-[400px] flex flex-col space-y-6">
            <section className="bg-[#050510] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[500px] lg:h-[650px] sticky top-28">
              <div className="bg-[#12122b] px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TerminalIcon size={16} className="text-purple-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Live Logs</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Active</span>
                </div>
              </div>
              
              <div className="p-6 font-mono text-[11px] md:text-[12px] space-y-4 overflow-y-auto flex-1 leading-relaxed">
                <div className="flex gap-3"><span className="text-gray-600">09:40:15</span> <span className="text-blue-500 font-bold">[BUILD]</span> <span className="text-gray-300">Compiling smart contracts...</span></div>
                <div className="flex gap-3"><span className="text-gray-600">09:41:05</span> <span className="text-purple-500 font-bold">[PROC]</span> <span className="text-gray-300">Generating bytecode for MonadBFT...</span></div>
                <div className="flex gap-3"><span className="text-gray-600">09:41:08</span> <span className="text-green-500 font-bold">[OK]</span> <span className="text-gray-300 italic">Bytecode optimized. SHA-256: 8f2c...e12a</span></div>
                
                <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl text-purple-400">
                  <div className="flex gap-2 font-bold animate-pulse">
                    <span>$</span>
                    <span className="border-r-4 border-purple-500 pr-1 truncate">monad-deploy --network testnet --contract MonadVault</span>
                  </div>
                </div>
                
                <div className="text-gray-600 pt-4 border-t border-white/5 italic">
                  Aguardando confirmação do bloco...
                </div>
              </div>

              {/* Ações Rápidas Terminal */}
              <div className="p-4 grid grid-cols-2 gap-3 bg-[#0a0a1f] border-t border-white/10">
                <button className="bg-white/5 hover:bg-white/10 text-[10px] font-bold py-3 rounded-xl transition-all uppercase tracking-widest border border-white/5">Export ABI</button>
                <button className="bg-purple-600 hover:bg-purple-500 text-[10px] font-bold py-3 rounded-xl transition-all uppercase tracking-widest">Abort Build</button>
              </div>
            </section>
          </div>
        </main>

        {/* Barra de Navegação Inferior ( Mobile) */}
        {isMobile && (
          <nav className="fixed bottom-0 left-0 right-0 h-24 bg-[#0a0a1f]/95 backdrop-blur-3xl border-t border-white/10 flex items-center justify-around px-2 z-50">
            <NavButton icon={<Box />} label="PIPELINE" active />
            <NavButton icon={<Download />} label="SDK" />
            <NavButton icon={<Globe />} label="ACCESS API" />
           
          </nav>
        )}
      </div>
    </div>
  );
};

// Componentes Auxiliares
interface SidebarLinkProps {
  icon: React.ReactNode;  // Ou JSX.Element, dependendo do uso
  label: string;
  active?: boolean;  // Opcional, com valor padrão
}

const SidebarLink = ({ icon, label, active = false }: SidebarLinkProps) => (
  <a href="#" className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold ${
    active ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'text-gray-500 hover:bg-white/5 hover:text-white'
  }`}>
    {icon}
    <span className="text-sm tracking-tight">{label}</span>
    {active && <ChevronRight className="ml-auto" size={16} />}
  </a>
);

interface NavButtonProps {
  icon: React.ReactElement<{ size?: number }>;
  label: string;
  active?: boolean;
}
const NavButton = ({ icon, label, active = false }: NavButtonProps) => (
  <button className={`flex flex-col items-center gap-2 transition-all ${active ? 'text-purple-500' : 'text-gray-500'}`}>
    <div className={`transition-all duration-300 ${active ? 'bg-purple-500/10 p-3 rounded-2xl border border-purple-500/30 -translate-y-1' : 'p-2'}`}>
      {React.cloneElement(icon, { size: active ? 28 : 24 })}
    </div>
    <span className="text-[9px] font-black tracking-[0.2em]">{label}</span>
  </button>
);

export default SmartOps;