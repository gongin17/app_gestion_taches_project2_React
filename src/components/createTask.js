

 import { useState , useEffect } from 'react';
 import { v4 as uuidv4 } from 'uuid';


 
const CreateTask = ({addItem,closeModal}) => {

  
  const [nom, setNom] = useState("");
  const [priorite, setPriorite] = useState("");
  const [descrition, setDescrition] = useState("");
  
  const [ordre, setOrdre] = useState("");
  const [etat, setEtat] = useState("");

 
 
       const handleSubmite=(e)=>{
        e.preventDefault()
        addItem(e,{id :uuidv4(),nom ,descrition,priorite, ordre,etat})
        
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
          />
      </div>
     
      <div>
        <input
            type="text"
            className="text-input"
            onChange={(e) => {
              setPriorite(e.target.value);
            }}
            placeholder="priorite"
          />
      </div>

     <div>
      <input
            type="text"
            className="text-input"
            onChange={(e) => {
              setDescrition(e.target.value);
            }}
            placeholder="Description"
          />
      </div>

       <div>
         <input
             type="text"
            className="text-input"
            onChange={(e) => {
              setOrdre(e.target.value);
            }}
            placeholder="ordre"
          />
        </div>

<      div>
         <input
            type="text"
            className="text-input"
            onChange={(e) => {
              setEtat(e.target.value);
            }}
            placeholder="Etat"
          />
          </div>

     
       <div>
         <button
          className="card-button"
          onClick={e => handleSubmite(e)}
        >
          Ajouter une tache
        </button>
      </div>

    </>
  )
}

export default CreateTask