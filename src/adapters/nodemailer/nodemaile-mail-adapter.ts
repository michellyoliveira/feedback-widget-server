import nodemailer from 'nodemailer';
import { MailAdapter, SenMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c6b7eca3d26f7d",
    pass: "41b9420242af2a"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {  
  async sendMail({ subject, body }: SenMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Michelly Oliveira <michellyoliveira@gmail.com>',
      subject,
      html: body,
    });
  };
}
