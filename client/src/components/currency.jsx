import React, { Component } from 'react';
import '../assets/css/currency.css';

export default class Header extends Component{
    constructor(props){
        super(props);
        
        this.state = {apiResponse: ""};
      }
      callApi(){
        fetch(`https://exchange-server-app.herokuapp.com/cotizacion/`+ this.props.currency)
          .then(res => res.text())
          .then(res => this.setState({apiResponse: res}))
      }
      componentWillMount(){
        this.callApi();
        setInterval(() => {
          this.callApi(); 
        }, 5000);
      }
    render() {
        return(
            <div className="Currency-body">
                <p className="Currency-content"> {this.state.apiResponse}</p>
            </div>
        )
    }
}