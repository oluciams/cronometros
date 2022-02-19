import React, { useEffect, useState } from 'react';


export const Form = ({createProject, setShowForm, chronoToEdit, titleToEdit, projectToEdit, id})=> {

 const [title, setTitle] = useState('');
 const [project, setProject] = useState(''); 

  const handleTitle= (e)=>{
    const valueTitle = e.target.value
    setTitle(valueTitle)       
  }

  const handleProyect= (e)=>{
    const valueProyect = e.target.value
    setProject(valueProyect)    
  }  

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (title && project){      
      createProject(title, project)
    }
   
    setTitle('')
    setProject('')
  }

  useEffect(() => {
    setTitle(titleToEdit)
    setProject(projectToEdit)
    
  }, [chronoToEdit]);
  
  return(
    <>       
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-3">
            <div className="card text-start rounded" >       
              <div className="card-body">
                <form onSubmit={handleOnSubmit}>
                  <div className="mb-2"> 
                    <label htmlFor="input1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="input1" value={title} name="title" onChange={handleTitle}/>                                  
                  </div> 
                  <div className="mb-2">             
                    <label htmlFor="input2" className="form-label">Proyect</label>
                    <input type="text" className="form-control" id="input2" value={project} name="project" onChange={handleProyect}/>                                  
                  </div> 
                  <div className="btn-group mb-1 mt-3 d-flex">
                    <button type="submit" className="btn btn-outline-primary">Create</button>
                    <button onClick={() => setShowForm(false)} type="button" className="btn btn-outline-danger">Cancel</button>              
                  </div>
                </form>                            
              </div>
            </div>        
          </div>      
        </div>
      </div>
    </>     
  )
}