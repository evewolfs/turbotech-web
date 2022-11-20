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
          <ServiceLink href="/installation">
            <ServiceItem>
              <Installation />
              <ServiceTitle>Installation</ServiceTitle>
            </ServiceItem>
          </ServiceLink>
        </StyledCol>

        <StyledCol>
          <ServiceLink href="/debouchage">
            <ServiceItem>
              <Debouchage />
              <ServiceTitle> Débouchage</ServiceTitle>
            </ServiceItem>
          </ServiceLink>
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <ServiceLink href="/depannage">
            <ServiceItem>
              <Depannage />
              <ServiceTitle>Dépannage</ServiceTitle>
            </ServiceItem>{" "}
          </ServiceLink>{" "}
        </StyledCol>

        <StyledCol>
          <ServiceLink href="/entretien">
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



@media screen and (min-width: 800px) {
  flex: 1;
 
  }

`
const ServiceItem = styled.div`
  padding: 1.8rem;
  margin: 1rem;
  border-radius: 4px;
  border: 1px solid var(--white);

  &:hover {
    transform: translateY(-4px);
    color: var(--orange);
    border: 1px solid var(--orange);
  
  }

  @media (max-width: 768px) {
    justify-content: center;

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
  &:hover {
    color: var(--orange);
  }


`
