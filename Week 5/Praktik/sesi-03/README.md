LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1
NAMA: CLAUDIA V.T. PANJAITAN
NIM: 41426004
PRODI: D IV TRPL

Kode sumber: Week5 sesi2

No.| Kondisi Pengujian         | Hasil yang Diharapkan 
 1 | Layar 320px               | Konten tidak mengalami overflow horizontal 
 2 | Layar 768px               | Jumlah kolom menyesuaikan ruang 
 3 | Layar 1200px              | Katalog tampil dengan susunan yang sesuai 
 4 | Satu card                 | Card tetap rapi dan mudah dibaca 
 5 | Lima card                 | Card tersusun otomatis dalam grid 
 6 | Teks panjang              | Teks tetap berada di dalam card 
 7 | Navigasi menggunakan Tab  | Urutan fokus mengikuti urutan HTML 

CARA MENJALANKAN
Untuk menjalankan website, buka folder proyek di Visual Studio Code. Pastikan file HTML, CSS, dan JavaScript sudah tersimpan di folder yang sesuai. Selanjutnya, buka file index.html menggunakan Live Server agar halaman dapat ditampilkan di browser. Setelah website terbuka, periksa apakah seluruh bagian halaman muncul dengan benar, mulai dari header, profil singkat, tujuan belajar, hingga kegiatan mahasiswa. Terakhir, klik tombol Tampilkan salam untuk memastikan fungsi JavaScript berjalan sesuai dengan yang diharapkan.

BATASAN
Data kegiatan pada halaman kegiatan.html masih ditulis secara langsung di dalam HTML sehingga perubahan informasi harus dilakukan dengan mengubah kode secara manual. Selain itu, tata letak kartu menggunakan CSS Grid sehingga tampilannya perlu diuji pada berbagai ukuran layar untuk memastikan susunannya tetap sesuai.

BEFORE
Bagian kegiatan menampilkan empat kartu, yaitu Lokakarya HTML, Diskusi CSS, Audit Web, dan percobaan teks panjang tanpa spasi. Susunan kartu masih menggunakan Flexbox, melalui properti display: flex, flex-wrap: wrap, dan gap.

AFTER
Bagian kegiatan pada halaman utama juga diubah dari wadah dengan class cards menjadi catalog, yang menggunakan CSS Grid untuk mengatur susunan kartu. Pengaturan Grid menggunakan grid-template-columns, repeat(), auto-fit, dan minmax() agar jumlah kolom dapat menyesuaikan ruang yang tersedia.
Pengaturan kartu dikembangkan menggunakan display: flex dan flex-direction: column agar judul, deskripsi, dan konten di dalam kartu tersusun secara vertikal. Properti gap digunakan untuk memberi jarak antarelemen, sedangkan margin pada judul dan paragraf diatur menjadi 0.

    AI Use Statement    
    Alat: ChatGPT

    Tujuan penggunaan:
Membantu memahami konsep CSS Grid, Flexbox, dan penyusunan
dokumentasi README.md.

    Bagian yang dibantu:
Penyusunan penjelasan konsep dan struktur dokumentasi.

    Catatan:
Kode dan hasil akhir tetap diperiksa agar sesuai dengan
pemahaman serta pengerjaan praktikum yang dilakukan.
