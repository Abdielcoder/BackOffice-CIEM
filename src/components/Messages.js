import React, {useEffect} from 'react'
import MessagesForm from './MessagesForm';
import {db} from '../firebase'


 const Messages = ()=>{

    const addOrEditMessages = async (messagesObject) => {
       //console.log(messagesObject);
       await db.collection('Messages').doc().set(messagesObject);
       console.log("Mensaje Enviado");
    }

    return <div>
        <MessagesForm addOrEditMessages={addOrEditMessages}/>
        <h1>Messages</h1>
    </div>
}
export default Messages;