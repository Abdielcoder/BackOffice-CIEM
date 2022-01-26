import React from 'react'
import MessagesForm from './MessagesForm';
import {db} from '../firebase'


 const Messages = ()=>{

    const addTask = () => {
        console.log('new task');
    }

    return <div>
        <MessagesForm addOrEdit={addTask}/>
        <h1>Messages</h1>
    </div>
}
export default Messages;