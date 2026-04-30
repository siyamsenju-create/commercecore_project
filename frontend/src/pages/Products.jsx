import { useState, useEffect } from 'react';
import { Package, ShoppingCart, Search, Filter } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Premium Wireless Headphones', price: 299.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600', category: 'Electronics' },
    { id: 2, name: 'Minimalist Mechanical Keyboard', price: 149.50, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600', category: 'Electronics' },
    { id: 3, name: 'Ergonomic Office Chair', price: 499.00, image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=600', category: 'Furniture' },
    { id: 4, name: 'Smart Home Hub', price: 129.99, image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=600', category: 'Smart Home' },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products Catalog</h1>
          <p className="text-slate-400 mt-2">Explore the inventory for your active store.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm"
            />
          </div>
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg font-medium border border-slate-700 transition-colors text-sm">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="glass rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all group flex flex-col">
            <div className="relative h-48 overflow-hidden bg-slate-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-xs px-2 py-1 rounded-md text-slate-300 font-medium border border-slate-700">
                {product.category}
              </span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
              <p className="text-xl font-bold text-blue-400 mt-auto">${product.price.toFixed(2)}</p>
              
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
