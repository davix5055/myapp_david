import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props){
   super(props)

    this.state={

      color:"blue"
      
   }
   this.cambiarColor = this.cambiarColor.bind(this);

   

  }
  cambiarColor(){

   if(this.state.color == "blue"){

    this.setState({color:"orange"})

   }
   
   else{

    this.setState({color:"blue"})


   }
    

   }
  
    render(){
    return(
      <div>

     <button onClick={this.cambiarColor} style={{backgroundColor: this.state.color}}>

      My button

    </button>


      </div>
    )
  }
}

export default App;
