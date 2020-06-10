const socket = io();

// Dapatkan Nama User by URL
const { name } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const getNameUser = document.getElementById("name");

// Menampilkan nama user di Box
getNameUser.innerText = `${name}`;

// Menampilkan pesan selamat datang
socket.on("greeting", (data) => chat(data));

const chatMessage = document.querySelector(".chat-messages");

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
      const answers = e.target.innerText;

      // Dapatkan Nama dan Jawaban User
      chat({
        name: name,
        text: answers,
      });

      // Masukkan jawaban ke variabel choose
      choose.push(answers);

      // Dapatkan Jawaban user dan Pertanyaan dari Bot
      getAnswerAndQuestion({
        answer: answers,
        questions: questions,
      });
    });
  });
});

// Menampilkan pesan pada box chat
function chat(message) {
  // Membuat elemen div
  const div = document.createElement("div");

  //Menambahkan class message
  div.classList.add("message");

  // Jika user yang kirim pesan
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

let number = 0;
const malaria = [];
const malariaKuartana = [];
const malariaOvale = [];
const malariaTertiana = [];
const malariaTropika = [];
const sicks = [];

function getAnswerAndQuestion(data) {
  const questions = data.questions.text;

  const questionCode = data.questions.text[number].kode;

  const answer = data.answer;
  const yes = "Ya";
  const no = "Tidak";

  // Hitungan  = Jumlah Gejala / Total Gejala
  const malariaPercent = 8.3334;
  const malariaTertianaPercent = 6.6667;
  const malariaKuartanaPercent = 6.6667;
  const malariaOvalePercent = 7.1429;
  const malariaTropikaPercent = 6.25;

  /*  if (answer === yes) {
    sicks.push(questionCode);
  } */

  //==============    LOGIKA   ==============//

  // Mengecek gejala yang timbul, dan mengirim variabel number untuk melanjutkan pada pertanyaan berikutnya
  if (questionCode === "G001" && answer === yes) {
    // console.log("Kamu Demam");
    malaria.push(malariaPercent);
    malariaTertiana.push(malariaTertianaPercent);
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    malariaKuartana.push(malariaKuartanaPercent);
    number = 1;
  } else if (questionCode === "G001" && answer === no) {
    // console.log("Kamu tidak terkena Malaria");
    number = undefined;
    chat({
      name: data.questions.name,
      text:
        "Anda tidak terkena penyakit malaria, karena salah satu gejala utama malaria adalah demam",
    });
  }

  if (questionCode === "G002" && answer === yes) {
    // console.log("Kemungkinan sakit Malaria Tropika atau Malaria Ovale");
    malariaTropika.push(malariaTropikaPercent);
    malariaOvale.push(malariaOvalePercent);
    number = 4;
  } else if (questionCode === "G002" && answer === no) {
    // console.log("Kemungkinan sakit Malaria Tertiana atau Malaria Kuartana");
    number = 2;
  }

  if (questionCode === "G003" && answer === yes) {
    // console.log("Malaria Tertiana");
    malariaTertiana.push(malariaTertianaPercent);
    number = 5;
  } else if (questionCode === "G003" && answer === no) {
    // console.log("Kemungkinan Malaria Kuartana");
    number = 3;
  }

  if (questionCode === "G004" && answer === yes) {
    // console.log("Malaria Kuartana");
    malariaKuartana.push(malariaKuartanaPercent);
    number = 5;
  } else if (questionCode === "G004" && answer === no) {
    // console.log("Gejala demam biasa");
    number = 5;
  }

  if (questionCode === "G005" && answer === yes) {
    // console.log("Malaria Tropika");
    malariaTropika.push(malariaTropikaPercent);
    number = 5;
  } else if (questionCode === "G005" && answer === no) {
    // console.log("Malaria Ovale");
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
    // console.log("Malaria Tropika");
    malariaTropika.push(malariaTropikaPercent);
    number = 16;
  } else if (questionCode === "G014" && answer === no) {
    number = 14;
  }

  if (questionCode === "G015" && answer === yes) {
    // console.log("Malaria Tertiana");
    malariaTertiana.push(malariaTertianaPercent);
    number = 18;
  } else if (questionCode === "G015" && answer === no) {
    number = 15;
  }

  if (questionCode === "G016" && answer === yes) {
    // console.log("Malaria Ovale");
    malariaOvale.push(malariaOvalePercent);
    number = 19;
  } else if (questionCode === "G016" && answer === no) {
    // console.log("Malaria Tropika atau Malaria Kuarta");
    number = 16;
  }

  if (questionCode === "G017" && answer === yes) {
    // console.log("Malaria Tropika atau Malaria Kuarta");
    malariaKuartana.push(malariaKuartanaPercent);
    malariaTropika.push(malariaTropikaPercent);
    number = 17;
  } else if (questionCode === "G017" && answer === no) {
    number = 17;
  }

  if (questionCode === "G018" && answer === yes) {
    // console.log("Malaria Kuarta");
    malariaKuartana.push(malariaKuartanaPercent);
    number = 18;
  } else if (questionCode === "G018" && answer === no) {
    number = 18;
  }

  if (questionCode === "G019" && answer === yes) {
    // console.log("Malaria Tertiana");
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

  const malariaPercentResults = countPercentage(malaria);
  const malariaTertianaPercentResults = countPercentage(malariaTertiana);
  const malariaKuartanaPercentResults = countPercentage(malariaKuartana);
  const malariaTropikaPercentResults = countPercentage(malariaTropika);
  const malariaOvalePercentResults = countPercentage(malariaOvale);

  // Semua persentase
  const resultsDiagnosis = {
    percentage: {
      malaria: malariaPercentResults,
      tertiana: malariaTertianaPercentResults,
      kuartana: malariaKuartanaPercentResults,
      tropika: malariaTropikaPercentResults,
      ovale: malariaOvalePercentResults,
    },
  };

  // Semua pertanyaan sudah dijawab
  if (typeof questions[number] === "undefined") {
    getBtnAnswer.forEach((btn) => {
      // Tombol tidak bisa ditekan
      btn.setAttribute("disabled", " ");
    });

    // Jika Pertanyaan pertama jawabannya Tidak
    if (choose[0] === "Tidak") return;

    // Menampilkan hasil diagnosis
    diagnosisResults(resultsDiagnosis);

    // Ketika detail ditekan
    const detail = document.querySelector("#detail");

    detail.addEventListener("click", (e) => {
      e.preventDefault();

      socket.emit("percentage", {
        percentageDiagnosis: {
          tertiana: malariaTertianaPercentResults,
          tropika: malariaTropikaPercentResults,
          ovale: malariaOvalePercentResults,
          kuartana: malariaKuartanaPercentResults,
        },
      });
    });
    return;
  }

  // Menampilkan pertanyaan selanjutnya
  chat({
    name: data.questions.name,
    text: questions[number].pertanyaan,
  });
}

// Menampilkan hasil diagnosis
function diagnosisResults(result) {
  const div = document.createElement("div");

  //Menambahkan class message
  div.classList.add("message");

  // Bubble pada room chat
  div.innerHTML = `
        <p class="meta">Hasil Diagnosa</p>
          <p class="text">
          <h3>Anda Terkena Malaria ${result.percentage.malaria} %</h3>
          <span>Diagnosis Jenis Penyakit Malaria : </span>
            <ul>
                <li>Malaria Tertiana ${result.percentage.tertiana} %</li>
                <li>Malaria Tropika ${result.percentage.tropika} %</li>
                <li>Malaria Ovale ${result.percentage.ovale} %</li>
                <li>Malaria Kuartana ${result.percentage.kuartana} %</li>
            </ul>
        </p>
        <a href="" id="detail" style="color:white">Lihat Detail</a>
    `;

  document.querySelector(".chat-messages").appendChild(div);
  chatMessage.scrollTop = chatMessage.scrollHeight;
}

socket.on("possibility", (biggestPossibility) =>
  seeDetails(biggestPossibility)
);

// Mengirimkan pesan detail dari hasil diagnosis
function seeDetails(biggestPossibility) {
  socket.emit("checkTypeMalaria", biggestPossibility.indexLargeNumber);

  const div = document.createElement("div");
  div.classList.add("message");

  socket.on("finalResult", (result) => {
    div.innerHTML = `
      <p class="meta">Detail Diagnosis : </p>
      <h3>Anda terkena malaria jenis ${result.typeMalaria} ${biggestPossibility.largeNumber}%</h3>
      <h3>Dekripsi : </h3>
      <p>${result.deskripsi}</p>
      <h3>Solusi : </h3>
      <p>${result.solusi}</p>
    `;
  });

  document.querySelector(".chat-messages").appendChild(div);

  chatMessage.scrollTop = chatMessage.scrollHeight;
}

function countPercentage(data) {
  return data.reduce((acc, curr) => acc + curr, 0).toFixed(2);
}
