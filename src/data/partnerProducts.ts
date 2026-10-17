export interface PartnerProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  pricingLabel: string;
  description: string;
  targetMarket: string;
  commissionEstimate: string;
  href: string;
  highlights: string[];
}

export const PARTNER_PRODUCTS: PartnerProduct[] = [
  {
    id: 'bukubatik',
    name: 'BukuBatik',
    category: 'Akuntansi & Keuangan Terintegrasi',
    tagline: 'Platform Cloud Accounting Modern untuk Bisnis Berkembang',
    pricingLabel: 'Mulai Rp300.000 / bulan',
    description: 'Sistem akuntansi terpadu dengan rekonsiliasi bank otomatis, manajemen stok, faktur pajak/penjualan, dan laporan keuangan komprehensif berstandar SAK EMKM.',
    targetMarket: 'UMKM, pedagang grosir, distributor, ritel, agensi jasa, hingga perusahaan multi-cabang.',
    commissionEstimate: 'Potensi komisi berulang hingga Rp75.000 per klien tiap bulan',
    href: '/bukubatik',
    highlights: [
      'Rekonsiliasi mutasi rekening otomatis',
      'Laporan Laba Rugi & Neraca real-time',
      'Multi-pengguna dengan hak akses bertingkat',
      'Integrasi faktur & kartu piutang pelanggan',
    ],
  },
  {
    id: 'rksworkmate',
    name: 'RKSWorkmate',
    category: 'HR Management & Presensi Berbasis AI',
    tagline: 'Solusi Terintegrasi Absensi, Shift, Cuti, & Penggajian Karyawan',
    pricingLabel: 'Mulai Rp350.000 / bulan',
    description: 'Aplikasi pengelolaan SDM modern dengan face recognition anti-spoofing, pelacakan GPS akurat, dynamic shift scheduling, dan perhitungan payroll otomatis.',
    targetMarket: 'Pabrik manufaktur, jaringan ritel, hotel, restoran, agensi kreatif, dan instansi pendidikan.',
    commissionEstimate: 'Potensi komisi berulang hingga Rp87.500 per klien tiap bulan',
    href: '/rksworkmate',
    highlights: [
      'Validasi wajah biometrik & anti-fake GPS',
      'Manajemen shift jam kerja kompleks & lembur',
      'Kalkulasi PPh 21, BPJS, dan slip gaji digital',
      'Laporan absensi karyawan real-time berbasis web & mobile',
    ],
  },
  {
    id: 'custom-dev',
    name: 'Solusi Software Kustom',
    category: 'Enterprise System & On-Demand Engineering',
    tagline: 'Rancang Bangun Sistem Informasi Skala Menengah & Korporat',
    pricingLabel: 'Skema Proyek Sesuai Kebutuhan',
    description: 'Pengembangan web application, mobile app iOS/Android, integrasi ERP khusus, dan digitalisasi workflow internal yang disesuaikan penuh dengan proses bisnis klien.',
    targetMarket: 'Korporasi swasta, instansi BUMN, dinas pemerintahan, dan startup berkembang.',
    commissionEstimate: 'Komisi bernilai besar berbasis persentase nilai kontrak proyek',
    href: '/services',
    highlights: [
      'Arsitektur software scalable dan aman',
      'Dukungan dedicated engineering team',
      'Garansi pemeliharaan & transfer knowledge',
      'Integrasi database & API eksternal',
    ],
  },
];
