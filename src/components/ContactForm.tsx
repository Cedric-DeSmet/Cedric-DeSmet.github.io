"use client";

import { FormEvent, useEffect, useState } from "react";
import { createEmailDraft } from "@/lib/contact";

export const ContactForm = () => {
  const [ready, setReady] = useState(false);
  const [draftOpened, setDraftOpened] = useState(false);
  useEffect(() => setReady(true), []);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const message = String(fields.get("message") || "").trim();
    if (!name || !message) {
      const emptyField = form.elements.namedItem(!name ? "name" : "message") as HTMLInputElement | HTMLTextAreaElement;
      emptyField.setCustomValidity("Please add a few words here.");
      emptyField.reportValidity();
      return;
    }
    window.location.href = createEmailDraft(name, email, message);
    setDraftOpened(true);
  }

  return (
    <div className="contact-panel" id="project-enquiry">
      <h2>Tell me about your website.</h2>
      <p className="contact-intro">A new site, a redesign, or a question about your project.</p>
      <form onSubmit={prepareEmail} aria-label="Website project enquiry">
        <div className="contact-field">
          <label htmlFor="enquiry-name">Your name</label>
          <input id="enquiry-name" name="name" autoComplete="name" required maxLength={100} onInput={event => event.currentTarget.setCustomValidity("")} />
        </div>
        <div className="contact-field">
          <label htmlFor="enquiry-email">Email address</label>
          <input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </div>
        <div className="contact-field">
          <label htmlFor="enquiry-message">What do you have in mind?</label>
          <textarea id="enquiry-message" name="message" rows={4} required maxLength={1500} onInput={event => event.currentTarget.setCustomValidity("")} />
        </div>
        <button className="preview-primary" type="submit" disabled={!ready}>Prepare email</button>
        <p className="contact-form-note">Opens a draft in your email app for you to review and send.</p>
        <p className="contact-form-status" role="status">{draftOpened ? "Your email app should open with a draft. If it doesn’t, use the email link below. Your message has not been sent by this page." : ""}</p>
        <noscript><p>Use the email link below to get in touch.</p></noscript>
      </form>
      <a className="contact-direct" href="mailto:unenlightened690@gmail.com">Or email me directly</a>
    </div>
  );
};
