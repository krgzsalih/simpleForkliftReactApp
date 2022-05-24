import './App.css';
import Form from './Form';
import Liste from './Liste';
import React, { Component } from 'react';
import { form } from './globals/globalFunctions';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      sended: false,
      loggedIn: false,
      visible:false,
      activePage:'Home',
      activeItem: 'home',
      list:''
    }
  }
  
  changeActive = (gelen,addit)=> {
    this.setState({activePage:gelen, addit:addit})
  };
  handlePageClick = (e, { name }) => this.setState({ activePage: name ,visible:!this.state.visible, addit:null});
  handleItemClick = (e, { name }) => this.setState({ activeItem: name ,visible:!this.state.visible, addit:null});

  handleSentIt=(birim, acikalama, oncelik)=> {
    form(birim, acikalama, oncelik, (gelen)=> {
      this.setState({sended: true});
    });
  }

  
  render() {
    const { activeItem, visible, activePage,loggedIn, addit } = this.state;
    return (
      <Router>
        <Switch>
          <div className="App">    

            <Route path="/" exact render={
              () =>(
                <header className="App-header">
                  <Form handleSentIt={this.handleSentIt}></Form>
                </header>
              )
            }>
            </Route>      
            
            <Route path='/liste' exact render={
              ()=>(
                  <Liste></Liste>
              )
            }></Route>                              
        
          </div>

        </Switch>
      </Router>
      
    )
  }
}
