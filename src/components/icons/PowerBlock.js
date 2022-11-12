import React from 'react'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'
import {RiWindyFill} from 'react-icons/ri'

const PowerBlock = (props) => {
  return (
    <IconRow>
<Col xs lg={1}>
  <RiWindyFill size={70} color={'#FF9600'}/> 
</Col>
<Col xs lg={4}>
    <IconTitle>Débouchage haute pression</IconTitle>
</Col>
<Col xs lg={3}></Col>

    </IconRow>
  )
}

export default PowerBlock

const IconRow = styled(Row)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  color: var(--white);
  padding: 2%;
  align-items: center;
`

const IconTitle = styled.div`
text-transform: uppercase;
color: var(--white);
font-size: 1rem;
`