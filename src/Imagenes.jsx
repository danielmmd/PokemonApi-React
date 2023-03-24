import React from 'react'
import { ImagenModul } from './ImagenModul';

export const Imagenes = ({image}) => {

   return (
        <div className='row'>
            {image.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className='card' style={{minWidth: "200px"}}>
                        <ImagenModul url={item.url}/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
   )
  
    
};
