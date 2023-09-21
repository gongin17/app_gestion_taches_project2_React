import { useState, useEffect } from "react";
import "../App.css";
import Search from "./search";
import CreateTask from "./createTask";
import { Tasks } from "./tasks";
import Modal from "./modal";
import Update from "./update";


const Home = () => {
  const [taskList, setTaskList] = useState([
    {
      id: "1353TETFH0",
      nom: "tacheA",
      ordre: 8,
      etat: "en cours",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
    {
      id: "1353TETFH1",
      nom: "tacheB",
      ordre: 14,
      etat: "en cours",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
    {
      id: "1353TETFH2",
      nom: "tacheC",
      ordre: 4,
      etat: "termine",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
    {
      id: "1353TETFH3",
      nom: "tacheD",
      ordre: 9,
      etat: "en cours",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
    {
      id: "1353TETFH4",
      nom: "tacheE",
      ordre: 3,
      etat: "en cours",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
    {
      id: "1353TETFH5",
      nom: "tacheF",
      ordre: 20,
      etat: "en cours",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
    {
      id: "1353TETFH6",
      nom: "tacheG",
      ordre: 2,
      etat: "en cours",
      priorite: "moyenne",
      description:"Commencez par rédiger une description de poste claire · les résultats attendus – Ce quon attend de la ou du titulaire du poste, ou les tâches  "
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState("");
  const [taskData, setTaskData] = useState("");
  const [filter, setFilter] = useState("");

  const closeModal = () => setShowModal(false);

  // filtre par nom
  const filterNames = (name) => {
    setFilter(name);
  };

  const namesHandler = () => {
    if (filter.length !== 0) {
      return taskList.filter((el) => el.nom.includes(filter));
    }
    return taskList;
  };

  // filtre par etat
  const filterStates = (st) => {
    setFilter(st);
  };

  const statesHandler = () => {
    if (filter.length !== 0) {
      return taskList.filter((el) => el.etat.includes(filter));
    }
    return taskList;
  };


// verifier que les champs non vide
  const areAllFieldsNotNull=(obj)=> {

    for (const key in obj) {
      if (obj[key] === null || obj[key] === "") {
        return false;
      }
    }
    return true;
  
  }

  const updateList = (e, updatedData) => {
    
    if(areAllFieldsNotNull(updatedData)){
    setTaskList((prevTaskList) =>
      prevTaskList.map((x) => (x.id === updatedData.id ? updatedData : x))
    )}
  };


  const addItem = (e, newItem) => {

    if(areAllFieldsNotNull(newItem)){
    setTaskList((prevTaskList) => [...prevTaskList, newItem]);
    }
  };



  const deleteItem = (e, id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((x) => x.id !== id));

    console.log("after delete data is ", taskList);
  };

  return (
   

    <div>
        <div style={{ margin:"50px"}} >
    <h1 >Gestion de tâches</h1>
  </div>
     
     <div>
        <div>
          <Modal show={showModal} closeModal={closeModal}>
          { contentModal==="create" ? <CreateTask addItem={addItem}  closeModal={closeModal} /> : null}
          { contentModal==="update" ? <Update taskData={taskData} handleUpdate={updateList}  closeModal={closeModal} /> : null}
          </Modal>
         

          <div>
            <div>
              <button className="card-button" 
              onClick={() => {
              setShowModal(true)
              setContentModal("create")
              }}>
              Créer une tâche  
              </button>
                <Search  filterNames={filterNames} filterStates={filterStates}/>   
            </div>

          </div>
        </div>
      </div>

      <div className="" >
              
          <Tasks  
          namesList={namesHandler()} 
          show={() => {
            setShowModal(true) 
            setContentModal("update") 
          }}
          setTaskData={setTaskData}
          handleDelete={deleteItem} />
         
      </div>
    </div>
  );
};

export default Home;
