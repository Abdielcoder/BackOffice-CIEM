import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    ciudades: []
  };

  componentDidMount() {
    axios.get('https://us-central1-ciem-58bd7.cloudfunctions.net/tadi/api/ciem')
    .then((response) =>{
        console.log(response);
        this.setState({ciudades: response.data})
    })
    .catch((error)=>{
        console.log(error);
    });
  }

  render() {
    return (
      <select>
        {this.state.ciudades.map(elemento => <option key={elemento.userId} value={elemento.userId}>{elemento.userName}</option>)}
      </select>
      
    );
  }
}
