import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobileNumber, description } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // owner email
        pass: process.env.MAIN_PASSWORD,   // Gmail App Password
      },
    });

    // 📩 Mail to Owner
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${mobileNumber}</p>
        <p><b>Message:</b> ${description}</p>
      `,
    });

    // 📩 Mail to User
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for contacting us 🙌</p>
        <p><b>Your Message:</b></p>
        <p>${description}</p>
        <br/>
        <p>We’ll get back to you soon.</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false });
  }
}