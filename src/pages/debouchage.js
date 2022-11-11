import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/pagecmp/HeroImage"
import depannage from "../assets/images/tt-depannage.jpg"
import PageParagraph from "../components/pagecmp/PageParagraph"
import { FaPhoneAlt } from 'react-icons/fa';
import HeadingList from "../components/pagecmp/HeadingList"

const debouchageP = {
  pageheading: ["Un évier est bouché?","Une douche qui ne s’évacue plus?","Un sterput qui déborde?"],
  title: "On peut vous aider?",
  paragraph: "Et oui, toutes les canalisations peuvent se boucher. En venir à bout être notre spécialité depuis plus de 15 ans. Que ce soit un bouchon tenace ou une installation mal pensée, nous avons tous les outils et l’expertise pour vous sortir de cette affaire ennuyeuse.",
  servicelist: ['Débouchage sanitaires', 'Débouchage sterput','Débouchage égouts', 'Débouchage haute pression', 'Débouchage au furet', 'Débouchage + Curage canalisation/colonne Eau Fécale', 'Débouchage + Curage canalisation/colonne Eau Usée', 'Débouchage + Curage canalisation/colonne Eau Pluviale', "Débouchage + Curage du réseau d'égouttage", 'Débouchage WC', 'Débouchage baignoire et douche', 'Débouchage évier et lavabo', 'Dégorgement de canalisations', 'Problèmes de siphon', 'Problèmes évacuation d’eaux', 'Entretien des canalisations, égouts et sanitaires'],

}



const Debouchage = () => (
  <Layout>
    <HeroImage title="débouchage" img={depannage} />
    <PageParagraph title={debouchageP.title} paragraph={debouchageP.paragraph} pageheading={debouchageP.pageheading} servicelist={debouchageP.servicelist}/>
  </Layout>
)

export const Head = () => <Seo title="Page debouchage" />

export default Debouchage
