import React from 'react'
import { useState, useEffect } from 'react'

export const ImagenModul = ({url}) => {

    const urele = url;

    const [controlimg, setcontrolimg] = useState([]);

    const ControlFetch = (ur) => {
    console.log(url)
    fetch(ur)
    .then(resp => resp.json())
    .then(data => {
        setcontrolimg(data.sprites)
        console.log(data.sprites.back_default)
    })
    
}

    useEffect(() => {

        ControlFetch(urele)
        
    }, [])
        
  return (
    <>
    <img src={controlimg.back_default}></img>
    </>
  )
}
