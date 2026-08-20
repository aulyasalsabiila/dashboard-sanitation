# Dashboard Sanitasi Indekos

Dashboard monitoring kondisi sanitasi indekos: ringkasan skor, visualisasi data per kategori/aspek, tabel detail per unit, dan rekomendasi perbaikan berdasarkan tingkat prioritas.

**Live demo:** https://dashboard-sanitation.netlify.app/

## Fitur

- Kartu ringkasan (summary cards) kondisi sanitasi
- Visualisasi data dengan Chart.js: distribusi kategori, skor per aspek (air bersih, toilet, sampah, drainase, ventilasi), distribusi jenis kos
- Tabel detail data per unit kos dengan status (baik/sedang/buruk)
- Rekomendasi perbaikan yang dikelompokkan berdasarkan prioritas

## Struktur File

```
dashboard-sanitasi/
├── index.html   # Struktur halaman
├── styles.css   # Seluruh styling
├── script.js    # Logika data & rendering chart
└── README.md
```

## Tech Stack

- HTML5, CSS3
- JavaScript murni (vanilla)
- [Chart.js](https://www.chartjs.org/) (via CDN) untuk visualisasi data

## Menjalankan secara lokal

```bash
python3 -m http.server 8000
```

lalu buka `http://localhost:8000`. Chart.js dimuat dari CDN, jadi perlu koneksi internet saat pertama kali dibuka.

## Catatan

Folder upload sebelumnya berisi dua versi `styles.css`/`script.js` yang tidak saling cocok (class CSS dan nama fungsi berbeda total). Versi yang dipakai di sini adalah yang benar-benar direferensikan oleh markup di `index.html` — sudah dicek satu per satu supaya hasilnya identik dengan yang live di Netlify. Kalau ternyata versi Tailwind-style yang diupload sebelumnya justru yang dimaksud sebagai versi terbaru, kabari saya supaya markup HTML-nya bisa disesuaikan ulang.
