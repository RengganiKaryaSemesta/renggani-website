import React, { useState } from 'react';

const FlipInteractiveHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bukubatik' | 'rksworkmate' | 'custom'>('bukubatik');

  return (
    <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl border border-slate-200/90 max-w-lg mx-auto lg:max-w-none">
      {/* Tab Switcher - Style Flip Pills */}
      <div className="flex bg-slate-100 p-1 rounded-2xl mb-5">
        <button
          onClick={() => setActiveTab('bukubatik')}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'bukubatik'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          BukuBatik SaaS
        </button>
        <button
          onClick={() => setActiveTab('rksworkmate')}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'rksworkmate'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          RKSWorkmate
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`flex-1 py-2 px-3 text-xs md:text-sm font-bold rounded-xl transition-all ${
            activeTab === 'custom'
              ? 'bg-white text-orange-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Sistem Custom
        </button>
      </div>

      {/* Content 1: BukuBatik */}
      {activeTab === 'bukubatik' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200">
              SaaS Akuntansi & Kasir
            </span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Production
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-50 p-2">
            <img
              src="/src/assets/buku-batik/dashboard-screen.png"
              alt="Dashboard BukuBatik"
              className="w-full h-48 md:h-56 object-cover object-top rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500">Kapasitas Transaksi</div>
              <div className="text-base font-extrabold text-slate-900">100.000+ Nota/Bln</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500">Multi-Cabang & Gudang</div>
              <div className="text-base font-extrabold text-slate-900">Terkoneksi Real-time</div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Cocok untuk: Retail, UMKM, Grosir, & Fashion
            </div>
            <a
              href="/bukubatik"
              className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Content 2: RKSWorkmate */}
      {activeTab === 'rksworkmate' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              HRIS, Presensi & Payroll
            </span>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Mobile GPS & Face Recog
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-50 p-2">
            <img
              src="/src/assets/rksworkmate/homepage.png"
              alt="Dashboard RKSWorkmate"
              className="w-full h-48 md:h-56 object-cover object-top rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500">Perhitungan Gaji</div>
              <div className="text-base font-extrabold text-slate-900">Otomatis 1-Klik</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500">Presensi Karyawan</div>
              <div className="text-base font-extrabold text-slate-900">Anti Fake GPS</div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Cocok untuk: Perusahaan, Pabrik, & Kantor Cabang
            </div>
            <a
              href="/rksworkmate"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Content 3: Custom Development */}
      {activeTab === 'custom' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              ERP, Gudang & Kargo Bandara
            </span>
            <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
              Custom Built
            </span>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-50 p-2">
            <img
              src="/src/assets/buku-batik/penjualan-screen.png"
              alt="Sistem ERP Custom"
              className="w-full h-48 md:h-56 object-cover object-top rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500">SOP Perusahaan</div>
              <div className="text-base font-extrabold text-slate-900">Disesuaikan 100%</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500">Kepemilikan Source Code</div>
              <div className="text-base font-extrabold text-slate-900">Milik Anda Penuh</div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Stack: Laravel, Go, Next.js, Flutter
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=6289512589756&text=Halo%20Pak%20Rizal,%20saya%20mau%20konsultasi%20pembuatan%20sistem%20custom."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              Konsultasi Langsung &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipInteractiveHero;
