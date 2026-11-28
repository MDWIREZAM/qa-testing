# 05. Landasan Metode: Jurnal Terindeks SINTA 1-3

Aturan: alasan pemilihan metode harus didukung jurnal terindeks **SINTA 1-3**.

## Status verifikasi (per 28 November 2026)
Belum ada satu pun jurnal di bawah yang peringkat SINTA 1-3-nya terbukti. Verifikasi dilakukan **sendiri** di https://sinta.kemdikbud.go.id/journals (cari nama jurnal atau ISSN), lalu simpan tangkapan layar profil jurnal sebagai bukti di folder `docs/bukti-sinta/`.

| Jurnal | Artikel kandidat | Hasil pengecekan | Layak? |
|---|---|---|---|
| JATI: Jurnal Mahasiswa Teknik Informatika (ITN Malang), e-ISSN 2598-828X | Black box pada aplikasi web Explore Palangka Raya (2026) | Halaman jurnal tidak menyebut peringkat | `[VERIFIKASI]` |
| AUTOMATA (UII), ISSN 2721-1940 | Amalia dan Cahyono (2022), *Analisis Pemanfaatan Playwright untuk Automasi Pengujian Aplikasi Berbasis Web* | Halaman artikel tidak menyebut peringkat | `[VERIFIKASI]` |
| INFOTECH (UNMA) | Penerapan STLC berbasis ISO/IEC 25010 pada SIBASWEB (2026) | Belum dicek | `[VERIFIKASI]` |
| TECHNO Nusa Mandiri (STMIK Nusa Mandiri), ISSN 2527-676X | Studi literatur black box vs white box | Halaman jurnal menyebut **SINTA 4** (SK tahun 2020) | **Tidak**, kecuali profil SINTA terbaru menunjukkan 1-3 |
| JSRCS (Ubhara Jaya) | Pengujian fungsional sistem rental mobil (2026) | **SINTA 5** menurut naskahnya | **Tidak** |

Catatan: dua halaman profil SINTA yang sempat saya buka menampilkan "Sinta 2", tetapi nama jurnalnya tidak terbaca, jadi tidak boleh dipakai.

## Cara menulis alasan per metode
Untuk tiap metode tulis: **klaim, sitasi jurnal (peringkat terverifikasi), dan kaitannya dengan ayoostore.id.**

- Black box (EP/BVA): `[ISI alasan + sitasi]`. Cari artikel SINTA 1-3 tentang black box pada aplikasi web/e-commerce.
- Otomasi (Playwright): bahan yang ada, bila AUTOMATA terbukti SINTA 1-3. Menurut abstraknya, Playwright lebih mudah dipakai penguji yang baru mengenal automation testing, sedangkan Selenium cocok untuk penguji berpengalaman dengan kemampuan pemrograman kuat. Draf kalimat: "Playwright dipilih karena lebih mudah digunakan oleh penguji pemula (Amalia & Cahyono, 2022)." `[ISI]` hapus jika jurnal tidak memenuhi syarat.
- Non-fungsional (ISO/IEC 25010:2023): `[ISI alasan + sitasi]`.

## Saran pencarian
Cari lewat Google Scholar atau Garuda dengan kata kunci "black box testing e-commerce", "equivalence partitioning boundary value analysis", "automation testing Playwright/Selenium", lalu cek peringkat jurnalnya di SINTA sebelum mengutip. Target: minimal satu jurnal terverifikasi untuk tiap metode.
