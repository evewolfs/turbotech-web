import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroImage from "../components/pagecmp/HeroImage"
import installation from "../assets/images/tt-installation.png"
import PageHeader from "../components/pagecmp/PageHeader"
import PageP from "../components/pagecmp/PageP"
import ServicesList from "../components/pagecmp/ServicesList"
import CardIcon from "../components/Card"
import { TbFlame, TbArrowsRandom} from "react-icons/tb"
import { BiWater } from 'react-icons/bi'
import BrandsBanner from "../components/pagecmp/BrandsBanner"


const installationData = {
  paragraph:"Nous installons des chaudières au gaz, des réseaux de canalisations ainsi que tous types de sanitaires, et ce, en respectant toujours vos goûts et votre budget. Appelez-nous pour fixer un rendez-vous. Une fois sur place, nous pourrons vous renseigner sur les meilleures pratiques et la solution la plus adaptée à votre projet.",
  servicelist: [
    "chaudière au gaz",
    "radiateurs",
    "thermostat",
    "baignoire et douche (italienne)",
    "évier et lavabo",
    "robineterie",
    "canalisation eau propre",
    "canalisation eau usée",
    "canalisation eau pluviale",
    "réseau d'égouttage",
  ],
  pagetitle: "d'installation",
}

const Installation = props => (
  <Layout>
    <HeroImage title="installation" img={installation} />
    <PageHeader title="Une salle de bain à refaire ?"color="var(--white)" />
    <PageHeader title="Une chaudière à bout de souffle ?" color="var(--white)"/>
    <PageHeader title="On s'en occupe !" color="var(--orange)"/>
 
     <PageP paragraph={installationData.paragraph} /> 
    <IconsRow>
    <CardIcon
      avatar={<BiWater size={70} color={"var(--orange)"} />}
      title="Sanitaires de tous type"
      color={"var(--orange)"}
    />
    <CardIcon
      avatar={<TbFlame size={70} color={"var(--orange)"} />}
      title="Chaudière et chauffage"
      color={"var(--orange)"}
    
    /> 
    <CardIcon
      avatar={<TbArrowsRandom size={70} color={"var(--orange)"} />}
      title="Système d'égouttage"
      color={"var(--orange)"}
    />

    </IconsRow>

    <ServicesList
      servicelist={installationData.servicelist}
      pagetitle={installationData.pagetitle}
    />
    <BrandsBanner />

  </Layout>
)

export const Head = () => <Seo title="Page installation" />

export default Installation

const IconBox = styled.div`
  padding: clamp(10rem,30vw, 30rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`
const IconsRow = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 8%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
