import * as React from "react"
import Services from "../components/Services"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About"
import { Helmet } from "react-helmet"



const IndexPage = () => (
  <React.Fragment>
  <Helmet>
    <meta name="icon" href="/link/to/favicon.png" />
  </Helmet>
  <Layout>
    <Seo title="Home" />
   <Hero />
   <About />
   <Services />
  </Layout>
  </React.Fragment>
)

export default IndexPage
