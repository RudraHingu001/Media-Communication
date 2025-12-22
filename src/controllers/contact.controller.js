import Contact from '../models/Contact.js';
import transporter from '../config/mailer.js';

export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, enquiryFor, message } = req.body;

    // Save to DB
    const inquiry = await Contact.create({
      name,
      email,
      phone,
      enquiryFor,
      message,
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Inquiry: ${enquiryFor}`,
      html: `
        <h3>New Contact Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enquiry For:</strong> ${enquiryFor}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry',
    });
  }
};
