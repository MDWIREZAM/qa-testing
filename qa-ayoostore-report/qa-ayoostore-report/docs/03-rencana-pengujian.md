# 03. Rencana Pengujian (Test Plan)

Mengikuti konsep ISO/IEC 25010:2023.

## 1. Ruang lingkup
- Objek: ayoostore.id
- Di dalam lingkup: fungsionalitas dan antarmuka dari sisi pengguna.
- Di luar lingkup: white box, uji keamanan, uji beban, pembayaran sungguhan.


## 2. Jenis pengujian

White box: **tidak dilakukan** (kode tidak tersedia). Jika dosen mensyaratkan kategori ketiga, tanyakan apakah grey box atau pembagian fungsional/non-fungsional diterima.

## 3. Lingkungan
 Versi OS, browser, perangkat ponsel, tanggal uji.

## 4. Kriteria lulus
- Semua test case prioritas tinggi dijalankan dan hasilnya terdokumentasi.
- Defect ditulis dengan langkah reproduksi dan bukti.

## 5. Risiko
- Situs live bisa berubah; hasil hanya berlaku pada tanggal uji.
- Pembatasan pemilik (izin, rate limit); hentikan uji bila situs terganggu.
