"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `UCI Aero Design Inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Reply Email: ${replyEmail}`,
      "",
      message,
    ].join("\n");
    const params = [
      `subject=${encodeURIComponent(subject)}`,
      `body=${encodeURIComponent(body)}`,
    ].join("&");

    window.location.href = `mailto:uciaerodesign@gmail.com?${params}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-7"
    >
      <p className="card-kicker">Contact Form</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="form-label">
          <span>Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
            placeholder="Your name"
            required
          />
        </label>
        <label className="form-label">
          <span>Reply Email</span>
          <input
            value={replyEmail}
            onChange={(event) => setReplyEmail(event.target.value)}
            type="email"
            className="form-input"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="form-label mt-4">
        <span>Message</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          className="form-input resize-none"
          placeholder="Write your message here."
          required
        />
      </label>
      <button type="submit" className="inline-flex-button mt-5">
        Compose Email
      </button>
    </form>
  );
}
