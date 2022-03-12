import React, { useEffect, useState } from 'react';
import { formatTime } from '../utils/formatTime';
import { Form } from './Form';


export const Chronometer = ({el, deleteProject, updateProject})=> {

  const [timer, setTimer] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [chronoToEdit, setChronoToEdit] = useState(null); 

  let {id, title, project} = el
  
  useEffect(() => {
    let interval = null;

    if (timerStart){
      interval = setInterval (()=>{
      setTimer(prevTimer => prevTimer + 1)
      }, 1000)
    } 
    else {
      clearInterval(interval)   
    }

    return () => clearInterval(interval)
    
  }, [timerStart]); 

  return (
    <>
      {
        chronoToEdit ?
          <Form
          key={el.id}
          el={el}
          chronoToEdit={chronoToEdit}          
          updateProject={updateProject}
          setChronoToEdit={setChronoToEdit}                                        
          />    
        :
          <div className="container" key={id}>
            <div className="row justify-content-md-center mb-3">
              <div className="col-3">
                <div className="card text-start rounded" >       
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text text-secondary"><small>{project}</small></p>
                  <div className="text-center fs-4">
                  <h3 className="text-secondary">{formatTime(timer)}</h3>                    
                  </div>                             
                  <div className="text-end">
                    <button className="btn" onClick={()=> setChronoToEdit(el)}>              
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square me-2" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                      </svg>
                    </button> 
                    <button className="btn" onClick={()=> deleteProject(id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                  {!timerStart && (
                    <button onClick={() => setTimerStart(true)} type="button" className="btn btn-outline-success">Start</button>
                  )}
                  {timerStart && (
                    <button onClick={() => setTimerStart(false)} type="button" className="btn btn-outline-danger">Stop</button>
                  )}
                </div>        
              </div>      
            </div>
          </div>
      }
    </>
  )
} 