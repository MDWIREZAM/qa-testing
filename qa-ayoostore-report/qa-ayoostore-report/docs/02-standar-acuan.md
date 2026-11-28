# 02. Standar Acuan (IEEE/ISO, terbit 2022-2026)

Aturan tugas: hanya standar yang terbit **2022-2026** yang diterima sebagai acuan utama.

## Standar yang memenuhi rentang tahun

| Standar | Terbit | Dipakai untuk |
|---|---|---|
| ISO/IEC 25010:2023, SQuaRE, Product quality model | Nov 2023 | Menentukan karakteristik kualitas yang diuji (sembilan karakteristik, termasuk safety dan interaction capability yang baru) |
## Standar pendamping yang TIDAK memenuhi rentang tahun

Bagian lain seri 29119 terbit **Oktober 2021**, sehingga di luar aturan 2022-2026:

- ISO/IEC/IEEE 29119-2:2021 (Test processes)
- ISO/IEC/IEEE 29119-3:2021 (Test documentation)
- ISO/IEC/IEEE 29119-4:2021 (Test techniques)

## Pemetaan standar ke jenis pengujian

| Karakteristik ISO/IEC 25010:2023 | Jenis uji di proyek ini |
|---|---|
| Functional suitability | Black box manual + otomatis |
| Interaction capability (ex-usability) | Black box manual (alur pengguna) |
| Performance efficiency | Pengukuran waktu muat ringan |
| Security | Tidak diuji  |
| Maintainability | Tidak diuji |
| Compatibility / Flexibility | Cek lintas browser (otomatis, Playwright) |
