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
    <PageHeader title="hello" />
    {/* <PageHeader pText="Des radiateurs qui font du bruit ?" color="white" />
    <PageHeader pText="Une chaudière fainéante ?" color="white" />
    <PageHeader pText="Raz le bol du calcaire ?" color="white" />
    <PageHeader pText="Jamais trop tôt pour nous appeler !" color="orange" />    <PageP paragraph={entretienData.paragraph} /> */}
    <IconsRow>
  
    <Col xs lg="3">
    <CardIcon
      avatar={<TbFlame size={70} color={"var(--orange)"} />}
      title="Chaudière et chauffage"
      color={"var(--orange)"}
    
    />   
  </Col> 
    <Col xs lg="3">
   <CardIcon
      avatar={<RiWaterFlashLine size={70} color={"var(--orange)"} />}
      title="Détartrage"
      color={"var(--orange)"}/></Col>
  <Col xs lg="3">
    <CardIcon
      avatar={<RiWindyFill size={70} color={"var(--orange)"} />}
      title="Curage canalisations"
      color={"var(--orange)"}
    />
    </Col><Col xs lg="2"></Col>
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
