import React, { useState } from 'react'
import styled from 'styled-components'
import { Category } from '../Category'

import db from '../../../api/db.json'

const List = styled.ul`
display:flex;
overflow:scroll;
width: 100% ;
`
const Item = styled.li`
  padding: 0 8px;
`

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(db.categories)
  console.log(db)
  return (
    <>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))}
      </List>
    </>
  )
}
