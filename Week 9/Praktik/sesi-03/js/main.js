const greetingButton =
 document.querySelector('#greeting-button');
greetingButton.addEventListener('click', () => {
 alert('Semangat dan Selamat Belajar Pengembangan Situs Web I!');
console.log('main.js berhasil dijalankan');
});

//prak week 9:

const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

const jumlah = Number("3");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
 console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

const judul = ["HTML", "CSS", "Audit", "Java"];
for (const item of judul) console.log(item);

const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 },
 { id: 3, judul: "Java", kuota: 0}
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);

const judulTersedia = tersedia.map(k => k.judul);
console.log("Judul Kegiatan Tersedia:", judulTersedia);

{
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);
}

import { hitungTotal } from "./utils.js";
console.log(hitungTotal(2, 10000));
