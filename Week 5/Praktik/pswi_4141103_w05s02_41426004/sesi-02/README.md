LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1
NAMA: CLAUDIA V.T. PANJAITAN
NIM: 41426004
PRODI: D IV TRPL

Kode sumber: Week1 sesi2


No.	BAGIAN YANG DIUJI	  |     HASIL YANG DIHARAPKAN
1	Membuka index.html    | Halaman web tampil di browser.
2	Memuat file CSS	      | Warna, jarak, dan bentuk kartu tampil sesuai aturan CSS.
3	Struktur kartu	      | Terdapat tiga kartu utama yang terpisah.
4	Kartu kegiatan	      | Empat kartu kegiatan tampil di dalam kartu Kegiatan Mahasiswa.
5	Teks panjang	      | Teks panjang membungkus agar tetap berada di dalam kartu.

CARA MENJALANKAN
Untuk menjalankan website, buka folder proyek di Visual Studio Code. Pastikan file HTML, CSS, dan JavaScript sudah tersimpan di folder yang sesuai. Selanjutnya, buka file index.html menggunakan Live Server agar halaman dapat ditampilkan di browser. Setelah website terbuka, periksa apakah seluruh bagian halaman muncul dengan benar, mulai dari header, profil singkat, tujuan belajar, hingga kegiatan mahasiswa. Terakhir, klik tombol Tampilkan salam untuk memastikan fungsi JavaScript berjalan sesuai dengan yang diharapkan.

BATASAN
CSS yang digunakan untuk mengatur kartu kegiatan masih bergantung pada ukuran ruang yang tersedia, sehingga susunan kartu dapat berubah ketika ukuran layar berbeda. Selain itu, properti overflow-wrap: anywhere hanya membantu membungkus teks panjang agar tetap berada di dalam kartu, bukan mengatur keseluruhan tampilan halaman.

CATATAN BEFORE AFTER
    BEFORE
Pada versi awal, halaman web masih berfokus pada tampilan Selamat Datang, Profil Singkat, dan Tujuan Belajar. Desain halaman menggunakan latar belakang abu-abu dengan pengaturan CSS yang masih sederhana. Kartu kegiatan mahasiswa belum tersedia, sehingga halaman belum memiliki bagian khusus untuk menampilkan beberapa kegiatan dalam bentuk kartu. Pengaturan CSS juga belum menggunakan display: flex, flex-wrap, dan gap untuk mengatur susunan kartu. Selain itu, struktur HTML dan CSS masih dapat dirapikan agar lebih mudah dibaca dan dikembangkan.

    AFTER
Pada versi setelah perubahan, halaman web dikembangkan dengan menambahkan bagian Kegiatan Mahasiswa yang berisi empat kartu, yaitu Lokakarya HTML, Diskusi CSS, Audit Web, dan percobaan teks panjang tanpa spasi. Tampilan halaman juga diperbarui dengan latar belakang biru muda, kartu berwarna putih, serta kartu kegiatan berwarna hijau muda dengan sudut membulat. Pada CSS, ditambahkan display: flex untuk menyusun kartu, flex-wrap: wrap agar kartu dapat berpindah ke baris berikutnya jika ruang tidak cukup, dan gap untuk mengatur jarak antarkartu. Properti overflow-wrap: anywhere juga ditambahkan untuk membantu teks panjang tanpa spasi tetap berada di dalam kartu. Selain itu, informasi kontak dan keterangan praktikum disatukan dalam bagian footer agar lebih rapi.

    PERUBAHAN YANG DILAKUKAN
HTML: Menambahkan empat kartu kegiatan mahasiswa dan merapikan beberapa bagian konten halaman.
CSS: Mengubah warna latar belakang, menambahkan garis tepi dan sudut membulat, serta mengatur jarak antarelemen.
Tata letak: Menggunakan Flexbox agar kartu kegiatan tersusun lebih teratur dan dapat menyesuaikan ruang yang tersedia.
Penanganan teks panjang: Menambahkan overflow-wrap: anywhere agar teks tanpa spasi tidak mudah meluber dari kartu.
JavaScript: Mempertahankan fungsi tombol Tampilkan salam yang menampilkan pesan ketika diklik.
Dokumentasi: Menyiapkan README untuk menjelaskan cara menjalankan program, hasil pengujian, batasan, dan perubahan yang dilakukan.

Perubahan dari versi awal ke versi setelah pengembangan membuat halaman web memiliki informasi yang lebih lengkap dan tampilan yang lebih menarik. Penambahan kartu kegiatan membantu informasi disusun dengan lebih jelas, sedangkan penggunaan Flexbox dan overflow-wrap membantu mengatur tata letak serta menangani teks panjang. Melalui perubahan ini, saya belajar bahwa HTML digunakan untuk menyusun struktur halaman, CSS untuk mengatur tampilan, dan JavaScript untuk memberikan interaksi kepada pengguna.

PENJELASAN TENTANG BUG YANG TERJADI
Error yang terdeteksi oleh validator terjadi karena saya menggunakan dua tag <main> untuk memisahkan bagian Tujuan Belajar dan Kegiatan Mahasiswa. Padahal, elemen <main> digunakan untuk membungkus konten utama dari sebuah halaman web dan sebaiknya hanya digunakan satu kali dalam satu halaman. Penggunaan dua tag <main> tersebut membuat struktur HTML kurang sesuai dengan standar yang dianjurkan.

AI Use Statement
Saya menggunakan AI sebagai bantuan dalam memahami konsep, istilah istilah dan fungsi dari kode yang dibuat dan membantu menyusun dokumentasi praktikum agar lebih rapi dan mudah dipahami. Setiap hasil dan perubahan pada kode tetap diperiksa dan diuji secara langsung menggunakan browser dan DevTools.