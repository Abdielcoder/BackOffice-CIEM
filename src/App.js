import logo from './logo.svg';
import './App.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Messages from './components/Messages';
import MessagesForm from './components/MessagesForm';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar} from 'react-bootstrap'
import axios from 'axios';

function App() {
  return (
    <body className='color'>
      
   
    <div className='container col-sm-6'>
     <Navbar bg="navBackground" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          Zona de mensajes
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          
        </Navbar.Collapse>

      </Navbar>
      <div className="content">

      
      <div className='row'>
       
        <Messages/>
      </div>
     <ToastContainer
      className='black-background'
      bodyClassName= "grow-font-size"
      progressClassName= 'fancy-progress-bar'
     />

    </div>
    </div>
    </body>
  );
}

export default App;
