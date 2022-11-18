import * as React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<ContactForm />

  </Layout>
)

export const Head = () => <Seo title="Page contact" />

export default ContactPage
