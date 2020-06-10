// Menampilkan pesan pertama kali masuk (selamat datang)
function chat(name, text) {
  return {
    name,
    text,
  };
}

// Mencari persentanse terbesar untuk jenis malaria
function checkBiggestPercent(data) {
  // Data persentase malaria
  const percentageMalaria = data.percentageDiagnosis;
  // Ambil values dari object
  const valuesMalaria = Object.values(percentageMalaria);
  // Ubah string ke number
  const toNumber = valuesMalaria.map((possibility) => parseFloat(possibility));
  // Cek malaria mana yang paling besar
  const largeNumber = Math.max(...toNumber);
  // Mengambil index
  const indexLargeNumber = toNumber.indexOf(largeNumber);

  return { largeNumber: largeNumber, indexLargeNumber: indexLargeNumber };
}

// Mengecek Jenis Tipe Malaria
function checkTypeMalaria(biggestPossibility) {
  let typeMalaria;
  let solusi;
  let deskripsi;

  if (biggestPossibility == 0) {
    typeMalaria = "Tertiana";
    deskripsi =
      "Penyebabnya yaitu Plasmodium Vivax. Malaria tertiana merupakan bentuk malaria yang paling sering terjadi. Masa inkubasinya, lama waktu sejak infeksi terjadi hingga muncul gejala, berkisar antara 12 – 17 hari, terkadang lebih panjang.";
    solusi =
      "Biasanya dokter akan menggabungkan ACT dan primakuin, dosis : 0,25 mg/kgBB selama 14 hari, penyakit malaria tertiana biasanya sering kambuh dan dokter akan mengkombinasikan dengan primakuin dengan dosis 0,5 mg/KbGG per hari. Angka kematian yang disebabkan oleh malaria tertiana cenderung rendah.";
  } else if (biggestPossibility == 1) {
    typeMalaria = "Tropika";
    deskripsi =
      "Penyebabnya yaitu Plasmodium Falciparum. Malaria jenis ini merupakan bentuk malaria paling berat serta paling sering terjadi komplikasi. Masa inkubasinya berkisar 9 – 14 hari. ";
    solusi =
      "Penderita malaria jenis tropika harus mendapatkan perawatan intensif di rumah sakit. Pasien akan diberikan artesunat intravena melalui infus. Apabila tidak ada, tim medis akan memberikan kina drip. Malaria tropika sering resisten (kebal) terhadap pengobatan standar malaria.";
  } else if (biggestPossibility == 2) {
    typeMalaria = "Ovale";
    deskripsi =
      "Penyebabnya yaitu Plasmodium ovale. Malaria ovale merupakan bentuk malaria paling ringan dari semua jenis malaria. Masa inkubasinya sekitar 11 – 16 hari. Gejala yang muncul hampir sama dengan malaria vivax namun lebih ringan serta puncak demam juga lebih rendah. ";
    solusi =
      "Dokter biasanya memberikan obat ACT diberikan ditambah dengan pramakuin selama 14 hari tetapi pada umumnya malaria ovale dapat sembuh spontan tanpa pengobatan.";
  } else if (biggestPossibility == 3) {
    typeMalaria = "Kuartana";
    deskripsi =
      "Merupakan malaria yang cukup jarang ditemukan. Penyebabnya yaitu Plasmodium Malariae. Masa inkubasinya berkisar 18 – 40 hari.";
    solusi =
      "Dokter biasanya memberikan obat ACT dengan dosis 1 kali sehari selama 3 hari. Pasien yang terkena malaria kuartana tidak diberikan primakuin. Jika sudah terjadi komplikasi, respon terhadap pengobatan anti malaria sering tidak menolong. Pengobatan yang diberikan lebih dari pengobatan anti malaria biasa.";
  }

  return { typeMalaria, deskripsi, solusi };
}

module.exports = {
  chat,
  checkBiggestPercent,
  checkTypeMalaria,
};
