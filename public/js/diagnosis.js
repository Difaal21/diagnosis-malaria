// Dapatkan Nama User by URL
const {
  name
} = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

// Menampilkan nama user di Box
const getNameUser = document.getElementById("name");
getNameUser.innerText = `${name}`;

const socket = io();

socket.emit("konsultasi", "Kamu sedang konsultasi");

socket.on("chat", (data) => chat(data));

const chatMessage = document.querySelector(".chat-messages");

function chat(message) {
  // Membaat elemen div
  const div = document.createElement("div");

  // Menambahkan class message
  div.classList.add("message");
  if (message.name === name) {
    div.style.background = "gray";
  }
  // Bubble pada room chat
  div.innerHTML = `
      <p class="meta">${message.name}</p>
      <p class="text">
      ${message.text}
      </p>
      `;

  // Menambahkan bubble chat
  document.querySelector(".chat-messages").appendChild(div);
  chatMessage.scrollTop = chatMessage.scrollHeight;
}

const getAnswer = document.querySelectorAll(".btn-answer");

const choose = [];
socket.on("question", (allQuestion) => {
  question({
    data: allQuestion,
    number: 0
  });

  getAnswer.forEach((btn) => {
    // ketika button di klik
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // kirim jawwaban
      chat({
        name: name,
        text: e.target.innerText,
      });
      choose.push(e.target.innerText);
      // question();
      question({
        data: allQuestion,
        number: choose.length
      });
    });
  });
});

function question(message) {
  console.log(message);
  // Membaat elemen div
  const div = document.createElement("div");

  // Menambahkan class message
  div.classList.add("message");

  // Jika yang mengirim user, ganti warna chat menjadi abu-abu
  if (message.name === name) {
    div.style.background = "gray";
  }

  // Jika pertanyaan Habis
  if (message.number == message.data.text.length) {
    getAnswer.forEach(btn => {
      btn.removeAttributeNode('btn-answer')
    })
  }

  // Bubble pada room chat
  div.innerHTML = `
      <p class="meta">${message.data.name}</p>
      <p class="text">
      ${message.data.text[message.number].gejala}
      </p>
      `;

  // Menambahkan bubble chat
  document.querySelector(".chat-messages").appendChild(div);
  // Apabila chat masuk scroll ke paling bawah
  chatMessage.scrollTop = chatMessage.scrollHeight;
}