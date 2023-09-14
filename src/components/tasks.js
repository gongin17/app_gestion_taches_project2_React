import React from 'react'
import Delete from './delete';
import Update from './update';

export const Tasks = ({namesList ,show,handleDelete}) => {
  return (
    <div>  {namesList?.map((task) => {
        return (
          <div className="card" key={task.id}>
            <h2 className="card-title">Nom :{task.nom}</h2>
            <p className="card-description"> Ordre : {task.ordre}</p>
            <p className="card-description">Priorite : {task.priorite}</p>
            <p className="card-description">Etat : {task.etat}</p>
            <p className="card-description">Description : {task.description}</p>
            <div className="card-buttons">
            <div>
               <Delete id={task.id} handleDelete={handleDelete} />
              </div>
              <button className="card-button" onClick={show}>
                Mettre à jour
            </button>
            
            </div>
             
          </div>
        );
      })}</div>
  )
}
