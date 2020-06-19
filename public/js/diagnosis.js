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
let sicks = [];

function getAnswerAndQuestion(data) {
  const questions = data.questions.text;

  const questionCode = data.questions.text[number].kode;

  const answer = data.answer;
  const yes = "Ya";
  const no = "Tidak";

  //==============    LOGIKA   ==============//

  if (answer === yes) {
    sicks.push(questionCode);
    // Mengecek gejala yang timbul, dan mengirim variabel number untuk melanjutkan pada pertanyaan berikutnya
    if (questionCode === "G001" && answer === yes) {
      number = 1;
    }
    if (questionCode === "G002") {
      // console.log("Kemungkinan sakit Malaria Tropika atau Malaria Ovale");
      number = 4;
    }
    if (questionCode === "G003") {
      // console.log("Malaria Tertiana");
      number = 5;
    }
    if (questionCode === "G004") {
      // console.log("Malaria Kuartana");
      number = 5;
    }
    if (questionCode === "G005") {
      // console.log("Malaria Tropika");
      number = 5;
    }
    if (questionCode === "G006") {
      number = 6;
    }
    if (questionCode === "G007") {
      number = 7;
    }
    if (questionCode === "G008") {
      number = 8;
    }
    if (questionCode === "G009") {
      number = 9;
    }
    if (questionCode === "G010") {
      number = 10;
    }
    if (questionCode === "G011") {
      number = 11;
    }
    if (questionCode === "G012") {
      number = 12;
    }
    if (questionCode === "G013") {
      number = 13;
    }
    if (questionCode === "G014") {
      // console.log("Malaria Tropika");
      number = 16;
    }
    if (questionCode === "G015") {
      // console.log("Malaria Tertiana");
      number = 18;
    }
    if (questionCode === "G016") {
      // console.log("Malaria Ovale");
      number = 19;
    }
    if (questionCode === "G017") {
      // console.log("Malaria Tropika atau Malaria Kuarta");
      number = 17;
    }
    if (questionCode === "G018") {
      // console.log("Malaria Kuarta");
      number = 18;
    }
    if (questionCode === "G019") {
      // console.log("Malaria Tertiana");
      number = 19;
    }
    if (questionCode === "G020") {
      number = 20;
    }
    if (questionCode === "G021") {
      number = 21;
    }
    if (questionCode === "G022") {
      number = 22;
    }
  }

  if (answer === no) {
    if (questionCode === "G001") {
      // console.log("Kamu tidak terkena Malaria");
      number = undefined;
      chat({
        name: data.questions.name,
        text:
          "Anda tidak terkena penyakit malaria, karena salah satu gejala utama malaria adalah demam",
      });
    }
    if (questionCode === "G002") {
      number = 2;
    }
    if (questionCode === "G003") {
      // console.log("Kemungkinan Malaria Kuartana");
      number = 3;
    } else if (questionCode === "G004") {
      // console.log("Gejala demam biasa");
      number = 5;
    }
    if (questionCode === "G005") {
      // console.log("Malaria Ovale");
      number = 5;
    }
    if (questionCode === "G006") {
      number = 6;
    }
    if (questionCode === "G007") {
      number = 7;
    }
    if (questionCode === "G008") {
      number = 8;
    }
    if (questionCode === "G009") {
      number = 9;
    }
    if (questionCode === "G010") {
      number = 10;
    }

    if (questionCode === "G011") {
      number = 11;
    }
    if (questionCode === "G012") {
      number = 12;
    }
    if (questionCode === "G013") {
      number = 13;
    }
    if (questionCode === "G014") {
      number = 14;
    }
    if (questionCode === "G015") {
      number = 15;
    }
    if (questionCode === "G016") {
      // console.log("Malaria Tropika atau Malaria Kuarta");
      number = 16;
    }
    if (questionCode === "G017") {
      number = 17;
    }
    if (questionCode === "G018") {
      number = 18;
    }

    if (questionCode === "G019") {
      number = 19;
    }
    if (questionCode === "G021") {
      number = 21;
    }
    if (questionCode === "G022") {
      number = 22;
    }
    if (questionCode === "G020") {
      number = 20;
    }
  }

  // Semua pertanyaan sudah dijawab
  if (typeof questions[number] === "undefined") {
    getBtnAnswer.forEach((btn) => {
      // Tombol tidak bisa ditekan
      btn.setAttribute("disabled", " ");
    });

    // RULES
    socket.emit("checkTypeMalaria", sicks);
    // END RULES

    if (choose[0] === "Tidak")
      // Jika Pertanyaan pertama jawabannya Tidak
      return;

    // Menampilkan hasil diagnosis
    socket.on("finalResult", (result) => {
      if (!Object.keys(result).length) {
        return chat({
          name: "Hasil Diagnosis",
          text: "Maaf, kami tidak bisa mendeteksi penyakit anda",
        });
      }
      diagnosisResults(result);
    });

    return;
  }

  // Menampilkan pertanyaan selanjutnya
  chat({
    name: data.questions.name,
    text: questions[number].pertanyaan,
  });
}

function diagnosisResults(result) {
  const div = document.createElement("div");

  //Menambahkan class message
  div.classList.add("message");

  // Bubble pada room chat
  div.innerHTML = `
        <p class="meta">Hasil Diagnosa</p>
        <p class="text">
          <h3>Anda terkena malaria jenis ${result.typeMalaria}</h3>
          <h3>Dekripsi : </h3>
          <p>${result.deskripsi}</p>
          <h3>Solusi : </h3>
          <p>${result.solusi}</p>
        </p>
    `;

  document.querySelector(".chat-messages").appendChild(div);
  chatMessage.scrollTop = chatMessage.scrollHeight;
}
