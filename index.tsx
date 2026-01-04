import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ShieldCheck, 
  BarChart3, 
  CheckCircle, 
  Menu, 
  X, 
  TrendingUp, 
  Box, 
  Wallet, 
  Zap, 
  Layers, 
  Cpu, 
  RefreshCcw, 
  Truck, 
  Package, 
  Activity, 
  ArrowRight,
  Mail,
  Linkedin,
  User,
  Palette,
  Rocket,
  Code,
  Globe,
  Briefcase,
  Building2,
  Watch,
  Smartphone,
  Sparkles,
  ZapOff,
  ShoppingBag,
  Cpu as Processor,
  Workflow,
  Network,
  Globe2,
  CreditCard,
  Container,
  Lock,
  Eye,
  FileText,
  ShieldAlert
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'growth' | 'waitlist' | 'privacy';

interface TeamMember {
  name: string;
  role: string;
  icon?: React.ReactNode;
}

// --- Components ---

const Header = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string, id: Page }[] = [
    { label: 'About', id: 'about' },
    { label: 'Growth', id: 'growth' }
  ];

  const handleNav = (id: Page) => {
    setPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 pointer-events-none">
      <header className={`mx-auto max-w-5xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto border border-transparent flex items-center justify-between ${
        isScrolled || currentPage !== 'home'
        ? 'bg-black/80 backdrop-blur-2xl py-3 px-6 rounded-full border-white/5 shadow-2xl translate-y-2' 
        : 'bg-transparent py-4 px-4 translate-y-0'
      }`}>
        <div className="flex items-center cursor-pointer group" onClick={() => handleNav('home')}>
          <span className="text-xl md:text-2xl font-surge tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-500">
            SURGE
          </span>
          <div className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"></div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`relative transition-colors text-[9px] font-black uppercase tracking-[0.3em] group ${
                currentPage === link.id ? 'text-blue-400' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1.5 left-0 h-[1px] bg-blue-500 transition-all duration-300 ${
                currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
          <button 
            onClick={() => handleNav('waitlist')}
            className={`relative overflow-hidden group rounded-full text-[9px] font-black uppercase tracking-widest transition-all active:scale-95 ${
              currentPage === 'waitlist' 
              ? 'bg-blue-600 text-white px-8 py-3 shadow-lg shadow-blue-600/20' 
              : 'bg-white text-black px-8 py-3 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
            }`}
          >
            <span className="relative z-10">Waitlist</span>
            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-90 transition-transform" 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#010205]/98 backdrop-blur-3xl z-[110] transition-all duration-500 ease-in-out flex flex-col p-8 md:p-12 pointer-events-auto ${
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex justify-between items-center mb-16">
           <div className="flex items-center" onClick={() => handleNav('home')}>
              <span className="text-2xl font-surge tracking-tighter text-white">SURGE</span>
              <div className="ml-2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"></div>
           </div>
           <button 
            className="text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 active:scale-90 transition-transform" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-grow flex flex-col justify-center gap-10">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)} 
              className={`text-5xl xs:text-6xl font-surge tracking-tighter text-left transition-all duration-300 transform ${
                currentPage === link.id ? 'text-blue-500 translate-x-2' : 'text-zinc-700 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="h-[1px] w-full bg-white/5 my-4"></div>
          <button 
            onClick={() => handleNav('waitlist')}
            className={`text-left text-5xl xs:text-6xl font-surge tracking-tighter transition-all duration-300 ${
              currentPage === 'waitlist' ? 'text-blue-500 translate-x-2' : 'text-zinc-700 hover:text-white'
            }`}
          >
            Waitlist
          </button>
        </div>

        <div className="mt-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-4">Unified African Commerce</p>
          <div className="flex gap-6">
            <Linkedin size={20} className="text-zinc-700 hover:text-white transition-colors cursor-pointer" />
            <Mail size={20} className="text-zinc-700 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Page Components ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover opacity-15 brightness-[0.4]"
      >
        <source src="assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#010205] via-transparent to-[#010205]"></div>
    </div>

    <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 animate-in fade-in duration-700">
        <Zap className="w-3.5 h-3.5" />
        <span className="hidden xs:inline">The New Standard of</span> African Enterprise
      </div>
      <h1 className="text-4xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9] mb-10 md:mb-12 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        The <span className="gradient-text">Unified Heartbeat</span> <br className="hidden md:block"/> of African Trade
      </h1>
      <p className="text-zinc-500 text-base md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mb-12 md:mb-16 px-4 animate-in fade-in duration-1000 delay-200">
        One singular protocol for payments, logistics, and multi-node commerce across the African continent.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-in fade-in duration-1000 delay-300 w-full sm:w-auto px-6">
        <button 
          onClick={() => setPage('waitlist')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-[0.3em] px-12 py-5 sm:py-6 rounded-full transition-all active:scale-95 shadow-2xl shadow-blue-600/30 group flex items-center justify-center gap-3"
        >
          Get Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => setPage('about')}
          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black text-xs uppercase tracking-[0.3em] px-12 py-5 sm:py-6 rounded-full transition-all active:scale-95"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
);

const PrivacyPage = () => {
  return (
    <section className="pt-32 md:pt-48 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-24 md:mb-40">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-8">
            Data Integrity
          </div>
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 md:mb-12 leading-[1] md:leading-[0.9]">The Surge <br/> Data Protocol.</h2>
          <p className="text-zinc-500 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
            In building the unified heartbeat of African trade, we prioritize the sanctity of enterprise data. Transparency is our baseline, security is our architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 text-left border-t border-white/5 pt-24">
          <div className="space-y-16">
            <div className="group border-l border-white/5 pl-8 hover:border-blue-500/40 transition-all duration-500">
              <div className="mb-6 text-zinc-800 group-hover:text-blue-500 transition-colors">
                <ShieldCheck size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">I. Collection & Node Sync</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-medium">
                We collect essential telemetry, transaction markers, and logistics metadata required to route commerce across the Marvex network. This includes merchant identity, shipment origin/destination, and settlement tokens.
              </p>
              <ul className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700 space-y-2">
                <li>• Transaction Hashing</li>
                <li>• Multi-node Routing Data</li>
                <li>• Enterprise Verification Logs</li>
              </ul>
            </div>

            <div className="group border-l border-white/5 pl-8 hover:border-blue-500/40 transition-all duration-500">
              <div className="mb-6 text-zinc-800 group-hover:text-blue-500 transition-colors">
                <RefreshCcw size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">II. Purposeful Processing</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-medium">
                Data processed by Surge is used exclusively to stabilize the heartbeat of your business. This encompasses pathfinding for logistics, risk assessment for payments, and automated inventory balancing.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="group border-l border-white/5 pl-8 hover:border-blue-500/40 transition-all duration-500">
              <div className="mb-6 text-zinc-800 group-hover:text-blue-500 transition-colors">
                <Lock size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">III. Vault Architecture</h3>
              <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                We employ military-grade encryption for data-at-rest and TLS 1.3 for data-in-transit. Our infrastructure is compliant with regional African standards (NDPR) and international best practices (GDPR).
              </p>
            </div>

            <div className="group border-l border-white/5 pl-8 hover:border-blue-500/40 transition-all duration-500">
              <div className="mb-6 text-zinc-800 group-hover:text-blue-500 transition-colors">
                <Eye size={32} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">IV. Enterprise Rights</h3>
              <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                You retain absolute ownership of your trade data. At any point, enterprises can request data portability, audit logs, or complete erasure of their operational footprint on the Surge protocol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  const [vol, setVol] = useState(50000);
  const efficiency = Math.round(vol * 0.28);
  const scalingCap = Math.round(vol * 3.5);

  const architects: TeamMember[] = [
    { name: 'Ajiboso Toluwanimi', role: 'Founder/CEO' },
    { name: 'Aje-johnson Emmanuel', role: 'Co-founder/CTO' },
    { name: 'Akinyemi Kolapo', role: 'Co-founder/COO' }
  ];

  const foundingTeam: TeamMember[] = [
    { name: 'Ijimakin Tolulope', role: 'Chief of Design', icon: <Palette className="w-5 h-5" /> },
    { name: 'Adelakun Oluwatosin', role: 'Chief of Growth', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Okunola Matthew', role: 'Development', icon: <Code className="w-5 h-5" /> },
    { name: 'Cole Oluwadamilare', role: 'Development', icon: <Code className="w-5 h-5" /> },
    { name: 'Amusan Tomilola', role: 'Strategy & Advisory', icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <section className="pt-32 md:pt-48 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Expanded Vision Narrative */}
        <div className="max-w-5xl mx-auto mb-24 md:mb-40">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-8">
            The Vision
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-bold tracking-tighter mb-8 md:mb-12 leading-[1] md:leading-[0.9]">Unifying a <br/> Fragmented Continent.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
            <div className="space-y-6 md:space-y-8">
              <p>
                Fragmentation is the silent tax on African prosperity. Today, a merchant in Lagos or Nairobi must manage three different platforms just to sell, receive money, and ship a single order. This operational overhead stifles the growth of small and medium enterprises.
              </p>
              <p>
                Surge is the corrective protocol. We are building the <span className="text-white font-semibold">Unified Heartbeat</span> — a singular architecture where the transaction, the payment, and the movement of goods occur within the same digital nervous system.
              </p>
            </div>
            <div className="space-y-6 md:space-y-8">
              <p>
                Our mission is to enable <span className="text-white font-semibold">Pan-African fluid trade</span>. By integrating marketplace logic directly with regional payment gateways and 10,000+ logistics nodes, we remove the friction that slows down the heartbeat of commerce.
              </p>
              <p>
                We aren't just building a tool; we are building the <span className="text-white font-semibold">infrastructure for the next trillion dollars</span> in trade volume, ensuring that every business has the power of a global enterprise at its fingertips.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
          <div className="p-8 md:p-12 glass rounded-[2.5rem] md:rounded-[3rem] border-white/5 group hover:border-blue-500/20 transition-all duration-500">
             <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10 group-hover:scale-110 transition-transform">
                <Network size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-white">Unified Logistics</h3>
             <p className="text-zinc-600 text-sm leading-relaxed mb-6">
               A decentralized delivery protocol that connects local carriers, warehouses, and fleet managers into a single, real-time routing engine. 
             </p>
             <ul className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700 space-y-3">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500"/> Real-time Path Optimization</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500"/> Multi-modal Hub Integration</li>
             </ul>
          </div>
          <div className="p-8 md:p-12 glass rounded-[2.5rem] md:rounded-[3rem] border-white/5 group hover:border-blue-500/20 transition-all duration-500">
             <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10 group-hover:scale-110 transition-transform">
                <Workflow size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-white">Intelligent Commerce</h3>
             <p className="text-zinc-600 text-sm leading-relaxed mb-6">
               More than just a store — an adaptive commerce layer that predicts demand, manages multi-node inventory, and automates operations.
             </p>
             <ul className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700 space-y-3">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500"/> Smart Inventory Triggers</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500"/> Cross-Channel Syncing</li>
             </ul>
          </div>
          <div className="p-8 md:p-12 glass rounded-[2.5rem] md:rounded-[3rem] border-white/5 group hover:border-blue-500/20 transition-all duration-500">
             <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10 group-hover:scale-110 transition-transform">
                <CreditCard size={28} />
             </div>
             <h3 className="text-2xl font-bold mb-4 text-white">Frictionless Settlement</h3>
             <p className="text-zinc-600 text-sm leading-relaxed mb-6">
               Hardware-optimized payment flows designed for the speed of African street trade and high-volume digital marketplaces.
             </p>
             <ul className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700 space-y-3">
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500"/> Instant Edge Verification</li>
                <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500"/> Tiered Routing Protocol</li>
             </ul>
          </div>
        </div>

        {/* Recover Your Growth Calculator */}
        <div className="mb-24 md:mb-48 border-t border-white/5 pt-24 md:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight text-white">Recover <br/> Your Growth</h2>
              <p className="text-zinc-600 text-lg md:text-xl mb-10 md:mb-12 font-medium leading-relaxed">Infrastructure fragmentation is a hidden tax. Every disconnected tool costs you 15-30% in potential scale.</p>
              <div className="glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-blue-500/10">
                <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8 md:mb-10">Monthly Transaction Volume (USD)</label>
                <input 
                  type="range" min="5000" max="1000000" step="5000" value={vol} 
                  onChange={(e) => setVol(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-500 mb-8 md:mb-10"
                />
                <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter">${vol.toLocaleString()}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="p-8 md:p-10 glass rounded-[2.5rem] md:rounded-[3rem] flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 group border-l-4 border-l-blue-600">
                <div className="p-4 bg-blue-500/10 rounded-2xl md:rounded-3xl text-blue-500"><Zap size={32} /></div>
                <div>
                  <span className="text-[9px] md:text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Efficiency Gained</span>
                  <h3 className="text-3xl md:text-5xl font-bold mt-1 md:mt-2 tracking-tight text-white">+${efficiency.toLocaleString()}</h3>
                  <p className="text-zinc-700 text-[8px] md:text-[9px] mt-1 font-bold uppercase">Capital Recovered</p>
                </div>
              </div>
              <div className="p-8 md:p-10 glass rounded-[2.5rem] md:rounded-[3rem] flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 group border-l-4 border-l-blue-400">
                <div className="p-4 bg-blue-500/10 rounded-2xl md:rounded-3xl text-blue-400"><TrendingUp size={32} /></div>
                <div>
                  <span className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Scaling Potential</span>
                  <h3 className="text-3xl md:text-5xl font-bold mt-1 md:mt-2 tracking-tight text-white">${scalingCap.toLocaleString()}</h3>
                  <p className="text-zinc-700 text-[8px] md:text-[9px] mt-1 font-bold uppercase">Estimated Annual Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Architects - Minimal Unboxed Layout */}
        <div className="border-t border-white/5 pt-24 md:pt-32 text-center mb-24 md:mb-48">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">The Architects</h2>
          <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-20 md:mb-32">Leadership</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 max-w-6xl mx-auto">
            {architects.map((person, i) => (
              <div key={i} className="group relative text-left py-10 border-b border-white/5 hover:border-blue-500/40 transition-all duration-700">
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-12 flex items-center justify-center text-zinc-900 bg-white/[0.03] group-hover:bg-blue-500/5 group-hover:text-blue-500 transition-colors duration-700 rounded-sm">
                    <User size={32} strokeWidth={0.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-500">
                      {person.name}
                    </h3>
                    <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.5em]">
                      {person.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founding Team - Unboxed List Layout */}
        <div className="border-t border-white/5 pt-24 md:pt-32 text-center pb-32">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">Founding Team</h2>
          <p className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-20 md:mb-32">Driving the Vision</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 max-w-6xl mx-auto">
            {foundingTeam.map((member, i) => (
              <div key={i} className="group relative text-left border-l border-white/5 pl-8 hover:border-blue-500/40 transition-all duration-500">
                <div className="mb-6 h-12 flex items-center text-zinc-900 group-hover:text-blue-500 transition-colors duration-500">
                  <div className="flex items-center gap-4">
                    {member.icon || <User size={24} strokeWidth={1} />}
                    <div className="h-[1px] w-8 bg-zinc-900 group-hover:bg-blue-500 group-hover:w-12 transition-all duration-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white transition-all duration-500 group-hover:text-blue-400 leading-tight uppercase tracking-tighter">{member.name}</h3>
                  <p className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GrowthPage = () => {
  return (
    <section className="pt-32 md:pt-48 pb-32 px-6" id="contact-section">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center pt-24 md:pt-32">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">Partner with Surge</h2>
          <p className="text-zinc-600 text-lg md:text-2xl mb-12 font-medium">Contribute to our pre-seed mission and help us build the future of African commerce.</p>
          
          <div className="mb-10 text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Direct Correspondence</div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a href="mailto:toluwanimiajiboso03@gmail.com" className="p-6 md:p-8 glass rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group shadow-xl" title="Email Founder">
              <Mail className="text-blue-500 group-hover:scale-110 transition-transform" size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ajiboso-toluwanimi-819834218/" target="_blank" rel="noopener noreferrer" className="p-6 md:p-8 glass rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group shadow-xl" title="Founder LinkedIn">
              <Linkedin className="text-blue-500 group-hover:scale-110 transition-transform" size={28} />
            </a>
            <a href="https://linkedin.com/company/marvexco" target="_blank" rel="noopener noreferrer" className="p-6 md:p-8 glass rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-blue-500/30 transition-all group shadow-xl" title="Company LinkedIn">
              <Building2 className="text-blue-500 group-hover:scale-110 transition-transform" size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const WaitlistPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="pt-32 md:pt-48 pb-48 md:pb-64 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        {status !== 'success' ? (
          <>
            <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-bold mb-10 md:mb-12 tracking-tighter leading-[1] md:leading-[0.85] text-balance">The Surge <br/><span className="gradient-text">Protocol</span></h2>
            <p className="text-zinc-600 text-lg md:text-2xl mb-12 md:mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              Register your interest for the initial private release. Early partners receive tiered routing discounts and priority API access.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-2xl mx-auto p-2 glass rounded-2xl md:rounded-full border-white/10">
              <input 
                type="email" 
                required 
                placeholder="founder@enterprise.africa" 
                className="flex-grow bg-transparent py-5 md:py-6 px-8 md:px-10 focus:outline-none text-white font-medium text-lg placeholder:text-zinc-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black text-[10px] uppercase tracking-[0.4em] px-12 py-5 md:py-6 rounded-full transition-all active:scale-95 shadow-xl shadow-blue-600/30 whitespace-nowrap"
              >
                {status === 'loading' ? 'Verifying...' : 'Join Waitlist'}
              </button>
            </form>
          </>
        ) : (
          <div className="animate-in zoom-in-95 duration-700">
            <div className="w-20 h-20 md:w-32 md:h-32 bg-blue-500/10 text-blue-500 rounded-3xl md:rounded-[3rem] flex items-center justify-center mx-auto mb-10 border border-blue-500/20">
              <CheckCircle className="w-10 h-10 md:w-14 md:h-14" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter">Connection Secured</h2>
            <p className="text-zinc-500 text-lg md:text-2xl mb-12 font-medium">
              We've registered <span className="text-white font-bold">{email}</span>. A representative will contact you shortly.
            </p>
            <button onClick={() => setStatus('idle')} className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] underline underline-offset-8">Add another node</button>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Footer Component ---

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => {
  const handleContactClick = () => {
    setPage('growth');
    setTimeout(() => {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="py-20 md:py-32 border-t border-white/5 bg-transparent px-6 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-20 md:mb-24">
          <div className="max-w-md mx-auto md:mx-0">
            <span className="text-3xl font-surge text-white mb-6 md:mb-8 block">SURGE</span>
            <p className="text-zinc-600 text-lg font-medium leading-relaxed mb-8 md:mb-10">
              The unified commerce foundation for the African future. Consolidating logistics, payments, and trade into one heartbeat.
            </p>
            <div className="flex justify-center md:justify-start gap-8">
              <a href="https://linkedin.com/company/marvexco" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-blue-500 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 md:gap-16 w-full md:w-auto">
            <div>
              <h4 className="text-blue-500 font-bold mb-6 md:mb-8 text-[10px] uppercase tracking-[0.4em]">Protocol</h4>
              <ul className="space-y-4 text-sm text-zinc-600 font-medium">
                <li><button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="hover:text-blue-500 transition-colors">About</button></li>
                <li><button onClick={() => { setPage('growth'); window.scrollTo(0, 0); }} className="hover:text-blue-500 transition-colors">Growth</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold mb-6 md:mb-8 text-[10px] uppercase tracking-[0.4em]">Foundation</h4>
              <ul className="space-y-4 text-sm text-zinc-600 font-medium">
                <li><button onClick={() => { setPage('privacy'); window.scrollTo(0, 0); }} className="hover:text-blue-500 transition-colors">Privacy</button></li>
                <li><button onClick={handleContactClick} className="hover:text-blue-500 transition-colors">Contact</button></li>
                <li><button className="hover:text-blue-500 transition-colors">Terms</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] md:text-[10px] font-black text-white/5 tracking-[0.4em] uppercase">
          <p className="text-center md:text-left">© 2024 Surge • Built for the Pan-African Future.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch(page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'about': return <AboutPage />;
      case 'growth': return <GrowthPage />;
      case 'waitlist': return <WaitlistPage />;
      case 'privacy': return <PrivacyPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden flex flex-col">
      <Header currentPage={page} setPage={setPage} />
      <main className="flex-grow">
        <div key={page} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderPage()}
        </div>
      </main>
      <Footer setPage={setPage} />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);