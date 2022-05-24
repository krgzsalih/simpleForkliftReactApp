import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Modal, Input, Button, Form, Segment, Message } from 'semantic-ui-react';
 
export default class form extends Component {

    constructor(props) {
        super(props);
        this.state={
            birim:'',
            aciklama:'',
            oncelik:'',
            list:''
        }
    }

    onChange=(e,{name,value}) => {
        this.setState({[name]:value});
    }
    componentWillReceiveProps(props){
        this.setState({ulang:props.ulang})
    }
    cLng=(e)=>{
        this.state.changeLang(e.target.className.split(' ')[0]);
    }
    gonder=()=>{
        this.props.handleSentIt(this.state.birim, this.state.aciklama, this.state.oncelik);
    }

    listele=()=>{

    }
    render() {
        const {birim, aciklama, oncelik} = this.state;
        return (
            <div>                
                <div className="form">
                    <Form className="ui form">
                        <div className="field">
                            <label className="label">Birim Adı</label>
                            <Input value={birim} name='birim' placeholder="Birim Adı Giriniz"
                            onChange={this.onChange}/>
                        </div>
                        <div className="field">
                            <label className="label">Birim Açıklaması</label>
                            <Input value={aciklama} name='aciklama'  
                            placeholder="Birim Açıklaması Giriniz"
                            onChange={this.onChange}/>
                        </div>
                        <div className="field">
                            <label className="label">Birim Önceliği</label>
                            <Input value={oncelik} name="oncelik"  
                            placeholder="Birim Önceliği Giriniz"
                            onChange={this.onChange}/>
                        </div>
                        
                        <Button className="ui button" type="submit" onClick={this.gonder}>Kaydet</Button>
                        <br></br>
                        <Link to="/liste">
                            <Button className="ui button" type="submit" onClick={this.listele}>Listele</Button>
                        </Link>
                        
                    </Form>
                </div>
                
            </div>
        )
    }
}
