import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
background: ${({primary}) => (primary ? 'transparent' : 'var(--orange)')};
white-space: nowrap;
padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
color: var(--white);
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
color: ${({secondary}) => (secondary ? 'var(--dark)' : 'var(--orange)')};

&:hover {
    background: ${({primary}) => (primary ? "var(--orange)" : "var(--white)")};
    transform: translateY(-2px);
    color: var(--white);
}
`
