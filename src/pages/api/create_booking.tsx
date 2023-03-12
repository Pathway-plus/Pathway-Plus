import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
  const body: BookingForm & Session = JSON.parse(req.body);
  const date = new Date(body.date);
  const dateString = date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const dayString = date.toLocaleDateString("en-US", { weekday: "long" });
  const time = `${body.start_time} - ${body.end_time}`;

  // Implement backend booking system before sending email
  // makeBooking();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const options: nodemailer.SendMailOptions = {
    from: process.env.SENDER_EMAIL,
    to: body.email,
    cc: "",
    subject: "Pathway Plus Consultation Booking",
    text: `Hi, ${body.name}. A consultation booking has been created for you at ${dateString} (${dayString}). The time you selected is ${time}. Thank you for your time.`,
  };

  setTimeout(() => {
    try {
    // Enable feature after completing booking system and remove forced delay/timeout
    // await transporter.sendMail(options);
      res.status(200).send(true);
    } catch (e) {
      res.status(300).send(false);
    }
  }, 1000);
}
