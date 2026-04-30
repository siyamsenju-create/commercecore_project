import { useState, useEffect } from 'react';
import axios from 'axios';
import { Store, Plus, Activity, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would point to the backend API
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stores');
        setStores(response.data.data || []);
      } catch (error) {
        console.error('Error fetching stores:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenant Dashboard</h1>
          <p className="text-slate-400 mt-2">Manage your multi-tenant stores and view global analytics.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium transition-colors">
          <Plus className="w-5 h-5" /> New Store
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg"><Store className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-slate-300">Total Stores</h3>
          </div>
          <p className="text-4xl font-bold">{stores.length}</p>
        </div>
        <div className="glass p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/20 text-green-400 rounded-lg"><Activity className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-slate-300">Active Sessions</h3>
          </div>
          <p className="text-4xl font-bold">1,248</p>
        </div>
        <div className="glass p-6 rounded-xl border border-slate-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg"><DollarSign className="w-6 h-6" /></div>
            <h3 className="text-lg font-semibold text-slate-300">Platform GMV</h3>
          </div>
          <p className="text-4xl font-bold">$42.5k</p>
        </div>
      </div>

      {/* Stores List */}
      <div>
        <h2 className="text-xl font-bold mb-6">Registered Stores</h2>
        {loading ? (
          <div className="text-center py-12 text-slate-400">Loading stores...</div>
        ) : stores.length === 0 ? (
          <div className="glass p-12 text-center rounded-xl border border-slate-800">
            <Store className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">No stores found</h3>
            <p className="text-slate-500">Create your first tenant store to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div key={store._id} className="glass p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{store.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium uppercase tracking-wider ${
                    store.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {store.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{store.domain}</p>
                <div className="flex justify-between text-sm text-slate-500 border-t border-slate-700/50 pt-4 mt-auto">
                  <span>Plan: <strong className="text-slate-300 capitalize">{store.plan}</strong></span>
                  <span>{store.settings?.currency || 'USD'}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
