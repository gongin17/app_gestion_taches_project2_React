import { useState  } from 'react';
import { FaPen } from 'react-icons/fa';


const Update = ({id ,handleUpdate}) => {
     
  const [nom, setNom] = useState();
  const [priorite, setPriorite] = useState();
  const [ordre, setOrdre] = useState();
  const [etat, setEtat] = useState();


  const updatedData={id,nom , priorite, ordre ,etat}


    


  return (
   

      <>
      
     <div>
      <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setNom(e.target.value);
            }}
            placeholder="nom"
          /></div>
     
     <div><input
            type="text"
            className="form-control"
            onChange={(e) => {
              setPriorite(e.target.value);
            }}
            placeholder="title"
          /></div>

<div><input
            type="text"
            className="form-control"
            onChange={(e) => {
              setOrdre(e.target.value);
            }}
            placeholder="title"
          /></div>

<div><input
            type="text"
            className="form-control"
            onChange={(e) => {
              setEtat(e.target.value);
            }}
            placeholder="title"
          /></div>
     <button onClick={(e,)=>handleUpdate(e,updatedData)}
    ><FaPen style={{fontSize:'19px', color:'white' ,background: '#467e8d '}}  /></button>
    </>  
        
        

    
  )
}

export default Update