import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Col, Row} from 'react-bootstrap'
import HeroImage from "../components/pagecmp/HeroImage"
import depannage from "../assets/images/tt-depannage.jpg"
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
    <HeroImage title="débouchage" img={depannage} />
    <PageHeader pText="Un évier bouché?" color="white" />
    <PageHeader pText="Une douche qui ne s’évacue plus?" color="white" />
    <PageHeader pText="Un sterput qui déborde?" color="white" />
    <PageHeader pText="On peut vous aider?" color="orange" />
    <PageP paragraph={debouchageData.paragraph} />
    <IconsRow>
    <Col xs lg="3">
    <CardIcon
      avatar={<BsCameraReels size={50} color={"var(--orange)"} />}
      title="Inspection caméra thermique"
      color={"var(--orange)"}
    /></Col>
    <Col xs lg="3">
    <CardIcon
      avatar={<RiWindyFill size={50} color={"var(--orange)"} />}
      title="Débouchage haute pression"
      color={"var(--orange)"}
    /> </Col>  <Col xs lg="3">
    <CardIcon
      avatar={<AiOutlineEuro size={50} color={"var(--orange)"} />}
      title="Prix abordables"
      color={"var(--orange)"}
    />
    </Col><Col xs lg="2"></Col>
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
  padding: clamp(10rem,30vw, 30rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`
const IconsRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
