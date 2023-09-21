import React from 'react'
import '../App.css'
import {  FaWindowClose} from 'react-icons/fa'; 




const Modal = ({show ,closeModal ,children}) => {
  return (
 show &&  (<>
          <div
        className={`modal ${show ? "showModal" :""}`}
        
       ></div>


<div className={`modal-content ${show ? "showContent" :""}`}>



{children}
 
    <button  className='card-button'  onClick={closeModal} >
         <FaWindowClose style={{fontSize:'23px' }}  />
          Annuler
       </button>

</div>
    </>)
  )
}

export default Modal