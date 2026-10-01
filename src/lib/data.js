export const KATEGORI = ['Hama tanaman', 'Bibit unggul', 'Hidroponik', 'Pascapanen', 'Pupuk organik', 'Lainnya'];
export const namaUser = (u) => u.user_metadata?.nama || u.email.split('@')[0];
export const tgl = (d) => new Date(d).toLocaleDateString('id-ID', { dateStyle: 'medium' });
export const INFO = [
  ['Pengendalian hama terpadu', 'Pantau lahan secara rutin, manfaatkan musuh alami, dan utamakan pestisida nabati. Pakai pestisida kimia sebagai pilihan terakhir sesuai anjuran label.'],
  ['Pupuk organik', 'Kompos atau pupuk kandang yang sudah matang memperbaiki struktur tanah. Berikan sebelum tanam agar unsur haranya siap diserap.'],
  ['Bibit unggul', 'Pilih benih berlabel yang cocok dengan ketinggian lahan dan musim. Uji daya tumbuhnya sebelum disemai.'],
  ['Hidroponik', 'Jaga pH larutan nutrisi sekitar 5,5 sampai 6,5 dan periksa EC secara berkala.'],
  ['Pascapanen', 'Panen saat tingkat kematangan tepat. Keringkan gabah hingga kadar air sekitar 14% sebelum disimpan.'],
  ['Rotasi tanaman', 'Menanam jenis berbeda tiap musim memutus siklus hama dan penyakit, serta menjaga kesuburan tanah.']
];
