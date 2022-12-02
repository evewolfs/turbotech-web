import React, {useState} from "react"
import styled from "styled-components"
import { RiFacebookCircleLine } from "react-icons/ri"
import { FiMail } from "react-icons/fi"

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
          <FooterButton to='tel:0755324567'>Appelez-nous</FooterButton>
        </StyledCol>
      </StyledRow>
      <DarkRow>
        <StyledCol>
          <LinkBanner>
            <IconBox>
              {" "}
              <a href="https://www.facebook.com/moustafa.chaou">
                <RiFacebookCircleLine
                  size={46}
                  style={{ textDecoration: "none" }}
                />
              </a>
            </IconBox>
            <IconBox>
              {" "}
              <a href="mailto:turbotech.brussels@gmail.com" style={{ textDecoration: "none" }}>
                <FiMail size={42} />
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
  margin: 0;
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

const FooterButton = styled.button`
display: flex;
  margin: 4% 2%;
  padding: 0.5rem 0.75rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  min-width: 100px;
  background-color: var(--orange);
  color: var(--dark);
  text-transform: uppercase;
  border: 2px solid var(--dark);
  border-radius: 50px;
  :hover {
    color: var(--white);
    border: 2px solid var(--white);
    transform: translateY(-2px);
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
      color: var(--orange);
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
