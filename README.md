# PT. Nazar Jaya Mandiri — Demo Redesign (SynergyDev)

Situs statis (HTML/CSS/JS tanpa framework). **Demo redesign, bukan website resmi perusahaan.**

## Struktur
- `index.html` — hasil build (jangan diedit langsung bila ingin mengubah ikon)
- `index.src.html` + `build.py` — sumber; jalankan `python3 build.py` untuk menyisipkan ikon SVG brand
- `css/style.css`, `js/app.js` — gaya dan logika (paket, galeri, lightbox, formulir)
- `assets/img/` — foto & logo WebP dari arsip; `assets/icons/` — SVG brand Simple Icons (CC0)

## Deploy GitHub Pages
Semua path relatif, jadi aman untuk subfolder repo. Push isi folder ini ke branch `main`,
lalu Settings → Pages → Deploy from branch → `main` / root.

## Mengubah data
Data paket ada di array `PK` pada `js/app.js`, galeri di `GL`. Semua data paket berasal dari 3 brosur di arsip.

## Hal yang perlu dikonfirmasi perusahaan
- Alamat kantor dan tautan Google Maps resmi (saat ini tautan pencarian generik)
- Jadwal terbaru paket Reguler (brosur: 23 Sep 2026, sudah lewat) dan tanggal paket Syawal
- Izin penggunaan logo mitra/institusi dan status kerja sama
- Dua video WhatsApp di arsip tidak dipakai (berat); bisa dikompres bila ingin dipakai
