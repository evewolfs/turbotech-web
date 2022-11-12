import React,{Component } from 'react'
import styled from 'styled-components';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

    function ServicesList(){
       const servicelist=['Débouchage sanitaires', 'Débouchage sterput','Débouchage égouts', 'Débouchage haute pression', 'Débouchage au furet', 'Débouchage + Curage canalisation/colonne Eau Fécale', 'Débouchage + Curage canalisation/colonne Eau Usée', 'Débouchage + Curage canalisation/colonne Eau Pluviale', "Débouchage + Curage du réseau d'égouttage", 'Débouchage WC', 'Débouchage baignoire et douche', 'Débouchage évier et lavabo', 'Dégorgement de canalisations', 'Problèmes de siphon', 'Problèmes évacuation d’eaux', 'Entretien des canalisations, égouts et sanitaires']

        const map1 = servicelist.map(item => <ListItem>{item}</ListItem> )
        return(
            <ParagraphRow>
            <Col xs lg="5">
            <ListContainer>Voici ce que nous pouvons faire pour vous <br/> {map1}</ListContainer>
            </Col>
            <Col xs lg="3"></Col>
          </ParagraphRow>
            
        )
    }
export default ServicesList;

const ListItem = styled.li`
color: var(--white);
font-size: 1.2rem;

`

const ListContainer = styled.div`
margin-top: 2%;
color: var(--white);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.6rem;
  text-align: left;
  text-align: left;

`

const ParagraphRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`
