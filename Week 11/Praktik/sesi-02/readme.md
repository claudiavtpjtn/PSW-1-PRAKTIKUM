Nama    : Claudia V.T. Panjaitan
NIM     : 41426004
Prodi   : D IV TRPL

LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1 WEEK 11 SESI 2

>Cara menjalankan
1. Ekstrak file ZIP praktikum ke folder yang diinginkan.
2. Buka folder proyek sesi-02 menggunakan Visual Studio Code.
3. Pastikan seluruh file sudah berada pada tempatnya, terutama index.html, style.css, main.js, dan folder data yang berisi kegiatan.json.
4. Pastikan ekstensi Live Server sudah tersedia di VS Code.
5. Klik kanan pada file index.html, kemudian pilih Open with Live Server.
6. Setelah halaman terbuka di browser, klik tombol Muat kegiatan untuk mengambil data dari file JSON.
7. Jika berhasil, daftar kegiatan HTML dan CSS akan ditampilkan pada halaman web.
8. Untuk melihat proses dan memastikan tidak ada kesalahan, buka Developer Tools dengan menekan F12, kemudian periksa bagian Console dan Network.

>Penjelasan praktikum
Pada praktikum ini, saya mempelajari cara membuat dan menggunakan data JSON lokal sebagai sumber data pada halaman web. Data tersebut dibuat dalam file kegiatan.json yang berisi dua kegiatan, yaitu HTML dan CSS. Setiap kegiatan memiliki informasi berupa id, judul, dan kuota. File JSON ini digunakan sebagai contoh data yang nantinya akan diambil dan ditampilkan menggunakan JavaScript. Sebelum digunakan, saya juga memastikan bahwa format JSON sudah benar dan dapat diakses melalui server lokal.

Selanjutnya, saya membuat tampilan halaman menggunakan HTML yang terdiri dari tombol Muat kegiatan, tempat untuk menampilkan pesan, dan daftar kegiatan. Tombol tersebut digunakan untuk memulai proses pengambilan data, sedangkan daftar menjadi tempat menampilkan hasilnya. Setelah tampilan siap, saya menggunakan JavaScript untuk memilih elemen HTML berdasarkan ID yang sudah dibuat agar setiap bagian dapat dihubungkan dengan proses pengambilan data.

Pada bagian JavaScript, saya menggunakan fetch() untuk mengambil data dari file JSON dan async/await untuk mengatur proses pengambilan data tersebut. Saya juga mempelajari bahwa fetch() menggunakan Promise, yaitu cara JavaScript menangani proses yang membutuhkan waktu dan hasilnya bisa berhasil maupun gagal. Setelah data diterima, program memeriksa respons menggunakan r.ok untuk memastikan permintaan berhasil. Jika terjadi kesalahan, seperti file tidak ditemukan atau menghasilkan HTTP 404, program akan menangani kesalahan tersebut melalui catch dan menampilkan pesan gagal memuat.

Setelah data berhasil diambil, program memeriksa apakah data tersebut berbentuk array menggunakan Array.isArray(). Pemeriksaan ini dilakukan agar data yang diterima sesuai dengan bentuk yang dibutuhkan program. Kemudian, setiap data dibaca menggunakan perulangan for...of dan diperiksa apakah bagian judul memiliki tipe data string. Jika sesuai, program membuat elemen daftar menggunakan document.createElement() dan menampilkan judul dengan textContent. Penggunaan textContent membuat isi data ditampilkan sebagai teks biasa, sehingga tulisan yang mengandung markup HTML tidak langsung diproses sebagai elemen HTML.

Terakhir, saya menghubungkan tombol Muat kegiatan dengan fungsi pengambilan data menggunakan addEventListener("click", muat). Dengan begitu, proses pengambilan dan penampilan data akan berjalan ketika tombol diklik. Melalui praktikum ini, saya memahami bahwa mengambil data dari JSON tidak hanya sekadar membaca isi file, tetapi juga perlu memeriksa keberhasilan permintaan, memastikan struktur data sesuai, dan menampilkan hasilnya dengan cara yang benar.

>Batasan
Pada praktikum ini, data yang digunakan masih berasal dari file JSON lokal sehingga penambahan kegiatan harus dilakukan secara manual. Program juga masih memiliki penanganan kesalahan yang sederhana dan belum dilengkapi tampilan khusus untuk proses loading, pesan ketika data kosong, serta fitur timeout untuk membatasi waktu pengambilan data. Selain itu, pemeriksaan data baru dilakukan pada bentuk array dan tipe data judul, sedangkan bagian id dan kuota belum diperiksa secara menyeluruh. Meskipun demikian, program sudah dapat digunakan untuk memahami dasar pengambilan data JSON menggunakan Fetch, Promise, dan async/await, serta cara menangani kesalahan saat proses pengambilan data berlangsung.

> Hasil Pengujian

Pengujian	    |Hasil	            |Keterangan
JSON lokal	    |Berhasil	        |Dua data kegiatan terbaca.
Fetch	        |Berhasil	        |Data berhasil diambil.
HTTP 404	    |Berhasil	        |Error 404 terdeteksi.
Array kosong	|Berhasil	        |Diperiksa melalui Console.
Judul markup	|Berhasil	        |Tag HTML tampil sebagai teks.
Validasi JSON	|Berhasil	        |Struktur JSON dinyatakan valid.

JSON valid dan Fetch berhasil. File JSON dapat dibuka melalui server lokal. Ketika tombol Muat kegiatan ditekan, permintaan berhasil dilakukan dan data berupa dua object dapat dilihat pada Console. Pada tab Network juga terlihat permintaan terhadap file JSON dengan status berhasil.

Array kosong. Ketika data yang diuji berupa array kosong, Console menunjukkan array dengan panjang 0. Karena tidak ada data yang dapat dibaca oleh perulangan for...of, tidak ada judul yang ditambahkan ke daftar. Program dapat membaca kondisi tersebut, tetapi belum menampilkan pesan khusus seperti Belum ada kegiatan.

HTTP 404. Untuk menguji kegagalan permintaan, path Fetch diubah sementara menjadi hilang.json. Karena file tersebut tidak ditemukan, server memberikan respons HTTP 404. Pemeriksaan r.ok kemudian menghasilkan error yang ditangani oleh catch. Setelah pengujian, path perlu dikembalikan ke ./data/kegiatan.json.

Judul mengandung markup. Judul pertama pada data JSON berisi tulisan <p> HTML </p>. Hasilnya, tulisan tersebut muncul apa adanya pada halaman. Hal ini terjadi karena program menggunakan textContent, sehingga browser tidak memproses tulisan tersebut sebagai elemen HTML.

> AI USE STATEMENT
Dalam praktikum ini, saya menggunakan AI sebagai alat bantu untuk memahami materi JSON, Promise, async/await, dan Fetch, serta membantu menyusun penjelasan fungsi kode ke dalam README. Saya memeriksa kembali penjelasan tersebut dengan membaca kode, menjalankan program melalui browser, dan melihat hasil pengujian pada Console serta Network. AI digunakan untuk membantu proses belajar, bukan menggantikan pemahaman dan pengerjaan praktikum saya sendiri. Saya tidak memasukkan password, API key rahasia, atau data pribadi ke dalam AI.