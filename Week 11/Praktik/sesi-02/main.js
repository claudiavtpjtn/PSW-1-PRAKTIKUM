const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");
async function muat() {
 try {
 const r = await fetch("./data/kegiatan.json");
 if (!r.ok) throw new Error(`HTTP ${r.status}`);
 const data = await r.json(); console.log(data);
 
 if (!Array.isArray(data)) throw new Error("Data harus array");
daftar.replaceChildren();
for (const k of data) {
 if (typeof k.judul !== "string") throw new Error("Judul tidak sesuai");
 const li = document.createElement("li");
 li.textContent = k.judul; daftar.append(li);
} 
 } catch (error) { pesan.textContent = "Gagal memuat"; console.error(error); }
}
tombol.addEventListener("click", muat);

