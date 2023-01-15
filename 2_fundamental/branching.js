const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.")
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
} else {
    console.log("Tidak hujan. Yeay");
}
console.log("Berangkat kegiatan");


const isMember = false;
const discount = isMember ? 0.1 : 0;                                // ternary conditional operator
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
