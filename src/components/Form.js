import React, { useEffect, useState } from 'react';


export const Form = ({createProject, updateProject, setShowForm, chronoToEdit,  setChronoToEdit, el})=> {

 const [title, setTitle] = useState('');
 const [project, setProject] = useState(''); 

  const handleTitle= (e)=>{
    const valueTitle = e.target.value
    setTitle(valueTitle)
  }

  const handleProject= (e)=>{
    const valueProject = e.target.value
    setProject(valueProject)    
  }  

  const handleOnSubmit = (e) => {
    e.preventDefault()    
    if(chronoToEdit){ 
      updateProject(el.id, title, project)      
      handleFormCancel()  
      
    }else { 
      if(title, project){
        createProject(title, project) 
      }
      handleResetForm()                     
    }     
  }

  const handleFormCancel = ()=>{ 
    if(chronoToEdit){     
      setTitle(el.title)
      setProject(el.project)      
      setChronoToEdit(null)
    }
    setShowForm(false)    
    handleResetForm()    
  }

  const handleResetForm = ()=>{  
    setTitle('')
    setProject('')
  }

  useEffect(() => { 
    if(chronoToEdit){
      setTitle(el.title)
      setProject(el.project)
    } 
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
                    <label htmlFor="input2" className="form-label">Project</label>
                    <input type="text" className="form-control" id="input2" value={project} name="project" onChange={handleProject}/>                                  
                  </div>                 
                  <div className="btn-group mb-1 mt-3 d-flex">
                    {chronoToEdit ?                       
                      <button type="submit" className="btn btn-outline-primary">Update</button>                                           
                    :                    
                      <button type="submit" className="btn btn-outline-primary">Create</button>
                    }                   
                    <button onClick={handleFormCancel} type="button" className="btn btn-outline-danger">Cancel</button>                
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