LAPORAN PRAKTIKUM PENGEMBNGAN SITUS WEB 1
Nama: Claudia V.T.Panjaitan
NIM: 41426004
Prodi: DI TRPL

1. Tujuan
Praktikum ini bertujuan untuk memahami penggunaan CSS eksternal pada halaman HTML, penggunaan selector dan class, serta cara kerja cascade dan specificity dalam menentukan aturan CSS yang diterapkan pada suatu elemen. Selain itu, praktikum ini juga bertujuan untuk memahami box model yang terdiri dari content, padding, border, dan margin, serta melihat pengaruh box-sizing terhadap ukuran elemen. Pengujian dilakukan menggunakan browser dan DevTools agar perubahan yang terjadi dapat diamati secara langsung.

2. Penjelasan Perubahan
Pada praktikum ini dilakukan beberapa perubahan pada halaman formulir dari praktikum sebelumnya. Perubahan dimulai dengan membuat file style.css dan menghubungkannya dengan index.html sebagai stylesheet eksternal. Selanjutnya ditambahkan class card pada form dan class notice pada paragraf petunjuk agar elemen dapat diberikan style menggunakan selector yang sesuai.
Selain itu, dilakukan beberapa percobaan pada selector, specificity, cascade, warna, padding, border, margin, dan box-sizing. Percobaan tersebut dilakukan untuk melihat bagaimana setiap aturan CSS memengaruhi tampilan dan ukuran elemen pada halaman.

3. Hasil Uji
Berdasarkan pengujian yang dilakukan, stylesheet berhasil terhubung dengan HTML dan perubahan CSS dapat terlihat pada halaman. Selector dan class juga berhasil diterapkan pada elemen yang sesuai.
Pada pengujian specificity, selector .card p memiliki tingkat specificity yang lebih tinggi dibandingkan .notice, sehingga aturan .card p tetap diterapkan meskipun urutan penulisan aturan CSS diubah. Pada pengujian box model, ukuran elemen pada kondisi content-box menjadi 276px karena perhitungan width ditambah padding dan border. Setelah menggunakan box-sizing: border-box, ukuran elemen menjadi 240px sesuai dengan nilai width yang ditentukan.
Hasil pengujian kemudian diperiksa menggunakan browser dan DevTools untuk memastikan bahwa perubahan yang terjadi sesuai dengan kondisi aktual saat praktikum.

4. Batasan
Praktikum ini masih menggunakan halaman formulir sederhana dan pengujian dilakukan pada lingkungan lokal menggunakan browser serta DevTools. Ukuran tetap pada percobaan box model digunakan untuk memahami cara kerja perhitungan ukuran elemen, sehingga belum dimaksudkan sebagai desain akhir halaman.
Hasil yang ditulis pada README ini juga berdasarkan pengujian yang benar-benar dilakukan, sehingga hasil aktual menjadi acuan utama dan bukan hanya mengikuti hasil yang diharapkan pada modul.

5. AI Use Statement
Saya menggunakan AI sebagai bantuan dalam memahami konsep, istilah istilah dan fungsi dari kode yang dibuat dan membantu menyusun dokumentasi praktikum agar lebih rapi dan mudah dipahami. Setiap hasil dan perubahan pada kode tetap diperiksa dan diuji secara langsung menggunakan browser dan DevTools.

Kode sumber: Week1 sesi 2 dan Week3 sesi 3

Catatan before after:
Sebelum praktikum, halaman masih menggunakan tampilan dan aturan CSS yang sederhana. Setelah dilakukan praktikum, halaman sudah menggunakan stylesheet eksternal, selector dan class yang lebih terarah, serta dilakukan pengujian cascade, specificity, dan box model. Perubahan tersebut tidak hanya dilihat dari tampilan, tetapi juga diperiksa menggunakan browser dan DevTools untuk memastikan hasilnya sesuai dengan aturan CSS yang digunakan.
