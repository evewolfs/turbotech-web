import React from "react"
import styled from "styled-components"
import { Expert } from "./icons/Expert"
import { Clock } from "./icons/Clock"
import { Location } from "./icons/Location"
import { Camion } from "./icons/Camion"

const About = props => {
  return (
    <AboutContainer>
      <AboutTitle>Toujours là pour vous rendre service !</AboutTitle>
      <CamionAnim>
        <Camion />
      </CamionAnim>
      <CardP>
        Actif depuis 2005, nous nous déplaçons partout dans Bruxelles pour vous
        venir en aide. Nous vous garantissons un travail impeccable, des
        matériaux de qualité, et tout cela à un prix abordable. Le patron réalise
        lui-même les travaux, avec l’aide d’ouvriers qualifiés si nécessaire.
        N’hésitez pas à nous appeler ou nous demander un devis, nous nous ferons
        un plaisir de vous répondre !
      </CardP>
      <AboutRow>
        <AboutCard>
          <Clock />

          <CardTitleSm>
            Disponible <br />
            24h/24 et 7j/7
          </CardTitleSm>
        </AboutCard>

        <AboutCard>
          <Location />
          <CardTitleSm>
            Bruxelles <br />
            et ses environs
          </CardTitleSm>
        </AboutCard>

        <AboutCard>
          <Expert />
          <CardTitleSm>
            La qualité <br />
            au rendez-vous
          </CardTitleSm>
        </AboutCard>
      </AboutRow>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  padding-top: 8%;
  margin-left: 20%;
  margin-right: 20%;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 2%;
    padding: 4%;
  }
`
const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 8%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const AboutCard = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4%;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 4%;
    flex-direction: row;
    width:100%;
  }
`

const AboutTitle = styled.div`
  color: var(--white);
  font-size: clamp(1.2rem, 5vw, 3rem);
  line-height: normal;
  font-weight: 600;
  margin-top: 100px;
  text-align: center;
  margin-bottom: 140px;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media (max-width: 768px) {
    margin: 10% 0;
    padding: 0 10%;

   
  }

`

const CardTitleSm = styled.div`
  color: var(--white);
  font-size: 1.2rem;
  line-height: normal;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: var(--orange);
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 1rem;
   
 transform:translateY(-20px);
  
  }
`

const CardP = styled.div`
  color: var(--white);
  padding-top: 2%;
  font-weight: 500;
  padding-bottom: 4%;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  line-height: clamp(1.6rem, 3vw, 2.2rem);
  text-align: left;
  text-justify: inter-character;

  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
`
const CamionAnim = styled.div`
  width: 100%;
  animation: moveclouds 6s linear infinite;

  @keyframes moveclouds {
    0% {
      margin-left: -100%;
    }
    100% {
      margin-left: 100%;
    }
  }
`
