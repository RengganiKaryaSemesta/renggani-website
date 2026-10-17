export interface PartnerTier {
  id: string;
  name: string;
  rate: number;
  rateLabel: string;
  clientRange: string;
  minClients: number;
  maxClients: number | null;
  tagline: string;
  description: string;
  badge: string;
  color: 'sky' | 'emerald' | 'amber';
  features: string[];
  popular?: boolean;
  ctaText: string;
  whatsappMessage: string;
}

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: 'starter',
    name: 'Mitra Pemula',
    rate: 5,
    rateLabel: '5%',
    clientRange: '1 - 3 Klien Aktif',
    minClients: 1,
    maxClients: 3,
    tagline: 'Langkah Awal Kemitraan',
    description: 'Cocok untuk konsultan independen, akuntan lepas, atau praktisi bisnis yang baru memulai merekomendasikan solusi SaaS.',
    badge: '5% Komisi Recurring',
    color: 'sky',
    features: [
      'Komisi 5% berkelanjutan tiap pembayaran klien',
      'Materi promosi & link referral unik resmi',
      'Dashboard rekapitulasi status referal',
      'Pencairan rutin setiap tanggal 10 tiap bulan',
      'Dukungan customer service operasional',
    ],
    popular: false,
    ctaText: 'Daftar Mitra Pemula',
    whatsappMessage: 'Halo Tim Partnership Renggani, saya ingin mendaftar sebagai Mitra Pemula (Tier 5%) untuk produk SaaS Renggani.',
  },
  {
    id: 'pro',
    name: 'Mitra Pro',
    rate: 15,
    rateLabel: '15%',
    clientRange: '4 - 10 Klien Aktif',
    minClients: 4,
    maxClients: 10,
    tagline: 'Pertumbuhan & Skalabilitas',
    description: 'Dirancang untuk agensi digital, software house, kantor akuntan, dan konsultan IT yang aktif mengawal transformasi digital klien.',
    badge: '15% Komisi Recurring',
    color: 'emerald',
    features: [
      'Komisi 15% berkelanjutan tiap pembayaran klien',
      'Pendampingan demo teknis bersama tim engineer RKS',
      'Dedicated Partner Success Manager',
      'Akses preview fitur produk terbaru lebih awal',
      'Prioritas pemrosesan payout & laporan analitik detail',
    ],
    popular: true,
    ctaText: 'Pilih Mitra Pro',
    whatsappMessage: 'Halo Tim Partnership Renggani, saya ingin mendaftar sebagai Mitra Pro (Tier 15%) untuk produk SaaS Renggani.',
  },
  {
    id: 'elite',
    name: 'Mitra Strategis',
    rate: 25,
    rateLabel: '25%',
    clientRange: '> 10 Klien Aktif / Enterprise',
    minClients: 11,
    maxClients: null,
    tagline: 'Mitra Utama & Hasil Maksimal',
    description: 'Kemitraan eksklusif tingkat tertinggi untuk korporasi, asosiasi bisnis, dan partner strategis berskala nasional.',
    badge: '25% Komisi Recurring',
    color: 'amber',
    features: [
      'Komisi maksimal 25% berkelanjutan tanpa batas nominal',
      'Program co-branding dan pemasaran bersama eksklusif',
      'Fasilitas kustomisasi integrasi API untuk klien enterprise',
      'Dedicated Account Director & respons prioritas SLA',
      'Sesi tinjauan strategis roadmap software triwulanan',
    ],
    popular: false,
    ctaText: 'Gabung Mitra Strategis',
    whatsappMessage: 'Halo Tim Partnership Renggani, saya ingin mendaftar sebagai Mitra Strategis (Tier 25%) untuk produk SaaS Renggani.',
  },
];

export function getTierForClientCount(count: number): PartnerTier {
  if (count >= 11) {
    return PARTNER_TIERS[2];
  }
  if (count >= 4) {
    return PARTNER_TIERS[1];
  }
  return PARTNER_TIERS[0];
}
