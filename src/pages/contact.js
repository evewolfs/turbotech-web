import * as React from "react"
import ContactForm from "../components/ContactForm"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageHeader from "../components/pagecmp/PageHeader"

const ContactPage = () => (
  <Layout>
<ContactForm />

  </Layout>
)

export const Head = () => <Seo title="Page contact" />

export default ContactPage
