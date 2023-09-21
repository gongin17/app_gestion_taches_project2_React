import { useState  } from 'react';
import { FaPen } from 'react-icons/fa';


const Update = ({taskData ,handleUpdate ,closeModal}) => {
     
  const [nom, setNom] = useState("");
  const [priorite, setPriorite] = useState("");
  const [ordre, setOrdre] = useState("");
  const [etat, setEtat] = useState("");
  const [description, setDescription] = useState("");
 
     
  console.log("task data before" ,taskData)


  const handleSubmite=(e)=>{
    e.preventDefault()
    handleUpdate(e,{...taskData,nom ,description,priorite, ordre,etat})
    closeModal() 
   }


  return (
    <>
     <div>
      <input
            type="text"
            className="text-input"
            onChange={(e) => {
              setNom(e.target.value);
            }}
            placeholder="nom"
          /></div>
     
     <div><input
            type="text"
            className="text-input"
            onChange={(e) => {
              setPriorite(e.target.value);
            }}
            placeholder="Priorité"
          /></div>

     <div><input
            type="text"
            className="text-input"
            onChange={(e) => {
              setOrdre(e.target.value);
            }}
            placeholder="Ordre"
          /></div>

<div><input
            type="text"
            className="text-input"
            onChange={(e) => {
              setEtat(e.target.value);
            }}
            placeholder="Etat"
          /></div>
        

        <div><input
            type="text"
            className="text-input"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Descrition"
          /></div>

     <button className='card-button' onClick={e => handleSubmite(e)}
    ><FaPen style={{fontSize:'25px'}}  /> Mettre à jour
    </button>
    </>  
        
      
    
  )
}

export default Update