import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/pagecmp/HeroImage"
import debouchage from "../assets/images/tt-debouchage.png"
import PageHeader from "../components/pagecmp/PageHeader"
import PageP from "../components/pagecmp/PageP"
import ServicesList from "../components/pagecmp/ServicesList"
import CardIcon from "../components/Card"
import { BsCameraReels } from "react-icons/bs"
import {AiOutlineEuro} from 'react-icons/ai'
import {RiWindyFill} from 'react-icons/ri'

const debouchageData = {

  paragraph:
    "Et oui, toutes les canalisations peuvent se boucher. En venir à bout être notre spécialité depuis plus de 15 ans. Que ce soit un bouchon tenace ou une installation mal pensée, nous avons tous les outils et l’expertise pour vous sortir de cette affaire ennuyeuse.",
  servicelist: [
    "sanitaires",
    "sterput",
    "égouts et réseau d'égouttage",
    "baignoire et douche",
    "évier et lavabo",
    "colonne Eau Fécale",
    "colonne Eau Usée",
    "colonne Eau Pluviale",
    "Dégorgement de canalisations",
    "Problèmes de siphon",
    "Problèmes évacuation d’eaux",
    "Entretien des canalisations et égouts",
  ],
  pagetitle: "de débouchage",
}

const Debouchage = props => (
  <Layout>
    <HeroImage title="débouchage" img={debouchage} />
    <PageHeader title="Un évier bouché ?"color="var(--white)" />
    <PageHeader title="Une douche qui ne s’évacue plus ?" color="var(--white)"/>
    <PageHeader title="Un sterput qui déborde ?" color="var(--white)"/>
    <PageHeader title="On peut vous aider ?" color="var(--orange)"/>
 
    <PageP paragraph={debouchageData.paragraph} />
    <IconsRow>
   
    <CardIcon
      avatar={<BsCameraReels size={50} color={"var(--orange)"} />}
      title="Inspection caméra thermique"
      color={"var(--orange)"}
    />
   
    <CardIcon
      avatar={<RiWindyFill size={50} color={"var(--orange)"} />}
      title="Débouchage haute pression"
      color={"var(--orange)"}
    />  
    <CardIcon
      avatar={<AiOutlineEuro size={50} color={"var(--orange)"} />}
      title="Prix abordables"
      color={"var(--orange)"}
    />
   
    </IconsRow>

    <ServicesList
      servicelist={debouchageData.servicelist}
      pagetitle={debouchageData.pagetitle}
    />

  </Layout>
)

export const Head = () => <Seo title="Page debouchage" />

export default Debouchage

const IconBox = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: row;

  
`
const IconsRow = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2%;
  @media (max-width: 768px) {
    flex-direction: row;
    width:100%;
  }
`