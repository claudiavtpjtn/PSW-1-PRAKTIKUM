Nama    : Claudia V.T. Panjaitan
NIM     : 41426004
Prodi   : D IV TRPL

Laporan Praktikum Pengembangan Situs Web 1 Week 9 sesi 2

 > Penjelasan return null
return null digunakan ketika data yang dimasukkan tidak sesuai dengan syarat. Misalnya, jumlah barang harus lebih dari 0. Jika jumlahnya 0, fungsi akan mengembalikan null dan tidak melanjutkan perhitungan. Jadi, return null membantu program agar tidak memproses data yang salah.

> Perbedaan console.log() dan return
return digunakan untuk mengembalikan hasil dari sebuah fungsi agar dapat digunakan kembali. Sementara itu, console.log() digunakan untuk menampilkan nilai pada Console sehingga kita dapat melihat hasil program. Jadi, return memberikan hasil dari fungsi, sedangkan console.log() hanya menampilkan hasil tersebut.

> Percobaan function murni sederhana
Saya menggunakan function hitungTotal() untuk menghitung total harga berdasarkan jumlah barang dan harga satuannya. Fungsi tersebut menerima dua nilai, yaitu n sebagai jumlah barang dan harga sebagai harga setiap barang. Setelah itu, kedua nilai dikalikan untuk mendapatkan total harga.
Saya juga mencoba kondisi untuk memeriksa apakah jumlah barang merupakan bilangan bulat dan minimal 1 dengan mencoba mengganti n menjadi -9 dan hasilnya adalah null (tidak valid). Dari percobaan itu saya memahami bahwa jika jumlah yang diberikan tidak sesuai dengan syarat, fungsi mengembalikan null dan tidak melanjutkan perhitungan. Dengan cara ini, program dapat menghindari perhitungan menggunakan jumlah barang yang tidak sesuai.

> Koleksi kegiatan
Pada percobaan ini, saya menggunakan array bernama kegiatan untuk menyimpan beberapa data kegiatan. Setiap data disimpan dalam bentuk object yang memiliki beberapa informasi, seperti id, judul, dan kuota. Saya menambahkan satu object kegiatan lagi ke dalam array untuk mencoba pengolahan data dengan jumlah yang lebih banyak. Setelah itu, saya menggunakan metode filter() untuk memilih kegiatan yang memiliki kuota lebih dari 0. Artinya, hanya kegiatan yang masih memiliki tempat tersedia yang akan dimasukkan ke dalam hasil penyaringan.
Selanjutnya, saya menggunakan metode map() untuk mengambil bagian judul dari kegiatan yang sudah disaring. Dengan cara ini, program hanya menampilkan nama kegiatan tanpa harus menampilkan seluruh informasi yang ada di dalam object.

> Destructuring dan scope
Pada bagian ini, saya mempelajari destructuring untuk mengambil nilai judul dan kuota dari object dengan penulisan yang lebih singkat. Dengan kode const { judul, kuota } = kegiatan[0];, Console berhasil menampilkan HTML 20 sesuai data kegiatan pertama. Saya juga mempelajari scope, yaitu batas penggunaan variabel. Variabel yang dibuat di dalam block menggunakan let atau const hanya dapat digunakan di dalam block tersebut. Jika dipanggil dari luar, akan muncul ReferenceError. Dari percobaan ini, saya memahami pentingnya menempatkan variabel pada bagian kode yang tepat.

> Module
1. Cara Menjalankan
Pada percobaan ini, saya memisahkan kode JavaScript ke dalam dua file, yaitu utils.js dan main.js. File utils.js digunakan untuk menyimpan fungsi bantuan, sedangkan main.js digunakan untuk menjalankan proses utama program. Agar kedua file dapat saling terhubung, saya menggunakan export pada fungsi yang ada di utils.js. Kemudian, fungsi tersebut dipanggil dari main.js menggunakan import.

Selanjutnya, saya menghubungkan main.js dengan file HTML menggunakan kode:
<script type="module" src="main.js"></script>

Atribut type="module" memberi tahu browser bahwa file JavaScript tersebut menggunakan sistem module. Setelah itu, halaman dijalankan menggunakan Live Server di Visual Studio Code. Penggunaan Live Server diperlukan karena browser perlu mengakses file melalui server lokal agar proses import dan export dapat berjalan dengan benar. Jika file HTML dibuka langsung melalui file://, module dapat mengalami masalah saat memuat file lain.

2. Penjelasan Perubahan
 >Penerapan Module
Saya memisahkan fungsi ke dalam file utils.js dan menggunakan export agar fungsi tersebut dapat digunakan dari file lain. Kemudian, pada main.js, saya menggunakan import untuk mengambil fungsi tersebut.
Pemisahan ini membuat kode lebih teratur karena setiap file memiliki tugas masing-masing. Jika suatu fungsi perlu diperbaiki, saya dapat mengubahnya pada file yang sesuai tanpa harus mencari seluruh kode dalam satu file panjang.

 >Pengolahan Data Menggunakan filter() dan map()
Saya menggunakan filter() untuk memilih kegiatan yang masih memiliki kuota, yaitu kegiatan dengan nilai kuota > 0. Setelah mendapatkan data yang sesuai, saya menggunakan map() untuk mengambil judul setiap kegiatan.
Dengan cara ini, data dapat disaring dan diambil sesuai kebutuhan. Misalnya, ketika saya hanya membutuhkan nama kegiatan, saya tidak perlu menampilkan seluruh isi object.

 >Object Destructuring
Saya menggunakan destructuring untuk mengambil properti judul dan kuota dari object pertama dalam array kegiatan. Penulisan const { judul, kuota } = kegiatan[0]; membuat pengambilan data menjadi lebih singkat. Tanpa destructuring, saya harus memanggil masing-masing properti melalui kegiatan[0].judul dan kegiatan[0].kuota.

 >Hasil Uji
Berdasarkan percobaan yang dilakukan, fungsi hitungTotal() dari file utils.js berhasil dipanggil melalui main.js. Hal ini menunjukkan bahwa proses pemisahan file menggunakan export dan import sudah berjalan. Pengujian destructuring juga berhasil karena Console menampilkan HTML 20, sesuai dengan data pada object pertama. Selain itu, penggunaan filter() dan map() berhasil mengolah daftar kegiatan berdasarkan kuota dan mengambil judul dari data yang tersedia. Dari hasil tersebut, saya memahami bahwa module tidak mengubah cara kerja fungsi, tetapi membantu mengatur letak kode agar lebih mudah dibaca, digunakan kembali, dan diperbaiki.

> Batasan
Ada beberapa hal yang perlu diperhatikan ketika menggunakan JavaScript module.

1. Harus Menggunakan Server Lokal
File JavaScript yang menggunakan import dan export sebaiknya dijalankan melalui server lokal seperti Live Server. Jika halaman HTML dibuka langsung dari folder komputer menggunakan file://, browser dapat membatasi pemuatan module karena aturan keamanan.

2. Path File Harus Benar
Lokasi dan nama file pada perintah import harus sesuai dengan susunan folder. Jika nama file atau alamat folder salah, browser tidak dapat menemukan file yang dibutuhkan sehingga module gagal dimuat.

3. Validator HTML dan JavaScript Berbeda
Nu Html Checker digunakan untuk memeriksa struktur dan penulisan HTML. Oleh karena itu, file .js tidak dapat diperiksa menggunakan validator HTML karena memiliki aturan penulisan yang berbeda. Untuk memeriksa JavaScript, saya dapat menjalankan kode melalui browser dan melihat pesan pada Console.


 > AI use statement
Pada praktikum ini, saya menggunakan ai untuk mencari penjelasan materi, fungsi kode, mencari kesalahan program dan memperbaiki penggunaan bahasa saya dalam pembuatan penjelasan eksperimen. Namun, setiap jawaban AI harus diperiksa kembali dengan menjalankan kode dan melihat hasilnya. Penggunaan AI juga harus bertanggung jawab dengan tidak membagikan data rahasia serta mencantumkan penggunaannya dalam AI Use Statement. AI menjadi alat bantu belajar, bukan pengganti pemahaman.