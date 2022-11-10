import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Expert } from "./icons/Expert"
import { Clock } from "./icons/Clock"
import { Location } from "./icons/Location"
import { Camion } from "./icons/Camion"

const About = () => {
  return (
    <Container fluid>
      <AboutRow>
        <Col xs lg="10">
          <AboutTitle>Toujours là pour vous rendre service</AboutTitle>
          <CamionAnim>
            <Camion />
          </CamionAnim>
          <CardP>
            <p>
              Actif depuis 2005, nous nous déplaçons partout dans Bruxelles et
              ses environs. Nous opérons avec précision, et vous garantissons un
              travail impeccable. Nous utilisons aussi des produits de qualité,
              et tout cela sans vous ruiner. Le patron réalise lui-même les
              travaux, avec l’aide d’ouvriers qualifiés si nécessaire. N’hésitez
              pas à nous appeler ou nous demander un devis, nous nous ferons un
              plaisir de vous aider!
            </p>
          </CardP>
        </Col>
      </AboutRow>
      <AboutRow>
        <Col xs lg="3">
          <AboutCard>
            <Clock />

            <CardTitleSm>
              Disponible <br />
              24h/24 et 7j/7
            </CardTitleSm>
          </AboutCard>
        </Col>
        <Col xs lg="3">
          <AboutCard>
            <Location />
            <CardTitleSm>
              Bruxelles <br />
              et ses environs
            </CardTitleSm>
          </AboutCard>
        </Col>
        <Col xs lg="3">
          <AboutCard>
            <Expert />
            <CardTitleSm>
              La qualité <br />
              au rendez-vous
            </CardTitleSm>
          </AboutCard>
        </Col>
      </AboutRow>
    </Container>
  )
}

export default About

const AboutContainer = styled(Container)`
  padding-top: 8%;
  margin-left: 16%;
  margin-right: 16%;
  /* display: flex;
  justify-content: center;
align-items: center; */
`
const AboutRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`
const AboutCard = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8%;
`

const AboutCardSm = styled.div`
  padding-bottom: 2%;
  display: block;
  align-items: center;
`

const AboutTitle = styled.div`
  color: var(--white);
  font-size: 3rem;
  line-height: normal;
  font-weight: 500;
  font-style: normal;
  margin-top: 100px;
  text-align: center;
  margin-bottom: 140px;
  letter-spacing: 0px;
`

const CardTitleSm = styled.div`
  color: var(--white);
  font-size: 1.2rem;
  line-height: normal;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0px;
  width: 200px;
  text-align: center;
  color: var(--orange);
  margin-top: 30px;
`

const CardP = styled.div`
  color: var(--white);
  padding-top: 2%;
  font-size: 1.4rem;
  font-weight: 300;
  padding-bottom: 4%;
  text-align: center;
  line-height: 1.6rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 2% 16%;
`
const CamionAnim = styled.div`
  width: 1000px;
  animation: moveclouds 6s linear infinite;

  @keyframes moveclouds {
    0% {
      margin-left: -1000px;
    }
    100% {
      margin-left: 1000px;
    }
  }
`
