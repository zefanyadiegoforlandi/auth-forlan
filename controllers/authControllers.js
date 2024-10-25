const bcrypt = require("bcrypt")
const { PrismaClient} =require("@prisma/client")
const prisma = new PrismaClient()

class AuthControllers {
    static renderRegisterPage(req, res) {
        res.render("register")

    }

    static renderLoginPage(req, res) {
        res.render("loginPage")
    }

    static async handleRegister(req, res){
        try {
            const{ name, email, password} = req.body

        const cekEmailUnik =  await prisma.user.findUnique({
            where: {
                email
            }
        })
        console.log(cekEmailUnik, "==>INI EMAIL FINDUNIQ")

        if (cekEmailUnik) {
            console.log("email sudah terdaftar, silahkan gunakan email lain")
            res.redirect("/register")
        } else {
            const manipulateEncrypt = await bcrypt.hashSync(password, 10)

            await prisma.user.create({
                data: {
                    name,
                    email,
                    password: manipulateEncrypt
                }
            })
            console.log("berhasil di tambah")
            // res.render("/login")
        }

        } catch(error) {
            res.status(500).json(error)

        }
        
    }
}

module.exports = AuthControllers