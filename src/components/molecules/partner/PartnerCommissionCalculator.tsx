import React, { useState, useId } from 'react';

interface PackageOption {
  id: string;
  name: string;
  price: number;
  label: string;
  description: string;
}

const PACKAGES: PackageOption[] = [
  {
    id: 'starter',
    name: 'Paket Starter',
    price: 300000,
    label: 'Rp300.000 / bln',
    description: 'BukuBatik Basic (UMKM / Ritel Kecil)',
  },
  {
    id: 'business',
    name: 'Paket Bisnis',
    price: 650000,
    label: 'Rp650.000 / bln',
    description: 'BukuBatik Pro & RKSWorkmate Standard',
  },
  {
    id: 'enterprise',
    name: 'Paket Korporat',
    price: 1000000,
    label: 'Rp1.000.000 / bln',
    description: 'Solusi Terintegrasi / Multi-Cabang',
  },
];

const PartnerCommissionCalculator: React.FC = () => {
  const [clients, setClients] = useState<number>(6);
  const [selectedPackage, setSelectedPackage] = useState<PackageOption>(PACKAGES[1]);
  const sliderId = useId();

  // Tier calculation
  let rate = 5;
  let tierName = 'Mitra Pemula';
  let tierColor = 'sky';

  if (clients >= 11) {
    rate = 25;
    tierName = 'Mitra Strategis';
    tierColor = 'amber';
  } else if (clients >= 4) {
    rate = 15;
    tierName = 'Mitra Pro';
    tierColor = 'emerald';
  }

  const totalBilling = clients * selectedPackage.price;
  const monthlyCommission = totalBilling * (rate / 100);
  const annualCommission = monthlyCommission * 12;

  const formatRupiah = (val: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo Tim Partnership Renggani, saya melakukan simulasi kemitraan di website dengan estimasi ${clients} klien (${selectedPackage.name} @ ${selectedPackage.label}). Potensi komisi recurring saya sekitar ${formatRupiah(monthlyCommission)}/bulan. Mohon informasi pendaftarannya.`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=6289512589756&text=${whatsappMessage}`;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 md:p-10 shadow-lg shadow-slate-900/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor={sliderId} className="text-sm font-bold text-slate-900 dark:text-white">
                Jumlah Klien Referal Aktif
              </label>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-base font-bold bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {clients} Klien
              </span>
            </div>
            <input
              id={sliderId}
              type="range"
              min="1"
              max="50"
              value={clients}
              onChange={(e) => setClients(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-700"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
              <span>1 Klien</span>
              <span>10 Klien</span>
              <span>25 Klien</span>
              <span>50 Klien</span>
            </div>
          </div>

          {/* Package Selection */}
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white mb-2.5">
              Pilihan Rata-rata Paket SaaS Klien
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg)}
                    className={`text-left p-3 rounded-xl border transition-all text-xs ${
                      isSelected
                        ? 'border-blue-700 bg-blue-50/70 text-blue-900 dark:bg-blue-950/60 dark:text-white dark:border-blue-500 ring-2 ring-blue-700/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold mb-0.5">{pkg.name}</div>
                    <div className="font-semibold text-blue-700 dark:text-blue-400">{pkg.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1 truncate">{pkg.description}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Tingkat Komisi Berdasarkan {clients} Klien:
            </div>
            <div
              className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap shrink-0 ${
                tierColor === 'sky'
                  ? 'bg-sky-50 text-sky-700 border-sky-300 dark:bg-sky-950/40 dark:text-sky-300'
                  : tierColor === 'emerald'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300'
              }`}
            >
              <span>{tierName}</span>
              <span>·</span>
              <span>{rate}% Recurring</span>
            </div>
          </div>
        </div>

        {/* Live Result Display Column */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 md:p-8 shadow-md">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1">
              Estimasi Pendapatan Pasif Mitra
            </div>
            <div className="text-xs text-slate-300 mb-6">
              Komisi berulang setiap siklus tagihan klien aktif
            </div>

            <div className="mb-6">
              <div className="text-xs text-slate-400 mb-1">Komisi per Bulan:</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight font-sans">
                {formatRupiah(monthlyCommission)}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Dihitung dari {rate}% x {formatRupiah(totalBilling)} total tagihan
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Proyeksi per Tahun:</span>
                <span className="font-bold text-white text-sm">{formatRupiah(annualCommission)}</span>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 select-none text-center"
          >
            Konsultasikan Kemitraan via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerCommissionCalculator;
