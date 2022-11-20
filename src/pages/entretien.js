import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Col, Row} from 'react-bootstrap'
import HeroImage from "../components/pagecmp/HeroImage"
import entretien from "../assets/images/tt-entretien.png"
import PageHeader from "../components/pagecmp/PageHeader"
import PageP from "../components/pagecmp/PageP"
import ServicesList from "../components/pagecmp/ServicesList"
import CardIcon from "../components/Card"
import { TbFlame } from "react-icons/tb"
import { RiWindyFill, RiWaterFlashLine } from 'react-icons/ri'

import BrandsBanner from "../components/pagecmp/BrandsBanner"


const entretienData = {
  paragraph:"L’obsolescence programmée, le calcaire et le temps impacte toujours vos installations de chauffage et sanitaire. Heureusement, l’entretien prolonge la durée de vie de votre logement. Cela vous évite de nombreuses surprises, réduit votre facture d’eau et de gaz, et met votre logement en sécurité.",
  servicelist: [
    "chaudière au gaz",
    "radiateurs",
    "cannalisations",
    "robineterie",
    "siphon",
    "canalisation eau propre",
    "canalisation eau usée",
    "canalisation eau pluviale",
    "réseau d'égouttage",
  ],
  pagetitle: "d'entretien",
}

const Entretien = props => (
  <Layout>
    <HeroImage title="entretien" img={entretien} />
    <PageHeader title="Des radiateurs bruyants ?" color="white" />
    <PageHeader title="Une chaudière fainéante ?" color="white" />
    <PageHeader title="Trop de calcaire ?" color="white" />
    <PageHeader title="Jamais trop tôt pour nous appeler !" color="orange" />    <PageP paragraph={entretienData.paragraph} />
    <IconsRow>
  
    
    <CardIcon
      avatar={<TbFlame size={70} color={"var(--orange)"} />}
      title="Chaudière et chauffage"
      color={"var(--orange)"}
    
    />   
   
    
   <CardIcon
      avatar={<RiWaterFlashLine size={70} color={"var(--orange)"} />}
      title="Détartrage"
      color={"var(--orange)"}/>
  
    <CardIcon
      avatar={<RiWindyFill size={70} color={"var(--orange)"} />}
      title="Curage canalisations"
      color={"var(--orange)"}
    />

    </IconsRow>

    <ServicesList
      servicelist={entretienData.servicelist}
      pagetitle={entretienData.pagetitle}
    />
    <BrandsBanner />

  </Layout>
)

export const Head = () => <Seo title="Page entretien" />

export default Entretien

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