import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { form, fieldErrors, formErrors } from "./contact-form.module.css"


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgeqlago");

  if (state.succeeded) {
    return <p>Merci pour votre message</p>;
  }

  return (
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input  id="email" type="email" name="email" placeholder="e-mail" />
      <ValidationError className={fieldErrors} prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message"></label>
      <textarea id="message" name="message" placeholder="message" />
      <ValidationError className={fieldErrors} prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      <ValidationError className={formErrors} errors={state.errors} />
    </form>
  );
}

