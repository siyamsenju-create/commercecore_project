import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import { Store, ShoppingCart, User, Package } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center border-b border-slate-700/50">
          <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 text-primary-color">
            <Store className="w-8 h-8 text-blue-500" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              CommerceCore
            </span>
          </Link>
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/products" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <Package className="w-4 h-4" /> Products
            </Link>
            <Link to="/cart" className="hover:text-blue-400 transition-colors relative flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Cart
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/dashboard" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <User className="w-4 h-4" /> Dashboard
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            {/* Fallback */}
            <Route path="*" element={<div className="p-8 text-center text-xl">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
