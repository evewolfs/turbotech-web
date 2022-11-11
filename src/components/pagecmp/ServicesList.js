import React,{Component } from 'react'
import styled from 'styled-components';

    function ServicesList(){
        const array1 = ['Débouchage sanitaires', 'Débouchage sterput','Débouchage égouts', 'Débouchage haute pression', 'Débouchage au furet', 'Débouchage + Curage canalisation/colonne Eau Fécale', 'Débouchage + Curage canalisation/colonne Eau Usée', 'Débouchage + Curage canalisation/colonne Eau Pluviale', "Débouchage + Curage du réseau d'égouttage", 'Débouchage WC', 'Débouchage baignoire et douche', 'Débouchage évier et lavabo', 'Dégorgement de canalisations', 'Problèmes de siphon', 'Problèmes évacuation d’eaux', 'Entretien des canalisations, égouts et sanitaires'];
        const map1 = array1.map(item => <ListItem>{item}</ListItem> )
        return(
            
            <ListContainer>Voici ce que nous pouvons faire pour vous <br/> {map1}</ListContainer>
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
