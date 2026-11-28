# 01. Pemilihan Aplikasi Uji

## Aplikasi terpilih
**Ayoo Store**, https://ayoostore.id

## Data aplikasi
Diamati pada 28 November 2026 lewat pembacaan halaman beranda. `[VERIFIKASI]` Cocokkan sendiri di browser sebelum dikutip di laporan.

- Jenis situs: toko online (e-commerce) retail berbahasa Indonesia.
- Pengelola: PT Ayoo Mandiri Indonesia (tercantum di hak cipta), Jakarta Barat.
- Kontak: cs@ayoostore.id, jam layanan Senin-Jumat 10.00-17.00 WIB.
- Platform/CMS: **tidak diketahui**. `[VERIFIKASI]` (cek lewat ekstensi Wappalyzer; jangan menebak).
- Fitur yang terlihat: registrasi, login, pencarian, kategori produk, produk baru dan terlaris, flash sale, wishlist, keranjang, pelacakan pesanan, riwayat pesanan, konfirmasi pembayaran manual, blog.
- Checkout: tidak terlihat di halaman beranda. `[VERIFIKASI]`
- Halaman kebijakan yang ditautkan: syarat dan ketentuan, kebijakan privasi, kebijakan pengembalian. Isinya belum saya baca; `[ISI]` baca sendiri dan catat bila ada larangan pengujian otomatis.

## Kesesuaian dengan syarat tugas

| Syarat | Kesesuaian |
|---|---|
| Aplikasi RPL / portal | Aplikasi web e-commerce |
| Dibuat komunitas/perusahaan | Dikelola perusahaan (PT Ayoo Mandiri Indonesia) |
| Skala bisnis menengah ke bawah | `[ISI]` Sertakan bukti skala usaha |
| Pengunjung menengah ke bawah | `[ISI]` Sertakan bukti (mis. estimasi trafik) |

## Batasan: white box tidak dilakukan
Kode sumber situs tidak tersedia bagi penguji, sehingga white box testing tidak dapat dilakukan. `[ISI]` Lampirkan persetujuan dosen (tangkapan layar pesan/email).

## Etika dan izin
- Ini situs yang sedang beroperasi. **Minta izin tertulis pemilik** (cs@ayoostore.id) sebelum membuat akun uji atau mencoba form. Simpan balasannya di repo (sensor data pribadi).
- Gunakan **data fiktif**. Jangan melakukan pembayaran atau transaksi sungguhan, dan jangan mengirim konfirmasi pembayaran palsu.
- Beberapa kategori produk (mis. vaporizer) berbatas usia. Cukup amati tampilannya; jangan memproses pembelian.
- Tidak ada uji keamanan (injeksi, brute force), uji beban, atau pemindaian otomatis agresif.
- Otomasi hanya membaca halaman publik dan tidak membuat akun.

## Draf email izin
> Kepada: cs@ayoostore.id
>
> Yth. Tim PT Ayoo Mandiri Indonesia,
>
> Saya [nama], mahasiswa [kampus/prodi], sedang mengerjakan tugas mata kuliah Pengujian Perangkat Lunak. Saya mohon izin menguji fungsionalitas situs ayoostore.id secara ringan (black box): navigasi, pencarian, registrasi/login dengan data fiktif, wishlist, dan keranjang. Saya tidak akan melakukan pembayaran, uji beban, atau uji keamanan. Bila ditemukan masalah, saya bersedia melaporkannya kepada Anda, dan data uji dapat dihapus atas permintaan.
>
> Mohon konfirmasi persetujuan melalui balasan ini. Terima kasih.
>
> [nama, NIM, kontak]
