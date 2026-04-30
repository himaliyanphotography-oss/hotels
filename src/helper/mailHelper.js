import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jaylin.king@ethereal.email',
        pass: 'J9qdauVt2FSzNr1VHh',
    },
});
