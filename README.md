# Modul Asset Management Rumah Sakit

Prototipe modul manajemen aset (asset register) berbasis web — satu file `index.html` yang sepenuhnya self-contained (HTML + CSS + JS + font + design system di-inline, tanpa build step dan tanpa dependensi eksternal). Dibangun di atas **Kontrola Design System** (tristek).

## Live preview

Buka `index.html` langsung di browser, atau aktifkan **GitHub Pages** (Settings → Pages → Deploy from branch → root) dan modul langsung bisa diakses dari URL Pages tanpa konfigurasi apa pun.

## Fitur

### Dashboard
- **3 grafik donut** — komposisi aset per *Type*, *Usage* (In Use / Idle), dan *Condition* (Good / Damaged), dengan tooltip per segmen.
- **Dark / light mode** dengan toggle di navigasi.
- Indikator *last synced*.

### Asset Register (tabel)
- **Pencarian** dengan saran otomatis (nama, tag, serial, owner).
- **Filter** dalam satu tombol popover — Type, Usage, Condition, Location — dengan badge jumlah filter aktif dan *Clear all*.
- **Sorting** semua kolom, **pagination**, dan pilihan jumlah baris per halaman.
- Status servis/garansi dihitung otomatis dari tanggal *end of service*.

### Tambah aset
- Form dengan validasi, tag otomatis (`AST-XXXX`), dan **dua foto** (kondisi & bersama pemilik) — upload atau ambil kamera, dengan kontrol zoom/rotate/share.
- **QR code** otomatis dari asset tag + label siap cetak.
- **Bulk import** dari file CSV/Excel.
- Field **Submitted by** (wajib) — tercatat di activity log.

### Aset bersifat immutable
- **Tidak ada tombol edit.** Mengubah data = alur **Delete & re-create**: rekaman lama dihapus (terverifikasi), lalu form baru terbuka dengan data ter-prefill.
- **Penghapusan diproteksi**: wajib memilih **reason** (dropdown: data correction, duplicate, disposed, lost/stolen, dll), mengisi **Deleted by**, dan memasukkan **kode OTP 6 digit** (disimulasikan — kode demo ditampilkan di modal).

### Audit / stock opname
- Audit **per lokasi** atau seluruh lokasi, dengan nama auditor.
- 4 status verifikasi fisik per aset: **Found · Wrong location · Damaged · Missing** (Damaged otomatis mengubah kondisi aset).
- Progress bar, ringkasan hasil + daftar *exceptions*, lalu **export CSV / PDF**.
- Indikator **last audit** + riwayat seluruh sesi audit dapat diunduh (CSV) kapan saja.
- Setiap aset menyimpan *last audit* (tanggal, status, auditor) — tampil read-only di popup detail.

### Activity log
- Jejak **immutable** untuk setiap penambahan dan penghapusan aset: siapa, kapan, dan alasannya.
- Dapat dilihat dari tombol **Activity** dan diunduh sebagai CSV. Entri tidak bisa diedit atau dihapus.

### Lainnya
- **Scan QR** (simulasi) untuk membuka detail aset.
- **Export tabel** ke Excel / CSV / PDF — menyertakan kolom *Last audit*, *Audit result*, dan *Last submitted*.
- Popup detail dengan blok **System record (read-only)**: *last submitted* (+ siapa) dan *last audit* — tidak muncul di tabel, hanya di popup dan hasil export.
- **Responsif** untuk desktop, tablet, dan mobile.
 
