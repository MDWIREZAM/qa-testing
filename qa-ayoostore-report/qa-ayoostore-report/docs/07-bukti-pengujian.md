# 07. Bukti Pengujian (Screenshot)

Screenshot diambil pada 28 November 2026 dari https://ayoostore.id. Tidak memuat data pribadi. `[ISI]` Sebutkan browser, versi, dan perangkat yang dipakai.

| Berkas | Menunjukkan | Mendukung test case | Catatan |
|---|---|---|---|
| `evidence/01-beranda.png` | Beranda termuat: bahasa (English), Customer Care, Login, Registration, kolom pencarian, Wishlist (0), Cart (0), menu Home / Flash Sale / Blogs / All Brands / All Categories / All Stores / Starlink, banner promo | BB-01, bagian BB-20 | Beranda tampil lengkap; tautan Login dan Registration terlihat. Antarmuka berbahasa Inggris. |
| `evidence/02-pencarian-saran.png` | Mengetik "s" di pencarian memunculkan saran: Popular suggestions, Category suggestions, dan Products (dengan harga) | Sebagian BB-11 (saran otomatis) | Yang terbukti hanya **saran otomatis**. Untuk BB-11 penuh, tambahkan screenshot halaman **hasil pencarian** setelah menekan Enter. |
| `evidence/03-menu-kategori.png` | Menu kategori terbuka: Supplies, PC Notebook, Peripheral, Vaporizer, Networking | Sebagian BB-20 | Tampak lebar layar sempit. `[ISI]` Catat lebar layarnya; kalau ini mode ponsel, bukti ini juga bisa dipakai untuk NF-03. |
| `evidence/04-detail-produk.png` | Detail produk RAPOO Mouse Wireless M300 Light Grey: 3 foto, SKU M300LG, harga Rp 140.000 (termasuk PPN), kuantitas 1, "17 available", total harga Rp 140.000, 0 ulasan | BB-14, awal BB-15 dan BB-16 | Nama, harga, gambar, dan stok tampil. Total harga benar untuk kuantitas 1; belum terbukti untuk kuantitas lain. |
| `evidence/05-hasil-pencarian-asus.png` | Hasil pencarian "asus": judul "Search result for asus", filter (Produk Promo Saja, Categories, Price range), dua produk ASUS dengan harga dan tombol Lihat Detil / keranjang | BB-11 | Pencarian kata yang ada mengembalikan hasil relevan. |

## Bukti yang masih ditunggu
- BB-13 (pencarian kosong): hasil sudah dilaporkan penguji (menampilkan semua produk tanpa error), tetapi screenshotnya belum ada. Simpan sebagai `evidence/06-pencarian-kosong.png` lalu tambahkan barisnya di tabel.

## Hal yang perlu dicek ulang (calon temuan, belum tentu defect)
1. Pada `02-pencarian-saran.png`, panel keranjang ("Your Cart is empty") tampak menumpuk di atas daftar saran pencarian. `[ISI]` Ulangi: apakah muncul setiap kali pointer berada di ikon keranjang, atau juga saat hanya mengetik? Catat langkahnya. Jika konsisten, catat sebagai temuan tampilan (severity rendah) di `06`.
2. Pada `05-hasil-pencarian-asus.png`, daftar kategori di filter (Printing & Supplies, PC Notebook, Peripheral, Vaporizer, Router) berbeda dari menu utama (Supplies, PC Notebook, Peripheral, Vaporizer, Networking). `[ISI]` Cek apakah filter memang menyesuaikan hasil pencarian atau ada ketidakkonsistenan nama kategori.
3. Antarmuka berbahasa Inggris sementara toko ditujukan ke pengguna Indonesia. Catat sebagai observasi, bukan defect, kecuali ada persyaratan bahasa.

## Cara menambah bukti
- Beri nama berurutan, mis. `04-registrasi-email-salah.png`, dan tambahkan baris di tabel ini.
- Satu screenshot per test case: tampilkan langkah akhir dan hasilnya (pesan error atau sukses).
- Tutup atau blur data pribadi sebelum diunggah.
- Status test case di `tests/manual/black-box-testcases.md` baru diubah menjadi Lulus/Gagal setelah Anda memutuskan berdasarkan bukti.
