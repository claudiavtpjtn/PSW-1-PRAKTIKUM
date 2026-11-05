LAPORAN PRAKTIKUM PENGEMBANGAN SITUS WEB 1
NAMA: CLAUDIA V.T. PANJAITAN
NIM: 41426004
PRODI: D IV TRPL

1. Memeriksa Repository dan Membuat Branch Fitur

Tindakan:
- Menjalankan git status untuk melihat kondisi repository.
- Menjalankan git branch untuk melihat branch yang tersedia.
- Membuat branch baru dengan perintah git switch -c fitur-petunjuk.
- Membandingkan branch utama dan branch fitur menggunakan git diff main fitur-petunjuk.

Hasil Pengamatan:

Saat menjalankan git status, terlihat bahwa repository berada di branch main dan sudah sejajar dengan`origin/main. Namun, masih ada perubahan pada folder praktikum Minggu 2 dan Minggu 7 yang belum masuk ke staging area. Ada juga folder baru yang belum dilacak oleh Git.

Perintah git branch menampilkan main sebagai branch yang aktif. Setelah menjalankan git switch -c fitur-petunjuk, branch baru berhasil dibuat. Akan tetapi, perintah git diff main fitur-petunjuk` tidak menampilkan perubahan apa pun. Artinya, belum terlihat perbedaan antara kedua branch saat perintah tersebut dijalankan.

Bukti: Screenshot menampilkan hasil git status, git branch, pesan Switched to a new branch fitur-petunjuk, dan perintah git diff.

2. Berpindah Kembali ke Branch Utama

Tindakan:

Menjalankan perintah git switch main untuk kembali ke branch utama.

Hasil Pengamatan:

Git berhasil memindahkan posisi kerja kembali ke main. Pada proses tersebut, muncul tanda M pada folder praktikum Minggu 2 dan Minggu 7. Tanda M berarti ada perubahan pada konten yang sudah dikenal Git.

Perubahan tersebut masih terlihat setelah berpindah branch. Oleh karena itu, saya perlu memeriksa kembali isi perubahan sebelum melanjutkan pekerjaan agar tidak memasukkan perubahan yang tidak berkaitan dengan tugas ini.

Bukti: Terminal menampilkan pesan Switched to branch main dan tanda M pada dua folder praktikum.

3. Menjalankan Merge Branch Fitur

Tindakan:

Menjalankan perintah git merge fitur-petunjuk saat berada di branch main.

Hasil Pengamatan:

Git menampilkan pesan Already up to date. Pesan ini berarti tidak ada commit baru dari branch fitur-petunjuk yang perlu digabungkan ke main.

Jadi, meskipun perintah merge berhasil dijalankan, belum terlihat perubahan fitur yang masuk ke branch utama. Saya perlu memastikan bahwa perubahan kode sudah dibuat dan disimpan sebagai commit pada branch fitur sebelum mencoba merge kembali.

Bukti: Terminal menampilkan hasil Already up to date. setelah perintah git merge fitur-petunjuk.

 4. Memeriksa Riwayat Commit

Tindakan:

Menjalankan perintah git log --oneline --max-count=5 untuk melihat riwayat commit terbaru.

Hasil Pengamatan:

Terminal menampilkan commit d9cc18c dengan pesan first commit. Pada hasil tersebut, HEAD -> main, origin/main, dan fitur-petunjuk menunjuk ke commit yang sama.

Dari hasil ini, belum terlihat commit baru yang khusus mencatat perubahan pada branch fitur. Karena itu, saya belum bisa menyimpulkan bahwa fitur sudah selesai dikerjakan dan berhasil digabungkan ke branch utama.

Bukti:

d9cc18c (HEAD -> main, origin/main, fitur-petunjuk) first commit

5. Simulasi Code Review
Tindakan:
  - Menjalankan perintah perbandingan diff: git diff nama-branch-utama...fitur-petunjuk.
  - Membuat file review.md untuk mencatat tujuan dan cara uji perubahan.
  - Meminta rekan untuk memberikan minimal dua komentar konkret (misalnya terkait kejelasan teks label form dan keterbacaan placeholder), lalu melakukan perbaikan dan commit revisi.
  - Mencatat dua komentar dari peninjau di dalam review.md.
  
Hasil Nyata: Komentar peninjau berhasil ditanggapi dan kode diperbarui sesuai masukan.
Bukti: Terdapat file review.md berisi catatan tanggapan dan commit revisi pada log Git.

AI USE STATEMENT
Saya menggunakan ChatGPT untuk membantu memahami perintah Git, branch, merge, dan code review, serta menyusun dokumentasi praktikum. Saran yang diberikan saya pelajari dan periksa kembali dengan melihat hasil Git Bash dan menguji situs di browser.