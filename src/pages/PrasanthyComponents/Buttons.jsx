import React from 'react';
import data from './Projects.json';
import './styleButton.css';
import ButtonToggle from './ButtonToggle';


const Buttons = ({selectedCategory,
  selectCategory,setList}) => 
   (
    <div>
    <div className="projectbar">
    <p><h4>PROJECTS</h4></p>
    <p><h5>Welcome to the Project Library. You can use the filters on the left to help you 
    search for specific projects.</h5></p>
    </div>
    <div className='searchBar-wrap'>
    
        
      <ButtonToggle
        options={data.ButtonsList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
        
    <div className="buttoncontainer">


    <button type="submit" className="sort"
     onClick={()=>setList(data.ProjectList.slice(10))}>
    5
    </button>
    <button type="submit" className="sort"
    onClick={()=>setList(data.ProjectList.slice(5))}>
    10
    </button>
    <button type="submit" className="sort"
    onClick={()=>setList(data.ProjectList)}>
    All
    </button>
</div>
    


      
    </div>
    </div>
  );


export default Buttons;