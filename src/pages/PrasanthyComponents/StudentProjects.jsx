import React from 'react';
import {useEffect,useState} from 'react';
import data from './Projects.json';
import Card from './Card'
import Buttons from './Buttons' ; 
import FilterSection from './FilterSection';
import './styleStudentProjects.css';

import EmptyView from './EmptyView'
import BackToTopButton from './BackToTopButton';
import NavBar from'./NavBar'
import Footer from './Footer';













const StudentProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);


  const [list, setList] = useState(data.ProjectList);
  const [resultsFound, setResultsFound] = useState(true);


const[projects,setProjects]=useState(data.ActivityType); 

const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  
  const handleChangeChecked=id=>{
  const projectsStateList = projects;
  const changeCheckedProjects=projectsStateList.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjects(changeCheckedProjects);

  };


const[projectsS,setProjectsS]=useState(data.Subscription)
  const handleChangeCheckedS=id=>{
  const projectsStateListS = projectsS;
  const changeCheckedProjectsS=projectsStateListS.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjectsS(changeCheckedProjectsS);
};


const[projectsYL,setProjectsYL]=useState(data.YearLevel)
  const handleChangeCheckedYL=id=>{
  const projectsStateListYL = projectsYL;
  const changeCheckedProjectsYL=projectsStateListYL.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjectsYL(changeCheckedProjectsYL);
};



const[projectsSM,setProjectsSM]=useState(data.SubjectMatter)
  const handleChangeCheckedSM=id=>{
  const projectsStateListSM = projectsSM;
  const changeCheckedProjectsSM=projectsStateListSM.map(item=>item.id===id?
  {...item,checked:!item.checked}:item);
  setProjectsSM(changeCheckedProjectsSM);
};



const applyFilters=()=>{
  
let updatedList=data.ProjectList;

if (selectedCategory) {
  updatedList = updatedList.filter(
    (item) => item.level === selectedCategory
  );
}


   const projectCheckedS=projectsS
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectCheckedS.length){
  updatedList=updatedList.filter((item)=>
  projectCheckedS.includes(item.suscription)    
  );
  }


  const projectChecked=projects
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectChecked.length){
  updatedList=updatedList.filter((item)=>
  projectChecked.includes(item.type)    
  );
  }



  const projectCheckedYL=projectsYL
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectCheckedYL.length){
  updatedList=updatedList.filter((item)=>
  projectCheckedYL.includes(item.yearlevel)    
  );
  }


  const projectCheckedSM=projectsSM
  .filter((item)=>item.checked)
  .map((item)=>item.label);
  
  if (projectCheckedSM.length){
  updatedList=updatedList.filter((item)=>
  projectCheckedSM.includes(item.subjectmatter)
    
  );
  }


setList(updatedList);
!updatedList.length ? setResultsFound(false) : setResultsFound(true);
};

useEffect(()=>{
applyFilters();
},
[selectedCategory,projects,projectsS,projectsYL,projectsSM]
);



  return  (
    <div>
    <div className="div">


    <div className="navbar">
   
   <NavBar/>
     </div>


    <div className="filter">

    <FilterSection

    projectsS={projectsS}
    changeCheckedS={handleChangeCheckedS}

    projects={projects}
    changeChecked={handleChangeChecked}

    projectsYL={projectsYL}
    changeCheckedYL={handleChangeCheckedYL}

    projectsSM={projectsSM}
    changeCheckedSM={handleChangeCheckedSM}/>

    </div>  
    

    

   
   

    <div className="list">

    <Buttons 
    
    selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
    setList={setList}
    
    />
    
    </div>

    <div className="listp" >
    
    {resultsFound ? <Card list={list} /> : <EmptyView />}
    
    </div>

   <div className="outer-box">
    <div className="footer">    
    <BackToTopButton/>
    </div>
    
    
    </div>
    
    

   </div>
   <div>
    <div className="footerone">
           <Footer/>
           </div>
           </div>
           </div>
  
    
    
  );
};
export default StudentProjects;


