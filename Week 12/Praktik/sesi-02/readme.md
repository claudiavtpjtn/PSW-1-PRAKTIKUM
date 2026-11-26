Nama    : Claudia V.T. Panjaitan
NIM     : 41426004
Prodi   : D IV TRPL

LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1 WEEK 12 SESI 2

> Cara Menjalankan

Untuk menjalankan program, buka folder praktikum menggunakan Visual Studio Code. Cari file `index.html`, kemudian klik kanan dan pilih Open with Live Server. Setelah halaman terbuka di browser, program dapat dicoba dengan menambahkan, mengubah, dan menghapus nama peserta melalui fitur yang tersedia.

> Penjelasan Perubahan

Pada praktikum ini, aplikasi Daftar Peserta dikembangkan dengan menambahkan fitur penyimpanan data menggunakan `localStorage`. Fitur ini memungkinkan data peserta tetap tersimpan meskipun halaman di-refresh. Penyimpanan data menggunakan key `pswi.peserta.v1` sebagai nama untuk mengenali data yang disimpan.

Selain itu, ditambahkan proses untuk membaca dan memeriksa kembali data yang tersimpan. Pemeriksaan dilakukan untuk memastikan data sesuai dengan format yang dibutuhkan. Jika ditemukan data yang rusak atau tidak sesuai, program akan menangani kesalahan menggunakan `try/catch` dan menampilkan pesan pemberitahuan. ID peserta juga diatur agar bertambah secara otomatis sehingga setiap peserta memiliki ID yang berbeda.

Program juga dilengkapi fungsi `ubahNama()` untuk mengganti nama peserta berdasarkan ID. Pada tahap pengujian, dilakukan percobaan menghapus data latihan menggunakan `removeItem()` agar data yang bermasalah dapat dihapus tanpa mengganggu penyimpanan lainnya.

> Hasil Uji
                Matriks Pengujian

| Kasus Pengujian | Tindakan | Hasil yang Diharapkan |
| Tambah/reload | Menambahkan peserta, kemudian me-refresh halaman. | Data peserta tetap tersimpan dan muncul kembali. |
| Update/reload | Mengubah nama peserta berdasarkan ID, kemudian me-refresh halaman. | Nama berhasil berubah, sedangkan ID tetap sama. |
| Hapus/reload | Menghapus salah satu peserta, kemudian me-refresh halaman. | Peserta yang dihapus tidak muncul kembali. |
| Storage rusak | Memasukkan data yang bukan format JSON ke Local Storage, kemudian me-refresh halaman. | Program mendeteksi kesalahan dan menampilkan pesan bahwa data lokal bermasalah. |

Berdasarkan pengujian yang dilakukan, fitur penyimpanan berhasil mempertahankan data peserta meskipun halaman di-refresh. Perubahan nama dan penghapusan peserta juga dapat disimpan sesuai dengan ID masing-masing. Selain itu, ketika data yang tersimpan sengaja diubah menjadi format yang tidak valid, program berhasil mendeteksi kesalahan dan menampilkan pesan pemberitahuan. Setelah pengujian selesai, data yang rusak dihapus menggunakan `removeItem()` agar aplikasi dapat kembali menggunakan data awal.

> Batasan

Program ini masih menggunakan `localStorage` pada browser sebagai tempat penyimpanan data. Oleh karena itu, data hanya tersedia pada browser dan perangkat yang digunakan. Jika penyimpanan browser dihapus, data peserta yang tersimpan juga dapat hilang. Selain itu, perubahan data pada satu tab belum tentu langsung diperbarui pada tab lain yang membuka aplikasi yang sama.

> AI Use Statement

AI digunakan sebagai alat bantu untuk memahami kode JavaScript dan mempelajari fungsi dari setiap bagian program. AI membantu menjelaskan penggunaan `localStorage`, proses membaca dan memvalidasi data, serta cara menangani data yang rusak. Selain itu, AI membantu memahami proses mengubah dan menghapus data peserta berdasarkan ID. Penjelasan yang diberikan kemudian dipelajari dan diperiksa kembali dengan menjalankan program secara langsung melalui browser.