import React, { useState } from 'react';

export const Form = ()=> {

 const [showForm, setShowForm] = useState(false);

  return(
   <>
   {!showForm && (   
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-3">
          <div className="card text-start rounded" >       
            <div className="card-body">
              <div className="mb-2">                             
                <label for="input1" className="form-label">Title</label>
                <input type="text" className="form-control" id="input1"/>                                  
              </div> 
              <div className="mb-2">             
                <label for="input2" className="form-label">Proyect</label>
                <input type="text" className="form-control" id="input2"/>                                  
              </div> 
              <div className="btn-group mb-1 mt-3 d-flex">
                <button type="button" className="btn btn-outline-primary">Create</button>
                <button onClick={() => setShowForm(true)} type="button" className="btn btn-outline-danger">Cancel</button>              
              </div>
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