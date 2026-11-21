const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");
async function muat() {

    tombol.disabled = true;
    pesan.textContent = "Memuat data...";

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

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

            const r = await fetch("./data/kegiatan.json", { signal: controller.signal });

        }

        pesan.textContent = data.length
            ? `${data.length} kegiatan dimuat` : "Belum ada kegiatan";

    } catch (error) { pesan.textContent = "Gagal memuat"; console.error(error); }

    finally {
        tombol.disabled = false;
        clearTimeout(timer); tombol.disabled = false;
    }

}
tombol.addEventListener("click", muat);

