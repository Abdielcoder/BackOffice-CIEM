import React, {useState, useEffect,Component} from 'react';
import { db } from '../firebase';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import PersonList from "./query.js";

const unique_id = uuid();
const date = new Date();

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginBottom: "18px"
  };
  

console.log(date);


const ocultarDiv = {

    display: 'none'
  
  };



export const MessagesForm = (props)=>{
    const handleInputState = e => {
        //console.log(e.target.value);
        //NAME OF INPUT VALUE OF INPUT
        const {name,value} = e.target;
        //console.log(name,value);
        //ADDING VALUES TO STATE
        setValues({...values,[name]: value});
             
    }

    const getMessageById = async (id) => {
        const doc = await db.collection('Messages').doc(id).get();
        //COPY TO INPUTS
        console.log(doc.data())
        setValues({...doc.data()});
    }

   

    useEffect(()=>{
        if(props.currentId === ''){
            
           
            setValues({ ...initialStateValues });
        }else{
            getMessageById(props.currentId);
           
        }
        
    },[props.currentId]);
    
    const initialStateValues = {
        asunto: '',
        uuid:unique_id,
        fecha:date,
        mensaje: ''
    };
    const driversx = {
        
       drivers:[]
    };
   
  const [setValues2] = useState(driversx);
  const [values, setValues] = useState(initialStateValues);


    //MANEGE FORM
    //SEE DE EVENT INFORMATION
    const handlesSubmit = (e) => {
        //e.preventDefault ELIMINATE REFRESHING PAGE
        e.preventDefault();
        //FUNTION SAVE EDIT
        props.addOrEditMessages(values);
        setValues({...initialStateValues })
    }
   
    return (
        
        <div className='container col-sm-12'>
    <form className='card card-body bg-secondary' onSubmit={handlesSubmit}>
    <div style={styles}>
    <h2>Please select your fav person {"\u2728"}</h2>
    <PersonList />
  </div>
    <div style={ocultarDiv} className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">subject</i>
            </div>
        
        <input type="text" className='form-control' placeholder='Asunto:' name='uuid'
         onChange={handleInputState} value={values.fecha}/>
        </div>
    <div style={ocultarDiv} className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">subject</i>
            </div>
        
        <input type="text" className='form-control' placeholder='Asunto:' name='uuid'
         onChange={handleInputState} value={values.unique_id}/>
        </div>
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">subject</i>
            </div>
        
        <input type="text" className='form-control' placeholder='Asunto:' name='asunto'
         onChange={handleInputState} value={values.asunto}/>
        </div>
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">message</i>
            </div>
    
        <input type="text" className='form-control' placeholder='Mensaje:' name='mensaje' onChange={handleInputState}
        value={values.mensaje}/>
       </div>
       <button className='btn btn-info btn-block'>
          {props.currentId === ''? 'Enviar': 'Actualizar'}
       </button>
    </form>
    </div>
    );
}

export default MessagesForm;