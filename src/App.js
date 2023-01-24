import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import Logo from './components/Logo'
// import { PhotoCard } from './components/PhotoCard'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
