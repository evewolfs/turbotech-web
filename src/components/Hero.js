import React from "react"
import styled from "styled-components"
import Video from "../assets/videos/turbotech-video2.mp4"
import Logo from "../assets/images/turbotech-logo2209.svg"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        {/* <video src={Video} type="video/mp4" autoPlay muted playsInLine /> */}
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <img src={Logo} />
          <HeroH1>Chauffage et Sanitaire</HeroH1>
          <DownArrow />
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  height: 40vh;
  position: relative;
  margin-top: 200px;
  padding-bottom: 20px;
  color: var(--white);

  :before {
    content: "";
    position: absolute;
    top: O;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
`
const HeroBg = styled.div`
  position: absolute;
  top: O;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.div`
  background: var(--dark);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -3;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: var(--white);
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.6rem, 6vw, 4rem);
  margin: 1rem;
  letter-spacing: 1px;
  font-weight: 400;
  padding-top: 1rem;
  text-transform: uppercase;
`

const DownArrow = styled.div`
  position: absolute;
  top: calc(50vh - 60px);
  left: calc(50% - 14px);
  width: 0;
  height: 30px;
  border: 2px solid;
  border-radius: 2px;
  animation: jumpInfinite 1.5s infinite;
  color: #fe9d2b;

  :after {
    content: " ";
    position: absolute;
    top: 14px;
    left: -8px;
    width: 16px;
    height: 16px;
    border-bottom: 4px solid;
    border-right: 4px solid;
    border-radius: 4px;
    transform: rotateZ(45deg);
  }

  @keyframes jumpInfinite {
    0% {
      margin-top: 0;
    }
    50% {
      margin-top: 20px;
    }
    100% {
      margin-top: 0;
    }
  }
`
