const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 3000,
  path = require("path"),
  http = require("http"),
  socketio = require("socket.io"),
  server = http.createServer(app),
  io = socketio(server),
  { chat, checkTypeMalaria } = require("./utils/konsultasi"),
  { questions } = require("./models/data");

io.on("connection", (socket) => {
  // On --- Menerima data
  // Emit --- Mengirim Data

  socket.on("checkTypeMalaria", (symptomsOfDisease) => {
    socket.emit("finalResult", checkTypeMalaria(symptomsOfDisease));
  });

  const botName = "Bot Pakar";

  socket.emit(
    "greeting",
    chat(
      botName,
      "Selamat datang, Jawab pertanyaan berikut dengan menekan tombol Ya atau Tidak"
    )
  );

  socket.emit("konsultasi", chat(botName, questions));

  // socket.on("DiagnosisResult", diagnosisResults());

  socket.on("disconnect", () => console.log("user disconnect"));
});

// Load CSS dan JS
app.use(express.static(path.join(__dirname, "public")));

// Memakai express layout
const expressLayouts = require("express-ejs-layouts");
app.set("view engine", "ejs");
app.use(expressLayouts);

// Bodyparse
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Menggunakan routes/index
app.use("/", require("./routes/index"));

server.listen(PORT, console.log(`Server started on port ${PORT}`));
