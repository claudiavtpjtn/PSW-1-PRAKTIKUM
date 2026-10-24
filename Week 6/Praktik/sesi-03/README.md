LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1
NAMA: CLAUDIA V.T. PANJAITAN
NIM: 41426004
PRODI: D IV TRPL

Kode sumber: Week6 sesi2

CARA MENJALANKAN
Untuk menjalankan website, buka folder proyek di Visual Studio Code. Pastikan file HTML, CSS, dan JavaScript sudah tersimpan di folder yang sesuai. Selanjutnya, buka file index.html menggunakan Live Server agar halaman dapat ditampilkan di browser. Setelah website terbuka, periksa apakah seluruh bagian halaman muncul dengan benar, mulai dari header, profil singkat, tujuan belajar, hingga kegiatan mahasiswa. Terakhir, klik tombol Tampilkan salam untuk memastikan fungsi JavaScript berjalan sesuai dengan yang diharapkan. Periksa juga apakah gambarnya muncul.

BATASAN
Data kegiatan pada halaman kegiatan.html masih ditulis secara langsung di dalam HTML sehingga perubahan informasi harus dilakukan dengan mengubah kode secara manual. Selain itu, tata letak kartu menggunakan CSS Grid sehingga tampilannya perlu diuji pada berbagai ukuran layar untuk memastikan susunannya tetap sesuai.

PENJELASAN PERUBAHAN
Pada praktikum ini, saya mengatur gambar pada kartu kegiatan mahasiswa agar dapat menyesuaikan kebutuhan tampilan website. Setiap gambar memiliki dua pilihan ukuran, yaitu 320 piksel dan 640 piksel. Untuk mengaturnya, saya menggunakan atribut srcset dan sizes pada elemen HTML <img>. Atribut srcset memberikan beberapa pilihan gambar kepada browser, sedangkan sizes memberi tahu browser perkiraan lebar ruang yang akan digunakan oleh gambar pada ukuran layar tertentu. Berdasarkan informasi tersebut, browser dapat memilih sumber gambar yang sesuai dengan kebutuhan tampilan. Pengaturan ini digunakan agar gambar lebih efisien dan mendukung tampilan responsif pada berbagai perangkat. Namun, srcset dan sizes tidak langsung mengubah ukuran gambar yang terlihat di halaman karena ukuran tampilannya tetap dipengaruhi oleh CSS.
Selanjutnya, saya menggunakan clamp() untuk mengatur ukuran judul agar dapat menyesuaikan lebar layar, tetapi tetap memiliki batas ukuran terkecil dan terbesar. Saya juga menggunakan CSS Grid untuk mengatur susunan kartu kegiatan mahasiswa dan Flexbox untuk menyusun gambar, judul, serta deskripsi di dalam kartu. Pengaturan ini membantu tampilan website menjadi lebih teratur. Untuk menangani teks yang terlalu panjang, saya menggunakan overflow-wrap: anywhere agar teks dapat berpindah ke baris berikutnya dan tidak keluar dari batas kartu.

Selain itu, saya mempelajari container query untuk mengatur tampilan kartu berdasarkan lebar wadahnya, serta prefers-reduced-motion untuk menonaktifkan efek transisi ketika pengguna mengaktifkan pengaturan pengurangan gerakan pada perangkatnya. Pada bagian JavaScript, saya membuat fungsi tombol salam yang menampilkan pesan ketika tombol diklik. Dengan demikian, website tidak hanya menampilkan informasi, tetapi juga dapat merespons tindakan pengguna.

PENJELASAN ERROR
Saat memeriksa file style.css menggunakan Nu Html Checker, ditemukan dua error, yaitu container-type dan @container. Error ini muncul karena validator tidak mengenali fitur Container Query yang digunakan untuk menyesuaikan tampilan kartu berdasarkan ukuran wadahnya.

Saya memilih untuk tetap menggunakan kedua kode tersebut karena merupakan bagian dari materi praktikum. Selanjutnya, saya melakukan pengujian melalui Live Server untuk memeriksa tampilan halaman. Hasil pengujian perlu dilihat langsung di browser untuk memastikan halaman tampil dengan baik dan padding kartu berubah ketika ukuran wadah memenuhi kondisi yang ditentukan. Dengan demikian, fitur Container Query tetap dipertahankan meskipun validator menampilkan error.

pada validator html juga terdapat error, errornya terjadi karena saya menggunakan lebih dari 1 kode <main>

    AI Use Statement    

Saya menggunakan AI, yaitu ChatGPT, untuk membantu memahami materi praktikum, istilah-istilah yang digunakan, dan fungsi kode HTML, CSS, serta JavaScript yang dibuat. AI juga membantu saya memahami materi tentang gambar responsif, CSS Grid, Flexbox, container query, pengaturan tampilan sesuai preferensi pengguna dan mempelajari error yang terjadi. Selain itu, AI digunakan untuk membantu menyusun dan merapikan kode dan dokumentasi praktikum agar lebih teratur dan mudah dipahami. Namun, setiap saran dan penjelasan dari AI tetap saya pelajari dan periksa kembali. Saya juga memeriksa kode serta menguji hasilnya secara langsung menggunakan browser dan DevTools untuk memastikan setiap fitur berjalan dengan baik. Dengan demikian, AI digunakan sebagai alat bantu belajar, sedangkan pemahaman terhadap kode dan pemeriksaan hasil praktikum tetap menjadi tanggung jawab saya.
