import * as React from "react"
import Services from "../components/Services"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
   <Hero />
   <Services />
  </Layout>
)

export default IndexPage