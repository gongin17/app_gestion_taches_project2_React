import React from 'react'
import {  FaMinusCircle} from 'react-icons/fa';



const Delete = ({id,handleDelete}) => {


      


  return (
    <>
     <button className='card-button' onClick={(e)=>handleDelete(e,id)}>
     Supprimer</button>
    </>
  )
}

export default Delete