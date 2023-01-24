import React from 'react'
import styled from 'styled-components'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { fadeIn } from '../../styles/animations'
// const Ancore = styled.a` `

const Article = styled.article` 
  margin: 10px;
`

const Button = styled.button`
display:flex;
align-items: center;
padding-top:8px;
& svg {
  margin-right:4px;
}
`
const ImageWrapper = styled.div`
  ${fadeIn()}
  border-radius: 10px;
  display: block;
  height: 0;
  width: 100%;
  overflow : hidden;
  padding: 56.25% 0 0 0 ;
  position: relative;
`
const Image = styled.img` 
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  position: absolute ;
  object-fit:cover ;
  top:0;
  width: 100%;
`

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <>
      <Article>
        <a>
          <ImageWrapper>
            <Image src={src} />
          </ImageWrapper>
        </a>
      </Article>
      <Button><MdOutlineFavoriteBorder size='32px' />{likes} Likes!</Button>
    </>
  )
}
