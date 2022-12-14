import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Debouchage } from "./icons/Debouchage"
import { Depannage } from "./icons/Depannage"
import { Entretien } from "./icons/Entretien"
import { Installation } from "./icons/Installation"

const Services = () => {
  return (
    <ServicesContainer>
      <StyledRow>
        <StyledCol>
          <ServiceLink to="/installation">
            <ServiceItem>
              <Installation />
              <ServiceTitle>Installation</ServiceTitle>
            </ServiceItem>
          </ServiceLink>
        </StyledCol>

        <StyledCol>
          <ServiceLink to="/debouchage">
            <ServiceItem>
              <Debouchage />
              <ServiceTitle> Débouchage</ServiceTitle>
            </ServiceItem>
          </ServiceLink>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <ServiceLink to="/depannage">
            <ServiceItem>
              <Depannage  />
              <ServiceTitle>Dépannage</ServiceTitle>
            </ServiceItem>{" "}
          </ServiceLink>{" "}
        </StyledCol>

        <StyledCol>
          <ServiceLink to="/entretien">
            <ServiceItem>
              <Entretien />
              <ServiceTitle>Entretien </ServiceTitle>
            </ServiceItem>
          </ServiceLink>
        </StyledCol>
      </StyledRow>
    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled.div`
  padding-top: 4%;
  padding-bottom: 4%;
  margin: 0 16%;
  @media (max-width: 768px) {
    margin: 0 4%;
    padding: 2%;
  }
`
const ServiceLink = styled(Link)`
text-decoration: none;
`

const StyledRow = styled.div`
  display: flex;
flex-direction: row;
flex-wrap:wrap;
  width: 100%;
`

const StyledCol = styled.div`
padding:0;
display: flex;
  flex-direction: column;
  flex-basis: 100%;



@media screen and (min-width: 900px) {
  flex: 1;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
 
  }

`
const ServiceItem = styled.div`
  padding: 1.8rem;
  margin: 1.2rem;
  border-radius: 4px;
  border: 1px solid var(--white);

  &:hover {
    transform: translateY(-4px);
    color: var(--orange);
  
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin: 1rem 0;
    width:100%;
  }
`

const ServiceTitle = styled.div`
  text-transform: uppercase;
  text-align: left;
  color: var(--white);
  font-weight: 700;
  font-size: 2rem;
  margin-top: 6%;
  letter-spacing: 1px;
  text-decoration: none !important;



`
