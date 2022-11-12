import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/pagecmp/HeroImage"
import depannage from "../assets/images/tt-depannage.jpg"
import PageHeader from "../components/pagecmp/PageHeader"
import PageP from "../components/pagecmp/PageP"
import ServicesList from "../components/pagecmp/ServicesList"
import CameraBlock from "../components/icons/CameraBlock"
import AbordableBlock from "../components/icons/AbordableBlock"
import PowerBlock from "../components/icons/PowerBlock"



const debouchageData = {
  
  pageheading : ["Un évier bouché?","Une douche qui ne s’évacue plus?","Un sterput qui déborde?", "On peut vous aider?"],
  headline: "On peut vous aider?",
  paragraph: "Et oui, toutes les canalisations peuvent se boucher. En venir à bout être notre spécialité depuis plus de 15 ans. Que ce soit un bouchon tenace ou une installation mal pensée, nous avons tous les outils et l’expertise pour vous sortir de cette affaire ennuyeuse.",
  servicelist: ['sanitaires', 'sterput','égouts','baignoire et douche', 'évier et lavabo', 'haute pression', 'au furet', 'canalisation/colonne Eau Fécale', 'canalisation/colonne Eau Usée', 'canalisation/colonne Eau Pluviale', "réseau d'égouttage", 'Dégorgement de canalisations', 'Problèmes de siphon', 'Problèmes évacuation d’eaux', 'Entretien des canalisations et égouts'],
  icontitle: "Inspection caméra thermique",
  pagetitle: "débouchage"

}



const Debouchage = (props) => (
  <Layout>
    <HeroImage title="débouchage" img={depannage} />
<PageHeader pageheading={debouchageData.pageheading} />
<PageP paragraph={debouchageData.paragraph}/>
<CameraBlock icontitle={debouchageData.icontitle}/>
<PowerBlock />
<AbordableBlock />
<ServicesList servicelist={debouchageData.servicelist} pagetitle={debouchageData.pagetitle}/>
  </Layout>
)

export const Head = () => <Seo title="Page debouchage" />

export default Debouchage
