import { useState, useEffect } from "react";
import "../App.css";
import Search from "./search";
import CreateTask from "./createTask";
import { Tasks } from "./tasks";
import Modal from "./modal";


const Card = () => {
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

  const searchItem = () => console.log("search");

  const updateList = (e, updatedData) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((x) => (x.id === updatedData.id ? updatedData : x))
    );
  };
  const addItem = (e, newItem) => {
    setTaskList((prevTaskList) => [...prevTaskList, newItem]);
  };

  const deleteItem = (e, id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((x) => x.id !== id));

    console.log("after delete data is ", taskList);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 className="">Application de gestion de tâches</h1>{" "}
      </div>


      <div>
        <div>
          <Modal show={showModal} closeModal={closeModal}>
            <CreateTask addItem={addItem}  closeModal={closeModal} />
          </Modal>
          <div style={{display:"flex" ,justifyContent:"space-around"}}>
            <div>
            
              <button className="card-button" onClick={() => setShowModal(true)}>
              Créer une tâche 
               
              </button>
            </div>
            <Search
              handleSearch={searchItem}
              filterNames={filterNames}
              filterStates={filterStates}
            />
          </div>
        </div>
      </div>

      <div className="main-section">
              
          <Tasks namesList={namesHandler()} show={() => setShowModal(true)} handleDelete={deleteItem} />
         
      </div>
    </div>
  );
};

export default Card;
