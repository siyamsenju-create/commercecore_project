import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: 'Lightning Fast API',
    description: 'High-performance GraphQL and REST endpoints designed for sub-100ms response times.'
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: 'Enterprise Security',
    description: 'Built-in RBAC, JWT auth, and rate limiting to keep your multi-tenant data safe.'
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: 'Multi-Tenant Scale',
    description: 'True logical isolation so you can host thousands of stores from a single engine.'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          The Ultimate <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
            Headless Commerce Engine
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12">
          Production-grade multi-tenant backend with modular architecture, powering the next generation of scalable online stores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/products" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Explore Stores <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/dashboard" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold text-lg flex items-center justify-center transition-all hover:scale-105 border border-slate-700">
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-slate-900/50 py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 rounded-2xl flex flex-col items-start transition-transform hover:-translate-y-2">
              <div className="p-3 bg-slate-800 rounded-lg mb-6 shadow-lg border border-slate-700">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
