# 03. Rencana Pengujian (Test Plan)

Mengikuti konsep ISO/IEC/IEEE 29119-1:2022 dan karakteristik ISO/IEC 25010:2023.

## 1. Ruang lingkup
- Objek: ayoostore.id (situs publik), hanya setelah ada izin pemilik.
- Di dalam lingkup: fungsionalitas dan antarmuka dari sisi pengguna.
- Di luar lingkup: white box, uji keamanan, uji beban, pembayaran sungguhan.

## 2. Tahapan (awal sampai akhir)
1. Perencanaan: ruang lingkup, risiko, kriteria lulus, izin pemilik.
2. Analisis dan desain: turunkan test case dari fitur yang teramati.
3. Implementasi: siapkan data uji fiktif, skrip otomatis.
4. Eksekusi: manual dan otomatis.
5. Pelaporan: hasil, defect, bukti (screenshot) di `06`.
6. Penutupan: evaluasi terhadap kriteria dan rekomendasi.

## 3. Jenis pengujian

| Jenis | Teknik | Berkas |
|---|---|---|
| Manual black box fungsional | Equivalence partitioning, boundary value analysis | `tests/manual/black-box-testcases.md` bagian A |
| Manual black box non-fungsional | Usability, kompatibilitas, performa ringan | bagian B |
| Otomatis | Playwright, hanya baca halaman publik | `tests/automation/` |

White box: **tidak dilakukan** (kode tidak tersedia). Jika dosen mensyaratkan kategori ketiga, tanyakan apakah grey box atau pembagian fungsional/non-fungsional diterima.

## 4. Lingkungan
 browser (Chrome, Firefox, Safari), perangkat ponsel,

## 5. Kriteria lulus
- Semua test case prioritas tinggi dijalankan dan hasilnya terdokumentasi.
- Defect ditulis dengan langkah reproduksi dan bukti.

## 6. Risiko
- Situs live bisa berubah; hasil hanya berlaku pada tanggal uji.
- Pembatasan pemilik (izin, rate limit)
