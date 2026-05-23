import React from 'react';

export default function Page() {
  return (
    <div className="flex h-screen w-full bg-[#F1F5F9] text-[#1E293B] font-sans overflow-hidden">
      <aside className="w-64 bg-[#0F172A] text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-xl font-bold tracking-tight text-indigo-400">Smart Trailer</h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">
            Manager v2.4
          </p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <div className="flex items-center space-x-3 bg-indigo-600 px-3 py-2 rounded-lg text-white font-medium cursor-pointer">
            <div className="w-4 h-4 bg-white/20 rounded"></div>
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <div className="w-4 h-4 border border-slate-500 rounded"></div>
            <span>Fleet Management</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <div className="w-4 h-4 border border-slate-500 rounded"></div>
            <span>Clients & B2B</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <div className="w-4 h-4 border border-slate-500 rounded"></div>
            <span>Workshop Orders</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <div className="w-4 h-4 border border-slate-500 rounded"></div>
            <span>Inventory & Parts</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <div className="w-4 h-4 border border-slate-500 rounded"></div>
            <span>Financial (GoBD)</span>
          </div>
        </nav>
        <div className="p-4 border-t border-slate-700 bg-slate-900/50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">
              JK
            </div>
            <div>
              <p className="text-sm font-medium">Jan Kowalski</p>
              <p className="text-[10px] text-slate-500 uppercase">Administrator</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <h2 className="text-lg font-semibold">System Overview</h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs text-slate-500">Server Status</p>
              <p className="text-xs font-medium text-emerald-600">PostgreSQL Linked</p>
            </div>
            <div className="w-10 h-10 rounded bg-slate-100 border border-slate-200"></div>
          </div>
        </header>
        <div className="flex-1 p-8 space-y-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Active Rentals
              </p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">42</p>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  +12%
                </span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Workshop Status
              </p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">15</p>
                <span className="text-xs font-medium text-amber-600">8 Pending</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Low Stock Alerts
              </p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-rose-600">3</p>
                <span className="text-xs font-medium text-slate-400">SKU level</span>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                Monthly Revenue
              </p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">148,5k</p>
                <span className="text-xs font-medium text-slate-400">PLN</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="font-bold text-sm">Recent Vehicle Rentals & Protocols</h3>
                <button className="text-xs text-indigo-600 font-semibold cursor-pointer hover:text-indigo-800">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 text-[10px] uppercase text-slate-500 font-bold">
                    <tr className="border-b border-slate-100">
                      <th className="px-6 py-3 whitespace-nowrap">Trailer ID</th>
                      <th className="px-6 py-3 whitespace-nowrap">Client</th>
                      <th className="px-6 py-3 whitespace-nowrap">Term / End Date</th>
                      <th className="px-6 py-3 whitespace-nowrap">Status</th>
                      <th className="px-6 py-3 text-right whitespace-nowrap">Deposit</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">PL-KR-20394</td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">Logistics Hub Sp. z o.o.</td>
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">2024-05-15</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded uppercase">
                          Handover
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">2.500 PLN</td>
                    </tr>
                    <tr className="bg-slate-50/30">
                      <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">DE-BER-9912</td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">Trans-Global GmbH</td>
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">2024-05-12</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">
                          Pending Return
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">1.200 PLN</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">PL-WA-00122</td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">Piotr Nowak (B2C)</td>
                      <td className="px-6 py-4 text-slate-500 text-rose-500 font-medium whitespace-nowrap">Overdue</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold rounded uppercase">
                          Handover
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">500 PLN</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">PL-GD-88712</td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">Nordic Express</td>
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">2024-06-01</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded uppercase">
                          Planned
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">3.000 PLN</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-xs whitespace-nowrap">PL-KR-11223</td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">Bud-Rem Budownictwo</td>
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">2024-05-10</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded uppercase">
                          Returned
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">0 PLN</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <h3 className="font-bold text-sm">Critical Maintenance</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                  <div className="space-y-1">
                    <p className="text-xs font-bold">VIN: 4X9T...1022</p>
                    <p className="text-[10px] text-slate-400">TUV Valid Until: 2024-05-20</p>
                  </div>
                  <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded">
                    5 DAYS
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                  <div className="space-y-1">
                    <p className="text-xs font-bold">VIN: 1B2B...9931</p>
                    <p className="text-[10px] text-slate-400">UVV Valid Until: 2024-06-01</p>
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                    12 DAYS
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-50">
                  <div className="space-y-1">
                    <p className="text-xs font-bold">VIN: 7G8Y...1100</p>
                    <p className="text-[10px] text-slate-400">Insurance Exp: 2024-05-25</p>
                  </div>
                  <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded">
                    10 DAYS
                  </span>
                </div>
                <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                  <h4 className="text-[10px] font-bold text-indigo-700 uppercase mb-2">
                    Work Order Insights
                  </h4>
                  <div className="flex items-center justify-between">
                    <p className="text-xs">Lead Mechanic Active</p>
                    <p className="text-xs font-bold text-indigo-900">M. Kowal</p>
                  </div>
                  <div className="w-full bg-indigo-200 h-1 mt-2 rounded-full">
                    <div className="bg-indigo-600 h-1 w-3/4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
