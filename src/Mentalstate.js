import React, { Component } from 'react';
import './mental.css';
import Accordion from './Accordion';
import Intro from './Intro';
//import Kali from './kali.jpg';
//import Select from 'react-select';
//import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";


////// pon el AMPER/////
//////nov 06 ///// enlarga EL BOTON Y EL LI TAG


class Mentalstate extends Component {

    constructor(props) {
        super();
        this.state = {
            datos:[
                {
                Titulo: "ANXIETY",
                descrip: <a href="https://www.counseling.org/"> American Counseling Association </a>
                },

                {
                 Titulo: "PTSD",
                 descrip: <a href="https://www.mentalhealth.va.gov/"> <br />Mental Health Resource!</a>
                },

                {
                 Titulo: "DEPRESSION",
                 descrip:  <a href="https://www.cdc.gov/tobacco/campaign/tips/diseases/depression-anxiety.html"> <br />Help For Depression!</a>
                },

                {
                 Titulo: "SEXUAL AND GENDER DISORDER",
                 descrip:  <p className="texto">Website: <a href="https://www.allaboutcounseling.com/"><br />Sexual Disorders</a></p>
                },

                {
                 Titulo: "BIPOLAR",
                 descrip:   <p className="texto">Website: <a href="https://www.nimh.nih.gov/"><br />Bipolar Resources</a></p>
                },

                {
                 Titulo: "SOCIAL PHOBIA",
                 descrip:  <p className="texto">Website: <a href="https://www.cci.health.wa.gov.au/"><br /> Social Phobia Source</a></p>
                },

                {
                 Titulo: "SCHIZOPHRENIA",
                 descrip: <a href="https://www.webmd.com/schizophrenia/"><br />Schizophrenia Resources</a>
                },

                {
                 Titulo: "OBSESSIVE COMPULSIVE DISORDER",
                 descrip:<p><a href="https://iocdf.org/ocd-finding-help/"><br /> The OCD Foundation</a></p>
                },

                {
                 Titulo: "EATING DISORDER",
                 descrip:  <a href="https://www.nationaleatingdisorders.org/help-support"><br />National Eating Disorder Association</a>
                },

                {
                 Titulo: "MOOD DISORDER",
                 descrip: <a href="https://moodnetwork.org/resources"><br />Mood Disorder Network</a>
                },
            ]
        }    
    }

render() {
        return (
            <div>

               <Intro />
               <br />
                {this.state.datos.map((item, index)=>{
 return <Accordion Key={index} Titulo={item.Titulo} descrip={item.descrip} />
                })}
                
            </div>
        )


}

}

export default Mentalstate
