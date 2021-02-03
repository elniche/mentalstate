import React, {Component} from 'react';
import './mental.css';
import Intro from './Intro';
import Button from 'react-bootstrap/Button';


class Accordion extends Component {

    constructor() {
        super();
        this.state = {
            showinfo: false,
            date: new Date()
        }
    }

    TegoCalde=()=> {
        this.setState({
            showinfo: !this.state.showinfo
        })
    }


    Hora() {
    this.setState({
        date: new Date()
    })
}

componentWillMount() {
    setInterval(() =>this.Hora(),1000);
}
    
    render(props) {

    const {Titulo,descrip}=this.props;
    
    return (

        

    <div className="single-accord">

   

       <div className="tabb" onClick = {this.TegoCalde}>
       <p>{Titulo}</p>
       <i className = "fas fa-plus"></i>
       </div>



       <div className= {this.state.showinfo ? 'showContent content': 'content'}>
       <p>{descrip}</p>
       </div>

    </div>

     



    )
    
    
    
    
     }



}



export default Accordion