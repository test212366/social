// const nodemailer = require('nodemailer')
//@ts-ignore
import nodemailer from 'nodemailer'

class MailService {
	tranporter: any

    constructor() {
        this.tranporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'nzoxoriginal@gmail.com',
                pass: 'pmxy qbpa gryi aamo',
            }
        })
    }
    async sendActivationEmail(to: string, link: string) {

        await this.tranporter.sendMail({
                from: 'nzoxoriginal@gmail.com',
                to,
                subject: 'Activate account in ',
                text: '',
                html: `
				<section>
					<h1>Подтверждение аккаунта NZox.</h1>
					<p style="width: 80%">Перейдите по ссылке чтобы подтвердить аккаунт и наслаждайтесь всеми возможностями приложения.</p>
					<a href=${link}>${link}</a>
					<small>С ув. Никита Змановский</small>
				</section>
			`
            }, (err: string, info: string) => console.log(err))
    }
}
export default new MailService()
// export default model('User', UserSchema)