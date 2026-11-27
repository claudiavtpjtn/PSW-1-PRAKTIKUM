Nama    : Claudia V.T. Panjaitan
NIM     : 41426004
Prodi   : D IV TRPL

LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1 WEEK 12 SESI 2

> Cara Menjalankan

Buka folder sesi-03 menggunakan Visual Studio Code. Kemudian cari file index.html, klik kanan, dan pilih Open with Live Server. Setelah halaman terbuka di browser, program dapat dicoba dengan menambahkan dan menghapus nama peserta melalui form yang tersedia.

> Penjelasan Perubahan



Pada percobaan ini, dilakukan pemeriksaan kualitas website Daftar Peserta menggunakan Lighthouse melalui DevTools pada browser. Pengujian awal mendapatkan skor Performance 100, Accessibility 94, Best Practices 96, dan SEO 90. Dari hasil tersebut, ditemukan beberapa hal yang perlu diperbaiki, yaitu warna tulisan dan tombol yang kurang memiliki kontras, file favicon yang tidak ditemukan, serta belum adanya meta description pada halaman.

Perbaikan pertama dilakukan pada file style.css dengan mengganti warna judul dan tombol menjadi warna yang lebih gelap agar tulisan lebih mudah dibaca. Pada pengujian Lighthouse, ditemukan kesalahan berupa file favicon.ico yang tidak ditemukan sehingga menghasilkan status 404. Kesalahan ini terjadi karena browser mencoba memuat ikon website, tetapi file tersebut belum tersedia. Untuk memperbaikinya, dibuat file favicon.svg dan dihubungkan ke halaman HTML menggunakan tag link rel="icon". Setelah itu, halaman dimuat ulang dan diuji kembali menggunakan Lighthouse untuk memastikan file ikon berhasil dimuat. Setelah itu, dibuat file favicon.svg dan dihubungkan ke index.html agar browser dapat memuat ikon website dengan benar. Pada bagian HTML juga ditambahkan meta description untuk memberikan penjelasan singkat mengenai isi website kepada mesin pencari.

Setelah perbaikan warna dan favicon dilakukan, Lighthouse dijalankan kembali. Hasilnya, skor Accessibility meningkat dari 94 menjadi 100 dan Best Practices meningkat dari 96 menjadi 100, sedangkan Performance tetap 100. Skor SEO masih 90 pada pengujian tersebut karena meta description baru ditambahkan setelahnya dan belum dilakukan pengujian ulang.

Dari percobaan ini, dapat dipahami bahwa Lighthouse membantu menemukan bagian website yang masih perlu diperbaiki. Perbaikan dilakukan berdasarkan masalah yang ditemukan, kemudian diuji kembali untuk melihat hasilnya. Dengan cara ini, kualitas website dapat diperiksa dan ditingkatkan secara bertahap.

Pengujian dilakukan melalui browser dan DevTools. Hasilnya, fitur tambah dan hapus peserta berjalan dengan baik, halaman dapat dimuat melalui Live Server, dan file utama seperti HTML, CSS, serta JavaScript berhasil dimuat. Penyimpanan data juga diperiksa melalui Local Storage dengan key pswi.peserta.v1.

>AI USE STATEMENT
AI digunakan untuk membantu memahami materi praktikum, menganalisis hasil pengujian, dan mencari penyebab kesalahan pada program. Saran yang diberikan diperiksa kembali dengan menjalankan program melalui browser dan DevTools. AI digunakan sebagai alat bantu belajar, sedangkan pengujian dan pemeriksaan hasil dilakukan secara langsung.