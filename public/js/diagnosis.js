// Dapatkan Nama User by URL
const { name } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const getNameUser = document.getElementById("name");
// Menampilkan nama user di Box
getNameUser.innerText = `${name}`;

const socket = io();

socket.on("greeting", (data) => chat(data));

// Mengambil elemen HTML
const chatMessage = document.querySelector(".chat-messages");

// Function / method untuk menampilkan pesan pada chat
function chat(message) {
  // Membuat elemen div
  const div = document.createElement("div");

  //Menambahkan class message
  div.classList.add("message");

  // Jika user yang kirim
  if (message.name === name) {
    // Ubah bubble menjadi abu-abu
    div.style.background = "gray";
  }

  // Bubble pada room chat
  div.innerHTML = `
      <p class="meta">${message.name}</p>
      <p class="text question">
      ${message.text}
      </p>
    `;

  // Menambahkan bubble chat
  document.querySelector(".chat-messages").appendChild(div);
  // Ketika ada chat masuk, scoll ke bawah
  chatMessage.scrollTop = chatMessage.scrollHeight;
}

// Dapatkan tombol answer
const getBtnAnswer = document.querySelectorAll(".btn-answer");

const choose = [];
socket.on("konsultasi", (questions) => {
  // Menampilkan pertanyaan pertama
  chat({
    name: questions.name,
    text: questions.text[choose.length].pertanyaan,
  });

  getBtnAnswer.forEach((btn) => {
    // ketika button di klik
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Dapat kan jawaban
      let answers = e.target.innerText;

      // Dapatkan Nama dan Jawaban User
      chat({
        name: name,
        text: answers,
      });

      // Masukkan jawaban ke variabel choose
      choose.push(answers);

      // Dapatkan Jawaban dan Pertanyaan
      getAnswerAndQuestion({
        answer: answers,
        questions: questions,
      });
    });
  });
});

let number = 0;
const sicks = [];
const malaria = [];
const malariaKuartana = [];
const malariaOvale = [];
const malariaTertiana = [];
const malariaTropika = [];

const detailQuestions = [];

function getAnswerAndQuestion(data) {
  const questions = data.questions.text;
  // Question Code bisa diganti dengan includes
  const questionCode = data.questions.text[number].kode;

  const answer = data.answer;

  const yes = "Ya";
  const no = "Tidak";

  if (answer === yes) {
    sicks.push(questionCode);
  }

  const malariaPercent = 8.3334;
  const malariaTertianaPercent = 6.6667;
  const malariaKuartanaPercent = 6.6667;
  const malariaOvalePercent = 7.1429;
  const malariaTropikaPercent = 6.25;

  //==============    LOGIKA   ==============//

  // Mengecek gejala yang timbul, dan mengirim variabel number untuk melanjutkan pada pertanyaan berikutnya
  if (questionCode === "G001" && answer === yes) {
    console.log("Kamu Demam");
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 1;
  } else if (questionCode === "G001" && answer === no) {
    console.log("Kamu tidak terkena Malaria");
    number = undefined;
    chat({
      name: data.questions.name,
      text:
        "Anda tidak terkena penyakit malaria, karena salah satu gejala utama malaria adalah demam",
    });
  }

  if (questionCode === "G002" && answer === yes) {
    console.log("Kemungkinan sakit Malaria Tropika atau Malaria Ovale");
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    number = 4;
  } else if (questionCode === "G002" && answer === no) {
    console.log("Kemungkinan sakit Malaria Tertiana atau Malaria Kuartana");
    number = 2;
  }

  if (questionCode === "G003" && answer === yes) {
    console.log("Malaria Tertiana");
    malariaTertiana.push(malariaTertianaPercent);
    number = 5;
  } else if (questionCode === "G003" && answer === no) {
    console.log("Kemungkinan Malaria Kuartana");
    number = 3;
  }

  if (questionCode === "G004" && answer === yes) {
    console.log("Malaria Kuartana");
    malariaKuartana.push(malariaKuartanaPercent);
    number = 5;
  } else if (questionCode === "G004" && answer === no) {
    console.log("Gejala demam biasa");
    number = 5;
  }

  if (questionCode === "G005" && answer === yes) {
    console.log("Malaria Tropika");
    malariaTropika.push(malariaTropikaPercent);
    number = 5;
  } else if (questionCode === "G005" && answer === no) {
    console.log("Malaria Ovale");
    number = 5;
  }

  if (questionCode === "G006" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 6;
  } else if (questionCode === "G006" && answer === no) {
    number = 6;
  }

  if (questionCode === "G007" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 7;
  } else if (questionCode === "G007" && answer === no) {
    number = 7;
  }

  if (questionCode === "G008" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 8;
  } else if (questionCode === "G008" && answer === no) {
    number = 8;
  }

  if (questionCode === "G009" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 9;
  } else if (questionCode === "G009" && answer === no) {
    number = 9;
  }

  if (questionCode === "G010" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 10;
  } else if (questionCode === "G010" && answer === no) {
    number = 10;
  }

  if (questionCode === "G011" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 11;
  } else if (questionCode === "G011" && answer === no) {
    number = 11;
  }

  if (questionCode === "G012" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 12;
  } else if (questionCode === "G012" && answer === no) {
    number = 12;
  }

  if (questionCode === "G013" && answer === yes) {
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 13;
  } else if (questionCode === "G013" && answer === no) {
    number = 13;
  }

  if (questionCode === "G014" && answer === yes) {
    console.log("Malaria Tropika");
    malariaTropika.push(malariaTropikaPercent);
    number = 16;
  } else if (questionCode === "G014" && answer === no) {
    number = 14;
  }

  if (questionCode === "G015" && answer === yes) {
    console.log("Malaria Tertiana");
    malariaTertiana.push(malariaTertianaPercent);
    number = 18;
  } else if (questionCode === "G015" && answer === no) {
    number = 15;
  }

  if (questionCode === "G016" && answer === yes) {
    console.log("Malaria Ovale");
    malariaOvale.push(malariaOvalePercent);
    number = 19;
  } else if (questionCode === "G016" && answer === no) {
    console.log("Malaria Tropika atau Malaria Kuarta");
    number = 16;
  }

  if (questionCode === "G017" && answer === yes) {
    console.log("Malaria Tropika atau Malaria Kuarta");
    malariaKuartana.push(malariaKuartanaPercent);
    malariaTropika.push(malariaTropikaPercent);
    number = 17;
  } else if (questionCode === "G017" && answer === no) {
    number = 17;
  }

  if (questionCode === "G018" && answer === yes) {
    console.log("Malaria Kuarta");
    malariaKuartana.push(malariaKuartanaPercent);
    number = 18;
  } else if (questionCode === "G018" && answer === no) {
    number = 18;
  }

  if (questionCode === "G019" && answer === yes) {
    console.log("Malaria Tertiana");
    malariaTertiana.push(malariaTertianaPercent);
    number = 19;
  } else if (questionCode === "G019" && answer === no) {
    number = 19;
  }

  if (questionCode === "G020" && answer === yes) {
    number = 20;
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
  } else if (questionCode === "G020" && answer === no) {
    number = 20;
  }

  if (questionCode === "G021" && answer === yes) {
    number = 21;
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
  } else if (questionCode === "G021" && answer === no) {
    number = 21;
  }

  if (questionCode === "G022" && answer === yes) {
    number = 22;
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
  } else if (questionCode === "G022" && answer === no) {
    number = 22;
  }

  const malariaPercentResults = malaria
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const malariaTertianaPercentResults = malariaTertiana
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const malariaKuartanaPercentResults = malariaKuartana
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const malariaTropikaPercentResults = malariaTropika
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const malariaOvalePercentResults = malariaOvale
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const resultsDiagnosis = {
    sicks: sicks,
    percentance: {
      malaria: malariaPercentResults,
      tertiana: malariaTertianaPercentResults,
      kuartana: malariaKuartanaPercentResults,
      tropika: malariaTropikaPercentResults,
      ovale: malariaOvalePercentResults,
    },
  };

  if (typeof questions[number] === "undefined") {
    // Semua pertanyaan sudah dijawab
    getBtnAnswer.forEach((btn) => {
      // Tombol tidak bisa ditekan
      btn.setAttribute("disabled", " ");
    });

    if (choose[0] === "Tidak") return;
    diagnosisResults(resultsDiagnosis);

    // Ketika detail ditekan
    const detail = document.querySelector("#detail");
    detail.addEventListener("click", (e) => {
      e.preventDefault();
      seeDetails({
        details: detailQuestions,
        percentanceDiagnosis: [
          (tertiana = malariaTertianaPercentResults),
          (tropika = malariaTropikaPercentResults),
          (ovale = malariaOvalePercentResults),
          (kuartana = malariaKuartanaPercentResults),
        ],
      });
    });
    return;
  }

  if (answer === yes) {
    detailQuestions.push(questions[number].gejala);
  }

  // Menampilkan pertanyaan selanjutnya
  chat({
    name: data.questions.name,
    text: questions[number].pertanyaan,
  });
}

function seeDetails(data) {
  const detail = data.details
    .map((gejala) => {
      return `<li>${gejala}</li>`;
    })
    .join("");

  const percentanceMalaria = data.percentanceDiagnosis;
  // Ambil values dari object
  const valuesMalaria = Object.values(percentanceMalaria);
  // Ubah string ke number
  const toNumber = valuesMalaria.map((possibility) => parseFloat(possibility));
  // Cek malaria mana yang paling besar
  const largeNumber = Math.max(...toNumber);
  // Mengambil index
  const indexLargeNumber = toNumber.indexOf(largeNumber);

  let typeMalaria = "";
  let solusi = "";
  let deskripsi = "";

  if (indexLargeNumber == 0) {
    typeMalaria = "Tertiana";
    deskripsi =
      "Penyebabnya yaitu Plasmodium Vivax. Malaria tertiana merupakan bentuk malaria yang paling sering terjadi. Masa inkubasinya, lama waktu sejak infeksi terjadi hingga muncul gejala, berkisar antara 12 – 17 hari, terkadang lebih panjang.";
    solusi =
      "Biasanya dokter akan menggabungkan ACT dan primakuin, dosis : 0,25 mg/kgBB selama 14 hari, penyakit malaria tertiana biasanya sering kambuh dan dokter akan mengkombinasikan dengan primakuin dengan dosis 0,5 mg/KbGG per hari. Angka kematian yang disebabkan oleh malaria tertiana cenderung rendah.";
  } else if (indexLargeNumber == 1) {
    typeMalaria = "Tropika";
    deskripsi =
      "Penyebabnya yaitu Plasmodium Falciparum. Malaria jenis ini merupakan bentuk malaria paling berat serta paling sering terjadi komplikasi. Masa inkubasinya berkisar 9 – 14 hari. ";
    solusi =
      "Penderita malaria jenis tropika harus mendapatkan perawatan intensif di rumah sakit. Pasien akan diberikan artesunat intravena melalui infus. Apabila tidak ada, tim medis akan memberikan kina drip. Malaria tropika sering resisten (kebal) terhadap pengobatan standar malaria.";
  } else if (indexLargeNumber == 2) {
    typeMalaria = "Ovale";
    deskripsi =
      "Penyebabnya yaitu Plasmodium ovale. Malaria ovale merupakan bentuk malaria paling ringan dari semua jenis malaria. Masa inkubasinya sekitar 11 – 16 hari. Gejala yang muncul hampir sama dengan malaria vivax namun lebih ringan serta puncak demam juga lebih rendah. ";
    solusi =
      "Dokter biasanya memberikan obat ACT diberikan ditambah dengan pramakuin selama 14 hari tetapi pada umumnya malaria ovale dapat sembuh spontan tanpa pengobatan.";
  } else if (indexLargeNumber == 3) {
    typeMalaria = "Kuartana";
    deskripsi =
      "Merupakan malaria yang cukup jarang ditemukan. Penyebabnya yaitu Plasmodium Malariae. Masa inkubasinya berkisar 18 – 40 hari.";
    solusi =
      "Dokter biasanya memberikan obat ACT dengan dosis 1 kali sehari selama 3 hari. Pasien yang terkena malaria kuartana tidak diberikan primakuin. Jika sudah terjadi komplikasi, respon terhadap pengobatan anti malaria sering tidak menolong. Pengobatan yang diberikan lebih dari pengobatan anti malaria biasa.";
  }

  const div = document.createElement("div");
  div.classList.add("message");

  div.innerHTML = `
    <p class="meta">Detail Diagnosis : </p>
    <h3>Anda terkena malaria jenis ${typeMalaria} ${largeNumber}%</h3>
    <h3>Dekripsi : </h3>
    <p>${deskripsi}</p>
    <h3>Solusi : </h3>
    <p>${solusi}</p>
  `;

  document.querySelector(".chat-messages").appendChild(div);

  chatMessage.scrollTop = chatMessage.scrollHeight;
}

function diagnosisResults(result) {
  const div = document.createElement("div");

  //Menambahkan class message
  div.classList.add("message");

  // Bubble pada room chat
  div.innerHTML = `
        <p class="meta">Hasil Diagnosa</p>
          <p class="text">
          <h3>Anda Terkena Malaria ${result.percentance.malaria} %</h3>
          <span>Diagnosis Jenis Penyakit Malaria : </span>
            <ul>
                <li>Malaria Tertiana ${result.percentance.tertiana} %</li>
                <li>Malaria Tropika ${result.percentance.tropika} %</li>
                <li>Malaria Ovale ${result.percentance.ovale} %</li>
                <li>Malaria Kuartana ${result.percentance.kuartana} %</li>
            </ul>
        </p>
        <a href="" id="detail" style="color:white">Lihat Detail</a>
    `;

  document.querySelector(".chat-messages").appendChild(div);
  chatMessage.scrollTop = chatMessage.scrollHeight;
}

/*
const questions = [];

function joinAnswersAndQuestions(question) {
  questions.push(question);
  return {
    answers: choose,
    questions: questions,
  };
} */

/* const malariaTertiana = [0, 2, 5, 6, 7, 8, 9, 10, 11, 12, 14, 18, 19, 20, 21];
const malariaKuartana = [0, 3, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 19, 20, 21];
const malariaOvale = [0, 1, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 20, 21];
const malariaTropika = [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 19, 20, 21]; */
