import React, {useState} from 'react';

export const MessagesForm = (props)=>{
    const handleInputState = e => {
        //console.log(e.target.value);
        //NAME OF INPUT VALUE OF INPUT
        const {name,value} = e.target;
        //console.log(name,value);
        //ADDING VALUES TO STATE
        setValues({...values,[name]: value});
       
        
    }
    const initialStateValues = {
        asunto: '',
        mensaje: ''
    };

  const [values, setValues] = useState(initialStateValues);


    //MANEGE FORM
    //SEE DE EVENT INFORMATION
    const handlesSubmit = e => {
        //e.preventDefault ELIMINATE REFRESHING PAGE
        e.preventDefault();
        //FUNTION SAVE EDIT
        props.addOrEditMessages(values);
        setValues({...initialStateValues})
    }

    return (
    <form className='card card-body bg-secondary' onSubmit={handlesSubmit}>
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
           Enviar
       </button>
    </form>
    );
}

export default MessagesForm;