require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require('express-session');
const flash = require("express-flash");
const morgan = require("morgan");
const router = require("./routes"); // Pastikan jalur ini benar

const app = express();
const PORT = 3000;

// Mengatur view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Menetapkan folder views

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

// Menggunakan router
app.use("/", router);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
