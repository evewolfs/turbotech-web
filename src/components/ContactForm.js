import React from "react"
import styled from "styled-components"
import { useForm, ValidationError } from "@formspree/react"
import { form, fieldErrors, formErrors } from "./contact-form.module.css"
import {Container, Col, Row} from 'react-bootstrap'
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgeqlago")

  if (state.succeeded) {
    return <p>Merci pour votre message</p>
  }

  return (
    <AboutContainer>

      <Col xs lg="10">
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input id="email" type="email" name="email" placeholder="e-mail" />
      <ValidationError
        className={fieldErrors}
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message"></label>
      <textarea id="message" name="message" placeholder="message" />
      <ValidationError
        className={fieldErrors}
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Envoyer
      </button>
      <ValidationError className={formErrors} errors={state.errors} />
    </form>
    </Col>

   </AboutContainer>
  )
}

const AboutContainer = styled(Container)`
  padding-top: 8%;
  padding-bottom: 4%;
  display: flex;
  justify-content: center;
align-items: center;

@media (max-width: 768px) {
  margin-top: 24%;
}
`
