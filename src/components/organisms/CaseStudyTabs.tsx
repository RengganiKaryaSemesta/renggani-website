import React, { useState } from 'react';

const CaseStudyTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bukubatik' | 'wis' | 'cargo' | 'payroll'>('bukubatik');

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Tab navigation bar */}
      <div className="flex border-b border-slate-200 bg-slate-50/70 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('bukubatik')}
          className={`flex-1 min-w-[200px] py-4 px-6 text-left transition-colors border-b-2 font-medium text-sm flex items-center gap-3 ${
            activeTab === 'bukubatik'
              ? 'bg-white border-blue-600 text-blue-900 font-bold shadow-sm'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
            01
          </span>
          <div>
            <div className="text-slate-900 font-semibold leading-tight">BukuBatik</div>
            <div className="text-[11px] text-slate-500 font-normal">Multi-Tenant SaaS</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('wis')}
          className={`flex-1 min-w-[200px] py-4 px-6 text-left transition-colors border-b-2 font-medium text-sm flex items-center gap-3 ${
            activeTab === 'wis'
              ? 'bg-white border-blue-600 text-blue-900 font-bold shadow-sm'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
            02
          </span>
          <div>
            <div className="text-slate-900 font-semibold leading-tight">Pusaka Hidup WIS</div>
            <div className="text-[11px] text-slate-500 font-normal">Warehouse Barcode</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('cargo')}
          className={`flex-1 min-w-[200px] py-4 px-6 text-left transition-colors border-b-2 font-medium text-sm flex items-center gap-3 ${
            activeTab === 'cargo'
              ? 'bg-white border-blue-600 text-blue-900 font-bold shadow-sm'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0">
            03
          </span>
          <div>
            <div className="text-slate-900 font-semibold leading-tight">PT Cervo Cargo</div>
            <div className="text-[11px] text-slate-500 font-normal">Airport Ground Handling</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('payroll')}
          className={`flex-1 min-w-[200px] py-4 px-6 text-left transition-colors border-b-2 font-medium text-sm flex items-center gap-3 ${
            activeTab === 'payroll'
              ? 'bg-white border-blue-600 text-blue-900 font-bold shadow-sm'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">
            04
          </span>
          <div>
            <div className="text-slate-900 font-semibold leading-tight">HRIS & Payroll</div>
            <div className="text-[11px] text-slate-500 font-normal">Multi-Branch Banking</div>
          </div>
        </button>
      </div>

      {/* Tab Content 1: BukuBatik */}
      {activeTab === 'bukubatik' && (
        <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
              <span>Cloud Multi-Tenant SaaS</span>
              <span>•</span>
              <span className="text-emerald-600 font-bold">100k+ monthly invoices</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Invoicing & accounting system built for high transactional throughput
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We engineered BukuBatik with database-level tenant isolation, sub-80ms API response times under load, and asynchronous background worker queues in Go and Laravel.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">&lt; 80ms</div>
                <div className="text-xs text-slate-500 mt-0.5">Average API query latency</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">Zero Leak</div>
                <div className="text-xs text-slate-500 mt-0.5">Isolated tenant schema design</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Engineered with</div>
              <div className="flex flex-wrap gap-2">
                {['Go (Golang)', 'Laravel', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded-lg border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-900 p-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 rounded-t-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="text-[11px] text-slate-400 font-mono ml-2">app.bukubatik.com / dashboard</span>
              </div>
              <img
                src="/src/assets/buku-batik/dashboard-screen.png"
                alt="BukuBatik SaaS production dashboard"
                className="w-full h-auto object-cover rounded-b-lg border-t border-slate-800"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Pusaka Hidup WIS */}
      {activeTab === 'wis' && (
        <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
              <span>Supply Chain & Logistics</span>
              <span>•</span>
              <span className="text-emerald-700 font-bold">98% error reduction</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Real-time multi-warehouse inventory & handheld barcode verification
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Eliminated paper dispatch sheets and stock discrepancies for a high-turnover FMCG distributor with handheld barcode scanning, real-time bin tracking, and automated reorder alerts.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">Live Sync</div>
                <div className="text-xs text-slate-500 mt-0.5">Multi-rack barcode validation</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">Audit-Ready</div>
                <div className="text-xs text-slate-500 mt-0.5">Immutable stock movement log</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Engineered with</div>
              <div className="flex flex-wrap gap-2">
                {['Laravel 12', 'PostgreSQL', 'Handheld Barcode API', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded-lg border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-900 p-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 rounded-t-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="text-[11px] text-slate-400 font-mono ml-2">wis.pusakahidup.test / stock-movement</span>
              </div>
              <img
                src="/src/assets/buku-batik/penjualan-screen.png"
                alt="Warehouse inventory & stock transactions"
                className="w-full h-auto object-cover rounded-b-lg border-t border-slate-800"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: PT Cervo Cargo */}
      {activeTab === 'cargo' && (
        <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
              <span>Airport Ground Operations</span>
              <span>•</span>
              <span className="text-indigo-700 font-bold">Zero downtime during peak flights</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Airport air-cargo tracking, dimension weighing & manifest generator
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Handles ground cargo intake, volumetric scale hardware communication, thermal label protocol output, and regulatory air waybill exports under strict turnaround windows.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">Hardware I/O</div>
                <div className="text-xs text-slate-500 mt-0.5">Scale & thermal printer sync</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">Customs Ready</div>
                <div className="text-xs text-slate-500 mt-0.5">Automated airway manifests</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Engineered with</div>
              <div className="flex flex-wrap gap-2">
                {['Go (Golang)', 'Laravel', 'Serial Device Drivers', 'MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded-lg border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-900 p-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 rounded-t-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="text-[11px] text-slate-400 font-mono ml-2">cervo-cargo.com / airway-dispatch</span>
              </div>
              <img
                src="/src/assets/buku-batik/laporan-product-screen.png"
                alt="Cargo handling and logistics report screen"
                className="w-full h-auto object-cover rounded-b-lg border-t border-slate-800"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 4: HRIS & Payroll */}
      {activeTab === 'payroll' && (
        <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-100">
              <span>Corporate Operations</span>
              <span>•</span>
              <span className="text-amber-700 font-bold">Banking batch automation</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise payroll calculation, employee tracking & banking export
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Handles multi-tier overtime rates, tax brackets, biometric face-recognition attendance logs, and generates one-click disbursement batch files for corporate banks.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">1-Click Batch</div>
                <div className="text-xs text-slate-500 mt-0.5">Bank transfer payload export</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">Compliance</div>
                <div className="text-xs text-slate-500 mt-0.5">Tax & statutory deduction engine</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Engineered with</div>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'Vue.js', 'PostgreSQL', 'Biometric API'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded-lg border border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-slate-900 p-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 rounded-t-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span className="text-[11px] text-slate-400 font-mono ml-2">rksworkmate.com / attendance-reports</span>
              </div>
              <img
                src="/src/assets/rksworkmate/report-absensi.png"
                alt="HRIS attendance & payroll report screen"
                className="w-full h-auto object-cover rounded-b-lg border-t border-slate-800"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyTabs;
