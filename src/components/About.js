import React from "react"
import styled from "styled-components"
import {Container, Row, Col} from "react-bootstrap"
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
              Actif depuis 2005, nous nous déplaçons partout dans Bruxelles pour vous venir en aide.
              Nous vous garantissons un
              travail impeccable, des matériaux de qualité, et tout cela à un prix abordable.
              Le patron réalise lui-même les travaux, avec l’aide d’ouvriers qualifiés si nécessaire.
               N’hésitez pas à nous appeler ou nous demander un devis, nous nous ferons un
              plaisir de vous répondre !
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

  @media (max-width: 768px) {
    margin: 2%;
    padding: 4%;
  }
`

const AboutCardSm = styled.div`
  padding-bottom: 2%;
  display: block;
  align-items: center;
`

const AboutTitle = styled.div`
  color: var(--white);
  font-size: clamp(2.4rem, 6vw, 3rem);
  line-height: normal;
  font-weight: 600;
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
  font-weight: 600;
  text-transform: uppercase;
  width: 200px;
  text-align: center;
  color: var(--orange);
  margin-top: 30px;
`

const CardP = styled.div`
  color: var(--white);
  padding-top: 2%;
  font-weight: 500;
  padding-bottom: 4%;
  font-size: clamp(1.4rem, 3vw, 1.6rem);
  line-height: clamp(1.8rem, 3vw, 2.2rem);
  text-align: left;
  text-justify: inter-character;
  width: 600vw;
  width: clamp(30rem, 60vw, 70rem);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
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

  @media (max-width: 768px) {
    width: 400px;
    @keyframes moveclouds {
    0% {
      margin-left: -300px;
    }
    100% {
      margin-left: 300px;
    }
  }
  }
`
