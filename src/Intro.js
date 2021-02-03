import React, { Component} from 'react';

class Intro extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }


    ElTiempo() {
      this.setState({
          date: new Date()
      })
    }

    componentWillMount() {
        setInterval( ()=> this.ElTiempo(), 1000);
    }
    
    
    render() {
        return (
            <div>
            <div className="main">

             <h1 className="Thehead"> <i>Your Mental Health Resource Center! </i> </h1>

             <section className="Content"> Mental health affects millions of people around the world. <br />
             It's time we start talking about it  and overcoming these issues.<br />
             Click on ANY of the resources below to help you COMBAT these issues!!
              <br />

              <h2>{this.state.date.toLocaleTimeString()}</h2>
            </section>  

            
        
            </div>
          </div>
        )
    }
}






export default Intro