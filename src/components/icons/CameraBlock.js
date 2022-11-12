import React from 'react'
import styled from 'styled-components'
import {BsCameraReels} from 'react-icons/bs'
import { Col, Row } from 'react-bootstrap'

const CameraBlock = (props) => {
  return (
    <IconRow>
<Col xs lg={1}>
    <BsCameraReels size={70} color={'#FF9600'}/>
</Col>
<Col xs lg={4}>
    <IconTitle>{props.icontitle}</IconTitle>
</Col>
<Col xs lg={3}></Col>

    </IconRow>
  )
}

export default CameraBlock

const IconRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  color: var(--white);
  padding: 2% 0;
  align-items: center;
`

const IconTitle = styled.div`
text-transform: uppercase;
color: var(--white);
font-size: 1rem;
`