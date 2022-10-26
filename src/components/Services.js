import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { Debouchage } from "./icons/Debouchage"
import { DepannageC } from "./icons/DepannageC"
import { Entretien } from "./icons/Entretien"
import { DepannageP } from "./icons/DepannageP"
import { InstallationC } from "./icons/InstallationC"
import { InstallationP } from "./icons/InstallationP"

const Services = () => {
  return (
    <ServicesContainer>
     

      <ServiceItem>
        <InstallationC />
        <ServiceTitle>Installation <br/>chauffage</ServiceTitle>
        <ServiceDescription>Remplacement ou pose de chaudière au gaz, thermostat, radiateurs, et chauffe-eau. </ServiceDescription>
        <Button primary="true" round="true" to="/contact" style={{ display:"block", fontSize:"1rem", textAlign :"center", margin:"10%"}}>En savoir plus</Button>

      </ServiceItem>

 <ServiceItem>
        <Debouchage />
        <ServiceTitle> Débouchage <br/>tuyaux</ServiceTitle>
        <ServiceDescription>Inspection par caméra, débouchage à haute pression, débouchage de WC, évier, douche, cuisine...</ServiceDescription>
        <Button primary="true" round="true" to="/contact" style={{ display:"block", fontSize:"1rem", textAlign :"center", margin:"10%"}}>En savoir plus</Button>
      </ServiceItem>
      
      <ServiceItem>
        <InstallationP />
        <ServiceTitle>Installation <br/>sanitaire</ServiceTitle>
        <ServiceDescription>Remplacement ou pose de tuyaux, cannalisations, douche, baignoire, lavabo, évier, wc, ou robinet. </ServiceDescription>
        <Button primary="true" round="true"  to="/contact" style={{ display:"block", fontSize:"1rem", textAlign :"center", margin:"10%"}}>En savoir plus</Button>

      </ServiceItem>

      <ServiceItem>
        <DepannageP />
        <ServiceTitle>Dépannage <br/>plomberie</ServiceTitle>
        <ServiceDescription>Détection de fuite d'eau, réparation de fuite et dégats des eaux, remplacement de robinet ou autres. </ServiceDescription>
        <Button primary="true" round="true" to="/contact" style={{ display:"flex", fontSize:"1rem", position:"relative", justifyContent:"center", textAlign :"center", margin: "1rem 3rem"}}>En savoir plus</Button>

      </ServiceItem>

      <ServiceItem>
        <DepannageC />
        <ServiceTitle>Dépannage <br/>chaudière </ServiceTitle>
        <ServiceDescription>Réparation de chaudière en Panne Vaillant, Bulex, ... Radiateur froid ou dysfonctionnel</ServiceDescription>
        <Button primary="true" round="true" to="/contact" style={{ display:"flex", fontSize:"1rem", position:"relative", justifyContent:"center", textAlign :"center", margin: "1rem 3rem"}}>En savoir plus</Button>

      </ServiceItem>

      <ServiceItem>
        <Entretien />
        <ServiceTitle>Entretien <br/>chauffage </ServiceTitle>
        <ServiceDescription>Purges, détartrage, entretien chaudière Vaillant, Bullex</ServiceDescription>
        <Button primary="true" round="true" to="/contact" style={{ display:"flex", fontSize:"1rem", position:"relative", justifyContent:"center", textAlign :"center", margin: "1rem 3rem"}}>En savoir plus</Button>

      </ServiceItem>

    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled.div`
  background-color: #ffba69;
  --w:400px;
  --n:3;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(clamp(100%/(var(--n) + 1) + 0.1%,(var(--w) - 100vw)*1000,100%),1fr)); /*this */
  gap:10px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: 600px;
  padding: 2rem;
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  padding: 2rem calc((100vw - 1300px) / 2);
  margin: 0 auto;


  /* @media screen and (max-width: 786px) {
    display: grid;
    grid-template-columns: 47,5% 47,5%;
    grid-auto-rows: 700px;
    grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  } */
`


const ServiceItem = styled.div`
  padding: 1.8rem;
  margin: 1.2rem;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  background-color: rgba(255,255,255,0.95);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  &:hover {
    transform: translateY(-4px);
}

  `

const ServiceTitle = styled.div`
  font-family: "Roboto Condensed";
  text-transform: uppercase;
  text-align: center;
  color: #2C2C2C;
  font-weight: 500;
  font-size: clamp(1.4rem, 2.5vw, 1.8rem);
  margin-top: 6%;



`

const ServiceDescription = styled.div`
  font-family: "Roboto Condensed";
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #4C4C4C;
`
