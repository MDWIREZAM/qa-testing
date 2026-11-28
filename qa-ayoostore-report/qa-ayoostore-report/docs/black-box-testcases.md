# Test Case Black Box (Manual): ayoostore.id

Gunakan **data fiktif**. Jangan melakukan pembayaran sungguhan. Sesuaikan test case dengan fitur yang benar-benar ada (`[VERIFIKASI]`); hapus yang tidak relevan.

## A. Fungsional (EP dan BVA)

| ID | Fitur | Teknik | Langkah | Hasil diharapkan | Hasil aktual | Status |
|---|---|---|---|---|---|---|
| BB-01 | Beranda | Fungsional | Buka `/` | Halaman termuat, menu dan produk tampil | BErhasil |  DIJALANKAN |
| BB-02 | Registrasi | EP valid | Isi semua field dengan data fiktif valid | Akun terbuat / pesan sukses | BElum | BELUM DIJALANKAN |
| BB-03 | Registrasi | EP tidak valid | Email tanpa `@` | Ditolak dengan pesan jelas | BElum | BELUM DIJALANKAN |
| BB-04 | Registrasi | EP kosong | Kirim form kosong | Pesan wajib isi tiap field | BElum` | BELUM DIJALANKAN |
| BB-05 | Registrasi | BVA password | Password panjang minimum-1, minimum, minimum+1 (`[VERIFIKASI]` aturan panjang) | Sesuai aturan situs | BElum | BELUM DIJALANKAN |
| BB-06 | Registrasi | Duplikat | Daftar dengan email yang sama dua kali | Ditolak, pesan jelas | BElum | BELUM DIJALANKAN |
| BB-07 | Login | EP valid | Login dengan akun uji | Masuk ke akun | BElum |  DIJALANKAN |
| BB-08 | Login | EP tidak valid | Password salah | Ditolak, tidak membocorkan apakah email terdaftar | BElum |  DIJALANKAN |
| BB-09 | Login | Kosong | Kirim form kosong | Pesan wajib isi | BElum |  DIJALANKAN |
| BB-10 | Lupa password | Fungsional | Isi email akun uji | Pesan/email reset terkirim | Belum | BElum DIJALANKAN |
| BB-11 | Pencarian | EP ada | Cari kata produk umum | Hasil relevan | Berhasil |  DIJALANKAN |
| BB-12 | Pencarian | EP tidak ada | Cari string acak | Pesan tidak ada hasil, tanpa error | BErhasil` | BELUM DIJALANKAN |
| BB-13 | Pencarian | BVA kosong | Kirim pencarian kosong | Ditangani tanpa error | Menampilkan semua produk tanpa error (dilaporkan penguji, 28 Nov 2026; screenshot menyusul) | DIJALANKAN |
| BB-14 | Katalog | Fungsional | Buka halaman detail produk | Nama, harga, gambar, deskripsi tampil | BErhasil | DIJALANKAN |
| BB-15 | Keranjang | Fungsional | Tambah produk, ubah jumlah, hapus | Total harga ikut berubah benar | BErhasil | DIJALANKAN |
| BB-16 | Keranjang | BVA jumlah | Jumlah 0, 1, batas stok yang tertera di halaman produk (mis. 17 dan 18 pada RAPOO M300), angka sangat besar, negatif | Ditolak atau dibatasi dengan wajar | Berhasil | DIJALANKAN |
| BB-17 | Checkout | Fungsional | Lanjut sampai **sebelum** pembayaran | Form alamat dan ringkasan tampil; berhenti sebelum bayar | BErhasil |  DIJALANKAN |
| BB-18 | Wishlist | Fungsional | Login, tambah produk ke wishlist, buka halaman wishlist, hapus | Daftar berubah sesuai aksi | BErhasil |  DIJALANKAN |
| BB-19 | Lacak pesanan | EP tidak valid | Isi nomor pesanan acak/format salah | Pesan tidak ditemukan, tanpa error |BErhasil | DIJALANKAN |
| BB-20 | Flash sale / kategori | Fungsional | Buka satu halaman kategori dan flash sale | Daftar produk, harga, dan filter/urutan tampil benar | BErhasil | DIJALANKAN |
| BB-21 | Konfirmasi pembayaran | Fungsional | Buka halamannya dan periksa form; **jangan kirim data** | Field dan validasi terlihat jelas | BErhasil |  DIJALANKAN |

## B. Non-fungsional (ISO/IEC 25010:2023)

| ID | Karakteristik | Langkah | Hasil diharapkan | Hasil aktual | Status |
|---|---|---|---|---|---|
| NF-01 | Interaction capability | Selesaikan alur beli dari beranda; hitung jumlah klik | Alur jelas dan singkat | BElum | BELUM DIJALANKAN |
| NF-02 | Compatibility | Buka beranda dan produk di Chrome, Firefox, Safari | Tampilan konsisten | BElum | BELUM DIJALANKAN |
| NF-03 | Responsif | Buka di lebar 375px (ponsel) | Tanpa scroll horizontal, tombol terjangkau | BElum | BELUM DIJALANKAN |
| NF-04 | Performance efficiency | Catat waktu muat beranda 3x (DevTools > Network) | BElum target, mis. di bawah 3 detik | `[ISI]` | BELUM DIJALANKAN |
| NF-05 | Interaction capability | Cek label form, kontras teks, tab dengan keyboard | Dapat dipakai tanpa mouse |BElum | BELUM DIJALANKAN |
