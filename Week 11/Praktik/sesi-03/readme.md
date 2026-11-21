Nama    : Claudia V.T. Panjaitan
NIM     : 41426004
Prodi   : D IV TRPL

LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1 WEEK 11 SESI 3

> Cara Menjalankan Program

1. Ekstrak file ZIP praktikum ke folder yang diinginkan.
2. Buka folder sesi-03 menggunakan Visual Studio Code.
3. Pastikan file index.html, style.css, dan main.js serta folder data yang berisi kegiatan.json sudah tersedia.
4. Pastikan ekstensi Live Server sudah terpasang di VS Code.
5. Klik kanan pada file index.html, kemudian pilih Open with Live Server.
6. Setelah halaman terbuka di browser, klik tombol Muat kegiatan untuk mengambil data dari file JSON.
7. Perhatikan pesan yang muncul pada halaman dan daftar kegiatan yang ditampilkan.
8. Untuk melihat proses pengambilan data dan kesalahan yang terjadi, buka Developer Tools dengan menekan F12, kemudian periksa bagian Console dan Network.

> Penjelasan Praktikum

Pada praktikum ini, saya mempelajari cara mengambil data dari file JSON menggunakan JavaScript serta cara menangani beberapa kondisi ketika data sedang diproses. Data yang digunakan berisi dua kegiatan, yaitu HTML dan CSS. Data tersebut diambil menggunakan fetch() dan ditampilkan pada halaman web dalam bentuk daftar.

Pada saat tombol Muat kegiatan ditekan, program menampilkan pesan "Memuat data..." sebagai tanda bahwa data sedang diambil. Tombol juga dibuat tidak aktif sementara agar tidak ditekan berulang kali selama proses berlangsung. Setelah data berhasil diterima, program menampilkan daftar kegiatan pada halaman web. Dari hasil pengujian, tulisan <p> HTML </p> juga terlihat sebagai teks biasa. Hal ini karena program menggunakan textContent, sehingga tulisan tersebut tidak dianggap sebagai tag HTML.

Selanjutnya, saya melakukan pengujian menggunakan beberapa kondisi. Ketika file JSON diubah menjadi array kosong [], halaman menampilkan pesan "Belum ada kegiatan". Hal ini menunjukkan bahwa program dapat membedakan kondisi ketika data tersedia dan ketika tidak ada data. Pada pengujian JSON rusak, halaman menampilkan pesan "Gagal memuat" dan Console menunjukkan kesalahan `SyntaxError karena format JSON tidak dapat dibaca.

Saya juga mencoba pengambilan data dengan alamat file yang salah. Hasilnya, muncul kesalahan HTTP 404 karena file yang diminta tidak ditemukan. Pada pengujian offline, browser menunjukkan pesan bahwa koneksi internet terputus. Selain itu, saya mencoba memperlambat jaringan menggunakan fitur Throttling pada DevTools. Dari pengujian tersebut, proses pemuatan data dapat diamati melalui tampilan halaman dan tab Network.

Pada pengujian timeout, saya mencoba menggunakan jaringan 3G dan waktu tunggu yang lebih pendek untuk melihat proses ketika pengambilan data membutuhkan waktu. Pengujian ini membantu saya memahami pentingnya membatasi waktu permintaan agar program tidak terus menunggu terlalu lama. Saya juga memeriksa file JSON menggunakan validator dan hasilnya menunjukkan bahwa format JSON valid, berisi 2 object dan 1 array.

Dari seluruh praktikum ini, saya memahami bahwa proses mengambil data tidak selalu berjalan dengan lancar. Oleh karena itu, program perlu memiliki pesan loading, penanganan kesalahan, pemeriksaan data kosong, dan pembatasan waktu tunggu. Dengan adanya pengujian tersebut, saya dapat memahami bagaimana program memberikan respons terhadap berbagai kondisi saat mengambil data.

> Hasil Pengujian
| Pengujian             | Hasil Pengamatan |
| JSON normal           | Data kegiatan HTML dan CSS dapat dibaca dari file JSON. 
| Loading               | Pesan Memuat data... ditampilkan ketika tombol ditekan. 
| Throttling jaringan   | Pengujian dilakukan untuk melihat proses ketika jaringan diperlambat. 
| HTTP 404              | Pengujian dilakukan dengan menggunakan alamat file yang tidak ditemukan. 
| JSON rusak            | Pengujian dilakukan untuk melihat respons program terhadap format JSON yang tidak valid. 
| Array kosong          | Pengujian dilakukan menggunakan fixture [] untuk melihat kondisi tanpa data. 
| Offline               | Pengujian dilakukan dengan memutus koneksi jaringan. 
| Timeout               | Pengujian dilakukan dengan waktu tunggu pendek dan throttling. 
| Validasi              | File diperiksa menggunakan validator untuk memastikan format JSON sesuai. 

Berdasarkan pengujian tersebut, saya mempelajari bahwa setiap kondisi membutuhkan penanganan yang berbeda. Data yang kosong tidak selalu berarti terjadi kesalahan, sedangkan HTTP 404, JSON rusak, dan kondisi offline menunjukkan adanya masalah dalam proses pengambilan data. Pengujian dengan jaringan lambat juga membantu memahami pentingnya loading dan pembatasan waktu tunggu.

> Batasan
Program ini masih menggunakan data JSON lokal sehingga isi kegiatan harus diubah secara manual melalui file kegiatan.json. Penanganan error juga masih sederhana karena pesan yang ditampilkan belum membedakan setiap jenis kesalahan. Selain itu, pemeriksaan struktur data belum mencakup seluruh bagian seperti id dan kuota. Penggunaan AbortController juga masih perlu diperbaiki agar timeout dapat diterapkan pada permintaan utama. Meskipun demikian, program ini sudah menjadi latihan untuk memahami proses pengambilan data, loading, penanganan error, dan validasi data menggunakan JavaScript.

> AI Use Statement
Dalam praktikum ini, saya menggunakan AI sebagai alat bantu untuk memahami materi Fetch, Promise, async/await, serta fungsi beberapa bagian kode. AI juga membantu memperbaikin bahasa dalam membuat penjelasan. AI digunakan sebagai alat bantu belajar, bukan untuk menggantikan pemahaman dan pengerjaan praktikum saya sendiri. Saya tidak memasukkan password, API key rahasia, atau data pribadi ke dalam AI.