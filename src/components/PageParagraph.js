import React from 'react'
import styled from 'styled-components';

const PageParagraph = () => {
  return (
   <CardP>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aspernatur magnam animi ipsa autem fuga sapiente recusandae officiis incidunt voluptatem quae officia nesciunt fugit molestias dolorem architecto maiores libero dolor numquam suscipit, sequi itaque impedit distinctio? Ea impedit sed laborum veniam corrupti facere quos similique, est voluptatem culpa quisquam nihil ducimus sequi, dolorum ipsum neque nisi aperiam. Harum, facilis omnis!
   </CardP>
  )
}

export default PageParagraph

const CardP = styled.div`
color: var(--white);
padding-top: 2%;
font-size:1.6rem;
font-weight: 300;
padding-bottom: 4%;
text-align: center;
line-height: 2.4rem;
text-align: justify;
text-justify: inter-word;
padding: 2% 16%;

 
`