"use client";
import React from 'react';
import emailjs from 'emailjs-com';
import '../cssFiles/contact.css';

export default function ContactMePage() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a32k6lc', 
      'template_idylvjm', 
      e.currentTarget,
      'h5uqor_vB5stQm5J2' 
    )
    .then((result) => {
      alert('Message sent!');
    }, (error) => {
      alert('Failed to send message, try again later.');
    });

    e.currentTarget.reset(); 
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <form id="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required></textarea>

        <button type="submit">Send</button>
      </form>

      <div className="social-links">
        <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">
          <img src="/logos/linkedin.png" alt="LinkedIn" className="social-icon" />
          LinkedIn
        </a>
        <a href="https://github.com/Bilguntugs" target="_blank">
          <img src="/logos/github.png" alt="GitHub" className="social-icon" />
          GitHub
        </a>
      </div>
    </div>
  );
}

