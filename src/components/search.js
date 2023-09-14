import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import '../App.css'


const Search = ({handleSearch,filterNames}) => {

  const [filter, setFilter] = useState("");
   

  const filterHandler = (e) => {
		const name = e.target.value;
		setFilter(name);
		filterNames(name);
	};

  return (
   

<div className="search">

<div>
 
<button className="search-btn">
   <FaSearch style={{fontSize:'19px', color:'darkgrey' ,background: '#fff '}}  />
 </button>

<input
   className="search-box"
  type="text"
  placeholder="filter by name"
  value={filter}
  onChange={filterHandler}
 ></input>
 </div>


    </div>
  )
}

export default Search