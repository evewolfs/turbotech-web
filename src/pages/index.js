import * as React from "react"
import Services from "../components/Services"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About"



const IndexPage = () => (

  <Layout>
    <Seo title="Home" />
   <Hero />
   <About />
   <Services />
  </Layout>

)

export default IndexPage
