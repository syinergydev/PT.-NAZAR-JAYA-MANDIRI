# Website Demo — PT. Nazar Jaya Mandiri

Website statis multi-section untuk presentasi konsep SynergyDev. Dibuat dari arsip aset yang diberikan, dengan palet hijau-putih dan kompatibilitas GitHub Pages.

## Isi
- `index.html` — halaman website.
- `styles.css` — desain responsif.
- `script.js` — navigasi mobile, pencarian/pengurutan katalog, modal konsultasi, galeri lightbox, dan pembentukan pesan WhatsApp.
- `assets/images/` — aset foto dan logo dari arsip yang diberikan.
- `assets/videos/` — video asli dari arsip (belum dipasang otomatis ke halaman agar halaman tetap ringan).

## Cara deploy ke GitHub Pages
1. Buat repository baru di GitHub.
2. Ekstrak ZIP ini, lalu unggah seluruh isi folder `NJM-GitHub-Ready` ke root repository (pastikan `index.html` berada di root).
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses selesai dan buka URL GitHub Pages yang diberikan GitHub.

Tidak membutuhkan build command, Node.js, database, atau dependency eksternal. Semua path menggunakan path relatif agar sesuai dengan repository GitHub Pages.

## Fitur
- Navigasi responsive.
- Katalog dengan pencarian dan sorting harga.
- Tombol tanya paket dan formulir konsultasi.
- Formulir membentuk pesan WhatsApp; pengguna tetap menekan tombol kirim di WhatsApp.
- Galeri foto dengan lightbox.
- Link sosial, telepon, dan peta.

## Catatan penting sebelum dipresentasikan
- Ini **DEMO / redesign concept** oleh SynergyDev, bukan website resmi yang telah disetujui PT. Nazar Jaya Mandiri.
- Harga dan nama paket pada katalog disalin dari materi brosur di arsip. Harga, tanggal, fasilitas, maskapai, hotel, dan ketersediaan harus dikonfirmasi kepada perusahaan sebelum dipublikasikan.
- Logo maskapai/organisasi ditampilkan sebagai **referensi yang muncul pada materi arsip**, bukan klaim kemitraan resmi dengan NJM.
- Pastikan izin penggunaan foto jamaah, logo, brosur, dan video telah diperoleh sebelum publikasi publik.
- Form reservasi ini bukan sistem booking produksi: tidak mengirim data ke server, tidak membuat reservasi resmi, dan tidak menyimpan data pengunjung. Data hanya disusun menjadi pesan WhatsApp setelah pengguna mengisi dan menekan tombol.
- Tidak ada dashboard admin/backend pada versi statis ini.
- Kontak dan tautan sosial bersumber dari informasi yang diberikan untuk pembuatan demo. Verifikasi kembali sebelum live.

## Penyesuaian
- Ubah nomor WhatsApp di `index.html` dan `script.js` jika perusahaan memberikan nomor resmi yang berbeda.
- Ubah data paket pada kartu katalog di `index.html` setelah menerima daftar harga dan jadwal yang disetujui.
- Jangan mengganti logo atau mengubah identitas visual tanpa persetujuan pemilik.
