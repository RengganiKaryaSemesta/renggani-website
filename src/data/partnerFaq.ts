export interface PartnerFaq {
  question: string;
  answer: string;
}

export const PARTNER_FAQS: PartnerFaq[] = [
  {
    question: 'Bagaimana cara kerja komisi berkelanjutan (recurring)?',
    answer: 'Komisi Anda tidak hanya dibayarkan satu kali saat klien mendaftar. Selama klien yang Anda referensikan tetap aktif berlangganan BukuBatik atau RKSWorkmate dan membayar tagihan bulanan atau tahunan mereka, Anda akan terus menerima persentase komisi (5%, 15%, atau 25%) setiap siklus pembayaran.',
  },
  {
    question: 'Bagaimana penentuan tier komisi 5%, 15%, dan 25%?',
    answer: 'Tier ditentukan berdasarkan jumlah klien aktif yang berlangganan melalui referal Anda. Jika Anda memiliki 1 hingga 3 klien aktif, Anda berada di Tier Mitra Pemula (5%). Ketika portofolio Anda mencapai 4 hingga 10 klien, otomatis Anda naik ke Tier Mitra Pro (15%). Dan jika Anda memiliki lebih dari 10 klien aktif, seluruh tagihan referal Anda dihitung pada Tier Mitra Strategis (25%).',
  },
  {
    question: 'Kapan komisi dicairkan dan apakah ada syarat minimum payout?',
    answer: 'Pembayaran komisi dilakukan secara rutin setiap tanggal 10 tiap bulan langsung ke rekening bank lokal yang Anda daftarkan. Minimum pencairan sangat terjangkau yaitu Rp100.000. Jika saldo komisi bulanan belum mencapai batas minimal, saldo akan diakumulasikan ke bulan berikutnya secara aman tanpa hangus.',
  },
  {
    question: 'Apakah ada biaya pendaftaran atau target kuota penjualan bulanan?',
    answer: 'Sama sekali tidak ada biaya registrasi. Program kemitraan ini terbuka 100% gratis untuk siapa saja. Kami juga tidak menerapkan target kuota penjualan minimum bulanan yang memberatkan, sehingga Anda bebas membagikan referal sesuai ritme dan fleksibilitas waktu Anda.',
  },
  {
    question: 'Apakah tim Renggani bersedia mendampingi proses demo produk ke calon klien?',
    answer: 'Tentu saja. Khusus mitra tingkat Pro dan Strategis (serta calon deal potensial), tim teknis dan business development RKS siap mendampingi sesi presentasi daring maupun demo langsung kepada calon klien Anda untuk mempermudah proses konversi closing.',
  },
  {
    question: 'Bisakah saya mereferensikan proyek software kustom di luar produk SaaS?',
    answer: 'Bisa. CV. Renggani Karya Semesta juga melayani pengembangan software kustom seperti ERP, mobile apps, dan web application enterprise. Untuk proyek kustom, kami menyediakan skema komisi kesepakatan bernilai persentase menarik dari total nilai kontrak proyek yang disepakati.',
  },
];
