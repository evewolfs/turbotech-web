import React from 'react'
import styled from "styled-components"
import {Container, Row, Col} from "react-bootstrap"
import Bosch from '../../assets/images/bosch.png'
import Bulex from '../../assets/images/bulex.png'
import Daikin from '../../assets/images/daikin.png'
import Dedietrich from '../../assets/images/dedietrich.png'
import Facq from '../../assets/images/facq.png'
import Junkers from '../../assets/images/junkers.png'
import Vaillant from '../../assets/images/vaillant.png'
import Vanmarcke from '../../assets/images/vanmarcke.png'
import Viessman from '../../assets/images/viessman.png'
import Fernox from '../../assets/images/fernox.png'
import PageHeader from './PageHeader'



const BrandsBanner = () => {
  return (

        
    <ParagraphRow>
 <PageHeader pText="Nos marques favorites"/>
       <img src={Vaillant} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Viessman} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Facq} style={{width:'clamp(6rem,6vw,24rem)', height:'100%', transform:'translateY(62px)'}} />
         <img src={Vanmarcke} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Bulex} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
        <img src={Daikin} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Dedietrich} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Junkers} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Bosch} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
         <img src={Fernox} style={{width:'clamp(10rem,15vw,30rem)',padding:'4%' }} />
   </ParagraphRow>

)   
}

export default BrandsBanner

const BBContainer = styled.div`
margin: 0;
padding: 0;

    list-style-type: none;
  ` 

const ParagraphRow = styled.div`
  display: flex;
  width: 100%;
  margin: 0 clamp(2rem, 2vw, 4rem);
  padding: 0 clamp(1rem, 4vw, 2rem);
  flex-wrap: wrap;

`


const ListTitle = styled.div`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;

`
