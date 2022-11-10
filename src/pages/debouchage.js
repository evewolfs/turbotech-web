import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/HeroImage"
import depannage from "../assets/images/tt-depannage.jpg"
import PageParagraph from "../components/PageParagraph"

const Debouchage = () => (
  <Layout>
    <HeroImage title="débouchage" img={depannage} />
    <PageParagraph />
  </Layout>
)

export const Head = () => <Seo title="Page debouchage" />

export default Debouchage
