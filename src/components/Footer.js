import React, {useState} from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { RiFacebookCircleLine } from "react-icons/ri"
import { FiMail } from "react-icons/fi"
import {FaPhoneAlt} from "react-icons/fa"

const Footer = () => {

  const [buttonText, setButtonText] = useState('TVA');

  function handleClick() {
    setButtonText('N° TVA 9532 4567 7890');
  }

  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol>
          <FooterText>
            {" "}
            Besoin d’un devis <br />
            ou d’un rendez-vous?
          </FooterText>
          <FooterButton href='tel:0032484915516'><FaPhoneAlt style={{backgroundColor:"transparent"}}/><h4>+32 484 91 55 16</h4></FooterButton>
        </StyledCol>
      </StyledRow>
      <DarkRow>
        <StyledCol>
          <LinkBanner>
            <IconBox>
              {" "}
              <a href="https://www.facebook.com/moustafa.chaou">
                <RiFacebookCircleLine
                  size={42}
                  style={{ textDecoration: "none" }}
                />
              </a>
            </IconBox>
            <IconBox>
              {" "}
              <a href="mailto:turbotech.brussels@gmail.com" style={{ textDecoration: "none" }}>
                <FiMail size={40} />
              </a>
            </IconBox>
            <IconBox>
              {" "}
             
                <TVAButton onClick={handleClick} style={{ textDecoration: "none" }}>{buttonText}</TVAButton>
          
            </IconBox>
          </LinkBanner>
        </StyledCol>{" "}
      </DarkRow>
    </StyledContainer>
  )
}

export default Footer

const StyledContainer = styled.div`
  color: white;
  background-color: none;
  width: 100%;
  max-width: 100%; 
  margin: 0 auto;
  padding: 0 auto;
`

const StyledRow = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 3% 0;
  background-color: var(--orange);
  @media (max-width: 768px) {
    padding: 6% 0;
    margin: 6% 0;
  }
`

const DarkRow = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding-top: 3%;
  padding-bottom: 1%;
  background-color: var(--dark);
`

const StyledCol = styled.div`
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FooterText = styled.div`
display: flex;
  color: var(--dark);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  text-align: center;
  background-color: var(--orange);
`



export const FooterButton = styled(Link)`
display: flex;
  margin: 4% 2%;
  text-align: center;
  background-color: var(--orange);
  color: var(--dark);
  border-radius: 50px;
  text-decoration: none;
  color: var(--dark);

  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 600;
  border: 3px solid var(--dark);
  border-radius: 50px;
  white-space: nowrap;
  height: 40px;
  vertical-align: middle;
  padding: 0 8%;
  align-items: center;
  :hover {
    color: var(--white);
    border: 2px solid var(--white);
    transform: translateY(-2px);
  }

  h4 {
    font-size: 1.1rem;
    background: none;
    font-weight: 600;
    display: inline-flex;
    padding: 2%;
    margin-left: 4px;
    text-align: center;
    justify-content: center;
  }


`

const LinkBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--white) !important;
`
const TVAButton = styled.button`
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  border: 3px solid var(--white);
  border-radius: 50px;
  padding: 6px;
  white-space: nowrap;
  :hover {
    color: var(--orange);
    border: 3px solid var(--orange);
  }
`

const IconBox = styled.div`
  padding: 8%;

  a{
    :hover {
      color: var(--orange) !important;
    text-decoration: none;
    }

    :link{ color: inherit;
    text-decoration: none;}
   :visited{ color: inherit;
    text-decoration: none;}
   :focus{ color: inherit;
    text-decoration: none;}
   :active{ color: inherit;
    text-decoration: none;}
  }

`
