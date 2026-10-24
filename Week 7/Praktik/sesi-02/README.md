LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1
NAMA: CLAUDIA V.T. PANJAITAN
NIM: 41426004
PRODI: D IV TRPL

Kode sumber: week 2 sesi 3, week 3 sesi 3, week 5 sesi 3

CARA MENJALANKAN
1. Jalankan file index.html dengan Live Server.
2. Coba tautan navigasi yang tersedia untuk berpindah ke halaman Beranda, Kegiatan, dan Daftar.
3. Pada setiap halaman, periksa apakah CSS dan gambar tampil dengan benar.
4. Buka DevTools dengan menekan F12. Gunakan tab Network untuk memeriksa file yang berhasil dimuat dan tab Console untuk melihat pesan error.

Halaman | kasus | harapan | hasil nyata | status



BATASAN
Data kegiatan pada halaman kegiatan.html masih ditulis secara langsung di dalam HTML sehingga perubahan informasi harus dilakukan dengan mengubah kode secara manual. Selain itu, tata letak kartu menggunakan CSS Grid sehingga tampilannya perlu diuji pada berbagai ukuran layar untuk memastikan susunannya tetap sesuai.

PENJELASAN PERUBAHAN
Praktikum ini membagi website menjadi tiga halaman, yaitu index.html, kegiatan.html, dan daftar.html. Ketiganya menggunakan CSS yang sama agar tampilan lebih konsisten.
Halaman beranda menampilkan kartu kegiatan berisi gambar, judul, dan keterangan. Penggunaan srcset dan sizes membantu browser memilih ukuran gambar yang sesuai, sedangkan max-width: 100% dan height: auto membuat gambar menyesuaikan layar.
CSS Grid mengatur susunan kartu menjadi tiga kolom pada layar lebar, sementara Flexbox menyusun isi kartu secara vertikal. Fungsi clamp() menyesuaikan ukuran judul. Selain itu, Container Queries mengatur padding kartu berdasarkan lebar wadah, prefers-reduced-motion mengurangi animasi bagi pengguna yang membutuhkannya, dan efek hover memberikan tanggapan visual saat kartu atau gambar diarahkan oleh penunjuk.

PENJELASAN ERROR
Berdasarkan hasil pemeriksaan menggunakan Nu HTML Checker pada file kegiatan.html, ditemukan satu warning atau peringatan pada baris ke-26, yaitu penggunaan atribut border="1" pada elemen <table>. Atribut tersebut digunakan untuk menampilkan garis tepi pada tabel, tetapi sudah tidak disarankan dalam HTML modern. Hal ini bukan termasuk error yang menyebabkan halaman gagal ditampilkan, melainkan penggunaan atribut lama yang sebaiknya diperbaiki agar kode lebih sesuai dengan standar HTML saat ini

    AI Use Statement    
 Saya menggunakan ChatGPT sebagai alat bantu untuk memahami instruksi praktikum, memeriksa struktur README, dan menyusun penjelasan tentang HTML, CSS, navigasi ant halaman, pengujian responsif, Network, dan validator. Saran yang diberikan tetap perlu dibandingkan dengan kode proyek dan hasil pengujian langsung. Saya bertanggung jawab untuk menjalankan situs, memeriksa hasil validator dan DevTools, serta memastikan isi laporan sesuai dengan bukti yang benar-benar diperoleh.