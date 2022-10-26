import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
background: ${({primary}) => (primary ? 'transparent' : '#FE9D2B')};
white-space: nowrap;
padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
color: #fff;
font-size: ${({big}) => (big ? '20px' : '16px')};
outline: none;
border: 1px solid;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius: ${({round}) => (round ? '50px' : 'none')};
font-family: "Roboto Condensed";
text-transform: uppercase;
font-size: 1.2rem;
font-weight: 400;
color: ${({secondary}) => (secondary ? '#1C1C1C' : '#FE9D2B')};

&:hover {
    background: ${({primary}) => (primary ? "#FE9D2B" : "##FFFFFF")};
    transform: translateY(-2px);
    color: white;
}
`