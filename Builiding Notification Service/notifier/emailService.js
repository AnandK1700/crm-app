const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'crm.notification.service.1995@gmail.com',
        pass: 'hdwhoeanobmdcxfk'
    },
    secure: true
})