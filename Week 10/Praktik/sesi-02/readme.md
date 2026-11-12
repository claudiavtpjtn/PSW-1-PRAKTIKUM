Nama    : Claudia V.T. Panjaitan
NIM     : 41426004
Prodi   : D IV TRPL

LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1 SESI 2

>Cara Menjalankan Program
Untuk menjalankan program, langkah-langkah yang dilakukan adalah sebagai berikut.
1. Ekstrak file proyek terlebih dahulu.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Pastikan file index.html, style.css, dan main.js berada pada lokasi yang sesuai dengan pemanggilan file di dalam kode.
4. Klik kanan pada file index.html, kemudian pilih Open with Live Server.
5. Setelah itu, halaman web akan terbuka melalui browser.
6. Untuk memeriksa hasil program atau melihat kesalahan, tekan tombol F12, kemudian buka bagian Console.

Console digunakan untuk melihat pesan dari JavaScript, termasuk hasil console.log() dan informasi error ketika program mengalami masalah.

>Penjelasan Pengerjaan

a. Memilih Elemen HTML dengan querySelector()
Pada percobaan pertama, saya menggunakan document.querySelector() untuk mengambil elemen HTML yang memiliki ID daftar. Perintah ini digunakan agar JavaScript dapat menemukan elemen tertentu pada halaman web dan melakukan perubahan terhadap elemen tersebut. Contohnya, ketika saya menuliskan document.querySelector("#daftar"), JavaScript akan mencari elemen HTML yang memiliki ID daftar. Tanda # digunakan untuk menunjukkan bahwa selector yang dicari merupakan ID. Dari percobaan ini, saya memahami bahwa JavaScript perlu memilih elemen HTML terlebih dahulu sebelum dapat mengubah atau menambahkan isi ke dalamnya. Jika ID yang ditulis tidak sesuai dengan HTML, hasil pencarian akan bernilai null karena elemen yang dimaksud tidak ditemukan.

b. Membuat Elemen Baru dengan createElement()
Selanjutnya, saya mencoba membuat elemen HTML baru menggunakan document.createElement("li"). Perintah ini digunakan untuk membuat elemen daftar yang nantinya dapat ditambahkan ke halaman web. Elemen li dipilih karena digunakan untuk menampilkan satu bagian dari sebuah daftar. Setelah elemen berhasil dibuat, saya dapat mengisi teks di dalamnya dan menambahkannya ke elemen daftar yang sudah dipilih sebelumnya. Dari percobaan ini, saya memahami bahwa elemen HTML tidak harus selalu ditulis langsung di dalam file HTML. JavaScript juga dapat membuat elemen baru ketika program dijalankan.

c. Memasukkan Teks Menggunakan textContent
Pada bagian ini, saya mencoba memasukkan tulisan <b>Rina</b> ke dalam elemen menggunakan textContent. Hasilnya, tulisan tersebut ditampilkan sebagai teks biasa, bukan sebagai tulisan tebal.
Hal ini terjadi karena textContent hanya membaca dan memasukkan isi sebagai teks. Perintah ini tidak menganggap tulisan yang menyerupai tag HTML sebagai elemen yang harus dijalankan. Jadi, tulisan <b>Rina</b> akan ditampilkan sesuai dengan karakter yang dituliskan. Jadi agar tulisan tertambilkan bold saya menggunakan innerHTML agar browser dapat membaca kode <b> </b> ada perintah untuk mengubah tulisan menjadi bold.

d. Menyimpan Data Peserta Menggunakan Array
Setelah memahami cara membuat elemen, saya mempelajari penggunaan array untuk menyimpan beberapa nama peserta. Pada praktikum ini, array yang digunakan diberi nama peserta dan berisi nama Rina serta Budi. Array memudahkan penyimpanan beberapa data dalam satu variabel. Setiap data di dalam array dapat diambil dan diproses satu per satu. Dengan cara ini, saya tidak perlu membuat kode terpisah untuk menampilkan setiap nama peserta.

e. Menampilkan Data Menggunakan Perulangan dan Fungsi render()
Untuk menampilkan data peserta, saya menggunakan fungsi render() yang berisi proses pembuatan dan penampilan elemen daftar. Di dalam fungsi tersebut, perulangan for...of digunakan untuk mengambil setiap nama yang ada di dalam array peserta. Setiap nama yang berhasil diambil kemudian dimasukkan ke dalam elemen li menggunakan textContent. Setelah itu, elemen tersebut ditambahkan ke daftar menggunakan append(). Dengan proses tersebut, setiap nama di dalam array akan dibuat menjadi satu elemen daftar pada halaman web. Jika terdapat dua nama di dalam array, maka akan dibuat dua elemen li. Sebelum menampilkan data, saya juga menggunakan replaceChildren() untuk menghapus isi daftar yang sebelumnya sudah ada. Tujuannya agar data tidak muncul berulang kali ketika fungsi render() dipanggil lebih dari satu kali. Jadi, daftar akan dibuat kembali berdasarkan isi array terbaru, bukan sekadar menambahkan nama ke daftar yang lama.

f. Menangani Kondisi Ketika Array Kosong
Pada percobaan berikutnya, saya mengosongkan isi array peserta dengan menuliskan [] sebelum fungsi render() dipanggil. Setelah program dijalankan, nama peserta yang sebelumnya muncul tidak lagi ditampilkan. Hal ini terjadi karena array sudah tidak memiliki data yang dapat diproses. Akibatnya, perulangan for...of tidak menjalankan proses pembuatan elemen li karena tidak ada nama yang bisa diambil. Saya juga mempelajari cara menampilkan pesan "Belum ada peserta" ketika array tidak memiliki data. Pesan ini berguna untuk memberikan informasi kepada pengguna bahwa daftar memang sedang kosong, bukan mengalami kesalahan atau gagal dimuat. Pada kode yang saya kerjakan, pemeriksaan untuk menampilkan pesan tersebut masih berada di luar fungsi render(). Artinya, pemeriksaan kondisi kosong belum menjadi bagian dari proses pembaruan daftar di dalam fungsi tersebut. Hal ini menjadi salah satu bagian yang masih dapat diperbaiki agar fungsi render() dapat mengatur seluruh tampilan daftar, baik ketika data tersedia maupun ketika data kosong.

g. Memahami Hubungan Data dan Tampilan
Dari seluruh percobaan, saya memahami bahwa data yang disimpan di dalam array dan tampilan pada halaman web saling berhubungan. Array peserta menjadi sumber data, sedangkan fungsi render() bertugas mengambil data tersebut dan menampilkannya ke dalam elemen HTML. Ketika isi array berubah, fungsi render() perlu dijalankan kembali agar tampilan mengikuti data terbaru. Jika array berisi nama peserta, nama tersebut akan ditampilkan. Sebaliknya, jika array kosong, tidak ada nama yang ditampilkan.

>Hasil pengujian

| PENGUJIAN                        | TINDAKAN                                                                | HASIL 
| Memilih elemen HTML              | Menggunakan document.querySelector("#daftar").                          | Elemen HTML dengan ID daftar berhasil dipilih. 
| Membuat elemen baru              | Menggunakan document.createElement("li").                               | Elemen daftar baru berhasil dibuat melalui JavaScript. 
| Menggunakan textContent          | Memasukkan teks <b>Rina</b> ke dalam elemen.                            | Tulisan ditampilkan sebagai teks biasa dan tidak menjadi tebal. 
| Menampilkan data peserta         | Mengisi array dengan nama Rina dan Budi, kemudian menjalankan render(). | Kedua nama berhasil ditampilkan pada halaman web. 
| Menjalankan render() kembali     | Memanggil fungsi render() lebih dari satu kali.                         | Daftar diperbarui tanpa membuat nama yang sama muncul berulang kali karena isi sebelumnya dihapus terlebih dahulu. 
| Mengosongkan array               | Mengubah isi array peserta menjadi [], kemudian menjalankan render().   | Nama peserta tidak lagi ditampilkan karena array tidak memiliki data. 
| Menampilkan pesan kosong         | Memeriksa kondisi ketika array peserta tidak memiliki isi.              | Pesan "Belum ada peserta" ditampilkan sesuai dengan pemeriksaan kondisi pada kode. 
| Menggunakan selector yang salah  | Mencoba memilih elemen dengan ID yang tidak sesuai.                     | querySelector() menghasilkan null karena elemen tidak ditemukan. Jika hasil tersebut digunakan untuk mengakses elemen, program akan mengalami error. 

>Catatan Error dan Cara Mengatasinya

Selama praktikum, saya memahami bahwa kesalahan penulisan ID pada `querySelector()` dapat membuat elemen HTML tidak ditemukan sehingga menghasilkan nilai `null`. Jika nilai tersebut digunakan untuk menjalankan perintah seperti `append()` atau `textContent`, program akan mengalami error. Untuk mengatasinya, saya perlu memastikan ID pada HTML dan selector pada JavaScript sudah sesuai. Jika perubahan belum muncul di browser, saya juga perlu memeriksa kode, memastikan file sudah disimpan, lalu melakukan refresh halaman. Selain itu, saya dapat menggunakan Console untuk melihat pesan error dan mengetahui bagian kode yang bermasalah.

> Batasan Program

Program ini masih memiliki keterbatasan karena data peserta ditulis langsung di dalam array JavaScript sehingga belum bisa ditambahkan melalui form atau dihapus menggunakan tombol. Pesan "Belum ada peserta" juga masih ditulis di luar fungsi `render()`, sehingga belum menjadi bagian dari proses pembaruan daftar. Selain itu, data belum disimpan secara permanen. Jika halaman dimuat ulang, data akan kembali mengikuti isi awal array yang ditentukan di dalam kode.

> AI use statement
Saya menggunakan AI sebagai alat bantu untuk memahami beberapa konsep JavaScript yang dipelajari dalam praktikum, seperti querySelector(), createElement(), textContent, append(), array, dan fungsi render(). AI juga membantu saya memahami hubungan antara data di dalam array dengan tampilan yang muncul pada halaman web serta mencari kemungkinan penyebab kesalahan pada kode. Saya juga menggunakan AI untuk memperbaiki penggunaan bahasa saya dalam membuat penjelelsan eksperimen.

Penjelasan dan saran yang diberikan AI tidak langsung digunakan begitu saja. Saya memeriksa kembali kode yang dikerjakan dan menjalankan program melalui browser serta Console untuk memastikan hasilnya sesuai dengan percobaan. Melalui proses tersebut, saya dapat membandingkan penjelasan dengan hasil yang sebenarnya.