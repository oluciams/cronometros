import React, { useState } from 'react';
import idGenerator from '../utils/idGenerator';


export const Form = ()=> {

 const [showForm, setShowForm] = useState(true);
 const [title, setTitle] = useState('');
 const [proyect, setProyect] = useState('');

 
 const createProyect= ()=>{ 

  let proyectData= {} 
  proyectData.id= idGenerator()
  proyectData.title= title
  proyectData.proyect=proyect
  console.log(proyectData)

  // return proyectData 
} 

  const handleTitle= (e)=>{
    const valueTitle = e.target.value
    setTitle(valueTitle) 
    console.log(title)   
  }

  const handleProyect= (e)=>{
    const valueProyect = e.target.value
    setProyect(valueProyect)
    console.log(proyect)
  }  

  const handleOnSubmit = (e) => {
  e.preventDefault()
  if (title && proyect){
    createProyect({title, proyect})
  }
 

  setTitle('')
  setProyect('')
  
  }

  return(
   <>
   {!showForm && (   
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
                  <input type="text" className="form-control" id="input2" value={proyect} name="proyect" onChange={handleProyect}/>                                  
                </div> 
                <div className="btn-group mb-1 mt-3 d-flex">
                  <button type="submit" className="btn btn-outline-primary">Create</button>
                  <button onClick={() => setShowForm(true)} type="button" className="btn btn-outline-danger">Cancel</button>              
                </div>
              </form>                            
            </div>
          </div>        
        </div>      
      </div>
    </div>
    )}
    {showForm && (
    <button onClick={() => setShowForm(false)} type="button" className="btn btn-outline-secondary btn-lg fw-bold mt-3"> + </button>
    )}
   </>     
  )
}