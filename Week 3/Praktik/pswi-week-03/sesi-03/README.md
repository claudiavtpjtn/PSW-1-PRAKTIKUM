LAPORAN PRAKTIKUM PSW 
NAMA: CLAUDIA V.T. PANJAITAN
NIM: 41426004
PRODI: DIV TRPL

    LAPORAN ERROR
Dalam kode yang saya coba, dan saya validasi melalui nu validator, saya tidak menemukan error

    TUJUAN
 1. tujuan kami membuat atau mengerjakan yang di modul sesi 3 week 3 adalah agar kami tau bagaimana cara menambahkan foto informasi dalam pembuatan form, agar kami tau bagaimana cara menambahkan kode untuk pendaftaran kedalam kode, apa yang terjadi jika memasukkan angka lebih dari inputan yang ditetapkan, supaya kami tau apa yang terjadi jika form bagian email dikosongkan, fungsi dari kode yang dijalankan, dan bagaimana cara memperbaiki error yang ada

    LANGKAH LANGKAH MENJALANKAN
 1. Jalankan kode dengan menggunakan live server local dengan cara klik kanan bagian index.html lalu pilih open with server bisa juga dengan cara di run dengan cara  pilih menu run lalu pilih start debugging lalu pilih 
 kita mau  membuka hasil code kita di google atau di mana pun bisa yang penting dia di browser. Isi data data yang diperlukan untuk pendaftaran mulai dari nama lengkap, email, nomor hp, jumlah tiket, prodi, kode peserta kemudian pilih mode kehadiran, minat topik dan aksesibilitas, dapat menambahkan catatan jika ingin. Kemudian tekan tombol daftar



Tabel uji
         KASUS         |        HARAPAN                
Email kosong           | Ditolak karena required         
Email abc              | Ditolak karena bentuk email
Email contoh valid     | Diterima jika lainnya valid
Jumlah 0/6             | Ditolak
Jumlah 1/5             | Diterima
Jumlah 1.5             | Ditolak bila step=1
Kode 12345             | Ditolak
Kode 001234            | Diterima
Keyboard               | Semua kontrol dapat dicapai
