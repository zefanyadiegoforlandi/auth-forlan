const express = require("express");
const AuthControllers = require("../controllers/authControllers");
const router = express.Router();

// Routing untuk halaman register
router.get("/register", AuthControllers.renderRegisterPage); // Pastikan ada file 'register.ejs' di folder views

router.post("/register", AuthControllers.handleRegister)

// Routing untuk halaman login
router.get("/login",AuthControllers.renderLoginPage)

module.exports = router;
