import React, { useState, useMemo } from 'react';

interface FeatureModule {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: string;
  badgeColor: string;
}

const modulesData: FeatureModule[] = [
  {
    id: 'hpp-konversi',
    title: 'Kalkulasi HPP & Konversi Produk Bahan Baku',
    category: 'Akuntansi & Gudang',
    description: 'Sistem akuntansi terpadu untuk mencatat transaksi konversi bahan baku menjadi produk/barang jadi. Otomatis menghitung Nilai Persediaan HPP × Stok serta riwayat mutasi per periode secara presisi.',
    highlights: [
      'Riwayat konversi produk bahan baku ke barang jadi',
      'Hitung nilai persediaan HPP × stok secara presisi',
      'Mutasi gudang (saldo awal, Qty masuk/keluar, saldo akhir)',
    ],
    icon: '📊',
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
  },
  {
    id: 'po-pembelian',
    title: 'Alur Pembelian: PR, PO & Kontrol Supplier',
    category: 'Pembelian & PO',
    description: 'Kelola rantai pasok pengadaan bahan baku & persediaan barang secara rapi. Dari draf pengajuan Purchase Request (PR), approval Purchase Order (PO), hingga penerimaan fisik stok di gudang.',
    highlights: [
      'Manajemen dokumen Purchase Request & Order',
      'Verifikasi faktur pembelian vendor & retur barang',
      'Monitoring status penerimaan barang & pembayaran vendor',
    ],
    icon: '🛒',
    badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300',
  },
  {
    id: 'kartu-piutang',
    title: 'Kartu Piutang, Credit & Debit Memos',
    category: 'Piutang & Keuangan',
    description: 'Pantau rincian saldo piutang per pelanggan (Customer Ledger). BukuBatik otomatis mencatat penambahan debit dari faktur baru, pelunasan kredit, serta penerbitan Credit Memo & Debit Memo.',
    highlights: [
      'Laporan Kartu Piutang per pelanggan (mutasi debit/kredit)',
      'Penerbitan Debit & Credit Memos untuk retur/diskon',
      'Riwayat bukti transaksi & saldo akhir piutang real-time',
    ],
    icon: '💳',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
  },
  {
    id: 'laporan-keuangan',
    title: 'Laporan Keuangan Komprehensif (General Ledger)',
    category: 'Laporan Keuangan',
    description: 'Hasilkan laporan keuangan yang akurat (Buku Besar, Laba Rugi, Neraca Saldo, Arus Kas, Perubahan Modal) dan siap diunduh/dicetak kapan saja tanpa jurnal manual rumit.',
    highlights: [
      'Buku Besar & Jurnal Umum Otomatis',
      'Neraca Saldo & Laba Rugi Real-Time',
      'Arus Kas & Perubahan Modal Siap Cetak',
    ],
    icon: '📑',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  },
  {
    id: 'rekonsiliasi-bank',
    title: 'Rekonsiliasi Bank & Pencocokan Otomatis',
    category: 'Bank & Rekonsiliasi',
    description: 'Cocokkan transaksi di rekening koran bank dengan catatan jurnal kas & bank bisnis Anda secara otomatis dalam hitungan detik.',
    highlights: [
      'Fitur Pencocokan Otomatis Rekening Koran & Jurnal',
      'Monitoring saldo akhir kas & bank bisnis real-time',
      'Deteksi transaksi menggantung / lumbal otomatis',
    ],
    icon: '🏦',
    badgeColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300',
  },
  {
    id: 'radar-kesehatan',
    title: 'Radar Performa & Analisis Kesehatan Pelanggan',
    category: 'Analisis & CRM',
    description: 'Evaluasi performa transaksi tiap pelanggan dengan diagram radar 5-dimensi (Ketepatan Bayar, Kelancaran Piutang, Volume Transaksi, Kecepatan Pembayaran, dan Tingkat Retur).',
    highlights: [
      'Analisis visual skor kesehatan kredit mitra bisnis',
      'Riwayat pesanan & histori pelunasan terpusat',
      'Early warning pelunasan piutang jatuh tempo',
    ],
    icon: '🎯',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  },
  {
    id: 'keamanan-sso',
    title: 'Keamanan Berlapis & Akses Multi-Role',
    category: 'Keamanan',
    description: 'Lindungi data finansial sensitif perusahaan Anda dengan otentikasi aman Single Sign-On (SSO Google) dan hak akses bertingkat untuk Admin, Akuntan, Gudang, dan Kasir.',
    highlights: [
      'Otentikasi aman Single Sign-On (SSO Google)',
      'Hak akses bertingkat per peran pengguna',
      'Audit log aktivitas transaksi pengguna',
    ],
    icon: '🔒',
    badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  },
];

const categories = [
  'Semua',
  'Akuntansi & Gudang',
  'Pembelian & PO',
  'Piutang & Keuangan',
  'Laporan Keuangan',
  'Bank & Rekonsiliasi',
  'Analisis & CRM',
  'Keamanan',
];

export const BukuBatikSearchFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredModules = useMemo(() => {
    return modulesData.filter((mod) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'Semua' || mod.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-10 font-roboto">
      {/* Search Bar & Category Chips */}
      <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari fitur BukuBatik (misal: HPP, PO, Piutang, Bank)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors text-xs font-bold bg-gray-200 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 shrink-0">
            Menampilkan <span className="text-purple-600 font-bold">{filteredModules.length}</span> modul
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modules Cards Grid */}
      {filteredModules.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredModules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{mod.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${mod.badgeColor}`}>
                    {mod.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                  {mod.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {mod.description}
                </p>

                <div className="pt-2 space-y-2">
                  {mod.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 font-medium">
                      <span className="text-purple-500 font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={`https://api.whatsapp.com/send?phone=6289512589756&text=Halo%20Renggani%2C%20saya%20tertarik%20dengan%20modul%20BukuBatik%3A%20${encodeURIComponent(mod.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 font-bold text-xs rounded-xl hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                >
                  <span>Minta Demo Modul Ini</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 space-y-4 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-2xl font-bold">
            🔍
          </div>
          <h3 className="text-xl font-bold dark:text-white text-gray-900">
            Modul tidak ditemukan
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Coba kata kunci pencarian lain atau klik tombol reset untuk melihat seluruh modul BukuBatik.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
            }}
            className="px-6 py-2.5 bg-purple-600 text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-purple-700 transition-colors shadow-md shadow-purple-600/20"
          >
            Reset Pencarian
          </button>
        </div>
      )}
    </div>
  );
};

export default BukuBatikSearchFilter;
