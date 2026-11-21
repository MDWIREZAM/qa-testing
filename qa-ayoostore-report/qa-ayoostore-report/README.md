# Laporan Pengujian Perangkat Lunak: Ayoo Store (ayoostore.id)

Repo ini adalah laporan tugas *Software Testing / QA* untuk situs **ayoostore.id**, dengan acuan standar ISO/IEC/IEEE (terbit 2022-2026) dan jurnal SINTA. Pengujian: **black box manual** dan **otomatis**. White box tidak dilakukan karena kode sumber situs tidak tersedia (lihat `docs/01`).

> **Status:** kerangka laporan. Bagian bertanda `[ISI]` atau `[VERIFIKASI]`, dan status `BELUM DIJALANKAN`, harus dilengkapi dari pengamatan dan pengujian yang benar-benar dilakukan. Jangan mengisi hasil tanpa menjalankannya.

> **Pengungkapan:** kerangka dokumen ini disusun dengan bantuan Claude (Anthropic). Pengujian, wawancara, dan analisis hasil dilakukan oleh penulis. `[ISI] Sesuaikan dengan aturan dosen.`

## Struktur Direktori

```
qa-ayoostore-report/
├── README.md
├── docs/
│   ├── 00-timeline.md               # Jadwal 4 minggu
│   ├── 01-pemilihan-aplikasi.md      # Alasan memilih aplikasi + izin pemilik
│   ├── 02-standar-acuan.md           # ISO/IEEE 2022-2026
│   ├── 03-rencana-pengujian.md       # Test plan end-to-end
│   ├── 04-wawancara-qa.md            # Wawancara QA >= 3 tahun
│   ├── 05-landasan-metode-jurnal.md  # Jurnal SINTA 1-3
│   └── 06-laporan-hasil.md           # Hasil, defect, kesimpulan
└── tests/
    ├── manual/
    │   └── black-box-testcases.md
    └── automation/
        ├── package.json
        └── smoke.spec.js
```


## Alur Kerja

1. Buka ayoostore.id di browser, catat fitur yang ada, lengkapi `[VERIFIKASI]` di `docs/01` dan test case.
2. Kirim permintaan izin ke pemilik situs (draf di `docs/01`), simpan balasannya.
3. Jalankan pengujian manual dan otomatis, catat hasil di `docs/06`.
4. Lakukan wawancara (`docs/04`).
5. Verifikasi peringkat SINTA tiap jurnal di `docs/05`.
6. Push ke GitHub.
