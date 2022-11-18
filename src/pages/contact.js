import * as React from "react"
import { Link } from "gatsby"
import {Container, Col, Row} from "react-bootstrap"
import ContactForm from '../components/ContactForm'
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>

    <ContactForm />


  </Layout>
)

export const Head = () => <Seo title="Page contact" />

export default ContactPage
