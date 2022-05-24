import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Modal, Input, Button, Form, Segment, Message } from 'semantic-ui-react';


export default class Liste extends Component {
    constructor(props) {
        super(props);
        this.state={
            listem: [],
        }
    }

    componentDidMount() {
        axios.post('http://localhost:6161/admin/liste').then((res)=>{
            console.log(res.data.results);
           /* this.setState={
                listem : res.data.results,
            }*/
            this.setState({listem: res.data.results},()=>{
                console.log(this.state.listem)
            })
        }).catch((err)=>{
                console.log(err);
        })
    }
    
    render() {
        const {listem} = this.state;
        return (
            <div className="liste">
                <ul>
                    {listem.map((items) =>{
                        return (<li>{items.istasyon}nolu istasyon.</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
