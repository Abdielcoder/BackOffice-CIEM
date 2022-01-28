import logo from './logo.svg';
import './App.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Messages from './components/Messages';
import MessagesForm from './components/MessagesForm';

function App() {
  return (
    
    <div className='container p-4'>
      <div className='row'>
       
        <Messages/>
      </div>
     <ToastContainer
      className='black-background'
      bodyClassName= "grow-font-size"
      progressClassName= 'fancy-progress-bar'
     />

    </div>
 

  );
}

export default App;
