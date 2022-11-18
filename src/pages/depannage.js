import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Col, Row} from 'react-bootstrap'
import HeroImage from "../components/pagecmp/HeroImage"
import depannage from "../assets/images/tt-depannage.png"
import PageHeader from "../components/pagecmp/PageHeader"
import PageP from "../components/pagecmp/PageP"
import ServicesList from "../components/pagecmp/ServicesList"
import CardIcon from "../components/Card"
import { TbFlame } from "react-icons/tb"
import { AiOutlineEye, AiOutlineThunderbolt } from 'react-icons/ai'
import BrandsBanner from "../components/pagecmp/BrandsBanner"


const depannageData = {
  paragraph:"Il y a des choses qui n’attendent pas. Quand il y a urgence, vous pouvez compter sur nous. Disponible 24/7 , nous nous déplaçons partout dans Bruxelles et ses environs. Que ce soit pour une chaudière qui ne démarre plus ou une fuite d’eau, composez notre numéro.",
  servicelist: [
    "chaudière au gaz en panne",
    "réparation chaudière",
    "remplacement chaudière",
    "radiateurs froids",
    "fuite d'eau",
    "fuite de gaz",
    "remplacement de sanitaire",
    "robinet qui coule",
    "problème de pression d'eau",
  ],
  pagetitle: "de dépannage",
}

const Depannage = props => (
  <Layout>
    <HeroImage title="depannage" img={depannage} />
    <PageHeader pText="Fuite d’eau ?" color="white" />
    <PageHeader pText="Chaudière en panne ?" color="white" />
    <PageHeader pText="On arrive tout de suite !" color="orange" />    <PageP paragraph={depannageData.paragraph} />
    <IconsRow>
    <Col xs lg="3">
    <CardIcon
      avatar={<AiOutlineEye size={70} color={"var(--orange)"} />}
      title="Detection de fuites"
      color={"var(--orange)"}
    /></Col>
    <Col xs lg="3">
    <CardIcon
      avatar={<TbFlame size={70} color={"var(--orange)"} />}
      title="Chaudière et chauffage"
      color={"var(--orange)"}
    
    /> </Col>  <Col xs lg="3">
    <CardIcon
      avatar={<AiOutlineThunderbolt size={70} color={"var(--orange)"} />}
      title="Reparation rapide"
      color={"var(--orange)"}
    />
    </Col><Col xs lg="2"></Col>
    </IconsRow>

    <ServicesList
      servicelist={depannageData.servicelist}
      pagetitle={depannageData.pagetitle}
    />
    <BrandsBanner />

  </Layout>
)

export const Head = () => <Seo title="Page depannage" />

export default Depannage

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
