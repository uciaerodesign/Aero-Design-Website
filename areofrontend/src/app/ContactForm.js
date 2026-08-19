"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", replyEmail);
    formData.append("message", message);
    formData.append(
      "botcheck",
      event.currentTarget.elements.namedItem("botcheck")?.value || ""
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Message could not be sent.");
      }

      setName("");
      setReplyEmail("");
      setMessage("");
      setStatus("success");
      setStatusMessage("Message sent to Aero Design.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error.message || "Message could not be sent.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-7"
    >
      <p className="card-kicker">Contact Form</p>
      <input
        className="hidden"
        name="botcheck"
        tabIndex="-1"
        autoComplete="off"
      />
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
      <button
        type="submit"
        className="inline-flex-button mt-5"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {statusMessage ? (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-300" : "text-red-300"
          }`}
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}
