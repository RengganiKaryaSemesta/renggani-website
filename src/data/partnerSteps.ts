export interface PartnerStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export const PARTNER_STEPS: PartnerStep[] = [
  {
    step: '01',
    title: 'Registrasi & Verifikasi Singkat',
    description: 'Daftar sebagai mitra resmi melalui tim Partnership RKS dalam beberapa langkah mudah tanpa biaya registrasi apa pun.',
    detail: 'Anda akan menerima tautan referral resmi, kit materi presentasi, dan akses ke saluran koordinasi langsung dengan tim kemitraan kami.',
  },
  {
    step: '02',
    title: 'Rekomendasikan Solusi Software',
    description: 'Kenalkan BukuBatik atau RKSWorkmate ke jaringan rekan bisnis, klien binaan, atau perusahaan yang membutuhkan sistem digital.',
    detail: 'Gunakan materi presentasi resmi atau minta tim engineer RKS mendampingi Anda memberikan live demo produk kepada calon klien.',
  },
  {
    step: '03',
    title: 'Aktivasi Layanan oleh Klien',
    description: 'Setelah klien memutuskan berlangganan paket SaaS atau menyetujui kontrak proyek, tim operasional kami mengurus onboarding penuh.',
    detail: 'Klien Anda mendapatkan instalasi instan, pelatihan penggunaan aplikasi, dan dukungan teknis harian tanpa membebani waktu Anda.',
  },
  {
    step: '04',
    title: 'Terima Komisi Berkelanjutan',
    description: 'Dapatkan payout komisi recurring 5%, 15%, hingga 25% setiap kali klien memperbarui langganan secara transparan.',
    detail: 'Dana komisi langsung ditransfer ke rekening bank Anda secara otomatis setiap tanggal 10 tiap bulan lengkap dengan laporan bukti transfer.',
  },
];
