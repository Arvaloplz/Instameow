import React from 'react'
import styled from 'styled-components'

const defaultImage = 'https://i.imgur.com/dJa0Hpl.jpeg'

const Anchor = styled.a`
display : flex ;
flex-direction: column;
text-align: center;
text-decoration: none;
width: 75px;
`
const Image = styled.img`
  border: 1px solid #dddddd;
  box-shadow: 0px 10px 14px rgba(0,0,0,0.2) ;
  border-radius: 50% ;
  height: auto ;
  overflow: hidden;
  object-fit: cover; 
  height: 75px ;
  width: 75px ;
  `

export const Category = ({ cover = defaultImage, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
