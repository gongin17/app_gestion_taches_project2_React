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
 
    <button  className=""  onClick={closeModal} >
         <FaWindowClose style={{fontSize:'30px', color:'black' }}  />
        
       </button>

</div>
    </>)
  )
}

export default Modal