import React, { Component } from 'react';
//import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";
import './mental.css';
import Kali from './kali.jpg';
//import Select from 'react-select';


////// pon el AMPER/////
//////nov 06 ///// enlarga EL BOTON Y EL LI TAG


class Mentalstate extends Component {

constructor(props) {
    super();
    this.state = {
      on: false,
      position:false,
      position2: false,
      position3: false,
      position4: false,
      position5: false,
      position6: false,
      position7: false,
      position8: false,
      position9: false,
      date: new Date()
    }
}

Hora() {
    this.setState({
        date: new Date()
    })
}

componentWillMount() {
    setInterval(() =>this.Hora(),1000);
}


toggle = () => {
    this.setState({
        on: !this.state.on
    })
}

Tego = () => {
    this.setState({
        position: !this.state.position
    })
}

Teller = () => {
    this.setState({
        position2: !this.state.position2
    })
}

Tally = () => {
    this.setState({
        position3: !this.state.position3
    })
}

Tenth = () => {
    this.setState({
        position4:!this.state.position4
    })
}

Tan = () => {
    this.setState({
        position5: !this.state.position5
    })
}

Trago = () => {
    this.setState({
        position6: !this.state.position6
    })
}

Tengo = () => {
    this.setState({
        position7: !this.state.position7
    })
}

Tamano = () => {
    this.setState({
        position8:!this.state.position8
    })
}

Titi = () => {
    this.setState({
        position9: !this.state.position9
    })
}





    render() {
        return (
            <div className="main">

             <h1 className="Thehead"> <i>Your Mental Health Resource Center! </i> </h1>

             <section className="Content"> Mental health affects millions of people around the world. <br />
             It's time we start talking about it  and overcoming these issues.<br />
             Click on ANY of the resources below to help you COMBAT these issues!!
              <br />
            </section>  

            
        
            <div className="tiempo">
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>

           

        
        <ul className="Dataform">

        
           <li className = "optionone">
               {this.state.on && <p className="texto"> Website: <a href="https://www.counseling.org/"> <br /> American Counseling Association </a> </p>}
              <button onClick = {this.toggle} className = "Cambio"> ANXIETY </button>
           </li>


           <li className = "optionone">  
               {this.state.position && <p className="texto">Website: <a href="https://www.mentalhealth.va.gov/"> <br />PTSD</a></p>}
               <button onClick = {this.Tego} className = "Cambio"> PTSD </button> 
           </li>

           <li className = "optionone">
               {this.state.position9 && <p className="texto">Website: <a href="https://www.cdc.gov/tobacco/campaign/tips/diseases/depression-anxiety.html"> <br />Help For Depression</a></p>}
               <button onClick={this.Titi} className = "Cambio"> DEPRESSION </button>
           </li>


           <li className = "optionone">
               {this.state.position2 && <p className="texto">Website: <a href="https://www.allaboutcounseling.com/"><br />Sexual Disorders</a></p>}
               <button onClick={this.Teller} className = "Cambio"> SEXUAL AND GENDER DISORDER </button>
           </li>


           <li className = "optionone">
               {this.state.position3 && <p className="texto">Website: <a href="https://www.nimh.nih.gov/"><br />Bipolar Resources</a></p>}
               <button onClick = {this.Tally} className = "Cambio"> BIPOLAR </button> 
           </li>


           <li className = "optionone">
               {this.state.position4 && <p className="texto">Website: <a href="https://www.cci.health.wa.gov.au/"><br /> Social Phobia Source</a></p>}
               <button onClick = {this.Tenth} className = "Cambio"> SOCIAL PHOBIA  </button>
           </li>


           <li className = "optionone">
               {this.state.position5 && <p className="texto">Website: <a href="https://iocdf.org/ocd-finding-help/"><br /> The OCD Foundation</a></p>}
               <button onClick = {this.Tan} className = "Cambio"> OBSESSIVE COMPULSIVE DISORDER </button>
           </li>


           <li className = "optionone">
               {this.state.position6 && <p className="texto">Website: <a href="https://www.webmd.com/schizophrenia/"><br />Schizophrenia Resources</a></p>}
               <button onClick={this.Trago} className = "Cambio"> SCHIZOPHRENIA </button>
           </li>


           <li className = "optionone">
               {this.state.position7 && <p className="texto">Website:<a href="https://www.nationaleatingdisorders.org/help-support"><br />National Eating Disorder Association</a></p>}
               <button onClick = {this.Tengo} className = "Cambio"> EATING DISORDER </button>
           </li>


           <li className = "optionone">
               {this.state.position8 && <p className="texto">Website: <a href="https://moodnetwork.org/resources"><br />Mood Disorder Network</a></p>}
               <button onClick={this.Tamano} className = "Cambio"> MOOD DISORDER </button>
           </li>
 
        </ul>
     
              
                
                </div>
        )
    }
}















export default Mentalstate