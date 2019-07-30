import React from 'react';
import './imageList.css'
import Image from './image';


const imageList =({images}) => {

  const readytoUseImages = images.map((image)=> {
    return(
      <Image key={image.id} image={image} />
    )
  })

  return(
    <div className="image-list-container">
    {readytoUseImages}
    </div>
  )
}

export default imageList;
