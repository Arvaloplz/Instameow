import React from 'react'
import db from '../../../api/db.json'
import { PhotoCard } from '../PhotoCard'
const ListOfPhotoCards = () => {
  return (
    <div>
      <ul>
        <li>
          {db.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
        </li>
      </ul>
    </div>
  )
}

export default ListOfPhotoCards
