# 03. Rencana Pengujian (Test Plan)

Mengikuti konsep ISO/IEC 25010:2023.

## 1. Ruang lingkup
- Objek: ayoostore.id
- Di dalam lingkup: fungsionalitas dan antarmuka dari sisi pengguna.
- Di luar lingkup: white box, uji keamanan, uji beban, pembayaran sungguhan.


## 3. Jenis pengujian

| Jenis | Teknik | Berkas |
|---|---|---|
| Manual black box fungsional | Equivalence partitioning, boundary value analysis | `tests/manual/black-box-testcases.md` bagian A |
| Manual black box non-fungsional | Usability, kompatibilitas, performa ringan | bagian B |
| Otomatis | Playwright, hanya baca halaman publik | `tests/automation/` |

White box: **tidak dilakukan** (kode tidak tersedia). Jika dosen mensyaratkan kategori ketiga, tanyakan apakah grey box atau pembagian fungsional/non-fungsional diterima.

## 4. Lingkungan
 Versi OS, browser, perangkat ponsel, tanggal uji.

## 5. Kriteria lulus
- Semua test case prioritas tinggi dijalankan dan hasilnya terdokumentasi.
- Defect ditulis dengan langkah reproduksi dan bukti.

## 6. Risiko
- Situs live bisa berubah; hasil hanya berlaku pada tanggal uji.
- Pembatasan pemilik (izin, rate limit); hentikan uji bila situs terganggu.
