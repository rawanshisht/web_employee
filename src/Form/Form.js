import React, { Component } from 'react';
import './Form.css';
import { Button, Col, Row, Container } from 'reactstrap';

class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {
                id: '',
                name:'',
                mobile:'',
                telephone:'',
                address:'',
                userName:'',
                password:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    reset(event){
        event.preventDefault();
        if(event.target.name==="submit"){
            this.props.handleSubmit(this.state);
            
        }
        if(event.target.name==="edit"){
            this.props.handleEdit(this.state.id,this.state);
        }
        this.setState(
                    { 
                        id: '',
                        name:'',
                        mobile:'',
                        telephone:'',
                        address:'',
                        userName:'',
                        password:''
                    }
                    );
    }

    render () {
  
        return (
            <div>
            <Container>
         <Row>
         <Col md="12">
            <h3 className="text-center display-1" id="title">Registeration Form</h3>
         </Col>
         </Row>
    <br/>
    <br/>
        <Row>
            <Col md="6">
                <h3>ID</h3>
            </Col>
            <Col md="1">
                <input name="id" id="id" type="text" size="20" maxLength="20" value={this.state.id} onChange={this.handleChange}/>
            </Col>
        </Row>
<br/>
<br/>
    <Row>
        <Col md="6">
            <h3>Name</h3>
        </Col>
        <Col md="1">
            <input name="name"id="name" type="text" size="20" maxLength="20" value={this.state.name} onChange={this.handleChange} />
        </Col>
    </Row>
<br/>
<br/>
    <Row>
        <Col md="6">
            <h3>Telephone</h3>
        </Col>
        <Col md="1">
            <input name="telephone"id="telephone" type="text" size="20" maxLength="20" value={this.state.telephone} onChange={this.handleChange}/>
        </Col>
    </Row>
<br/>
<br/>
    <Row>
        <Col md="6">
            <h3>Address</h3>
        </Col>
        <Col md="1">
            <input name="address" id="address" type="text" size="20" maxLength="20" value={this.state.address} onChange={this.handleChange}/>
        </Col>
    </Row>
<br/>
<br/>
    <Row>
        <Col md="6">
            <h3>Username</h3>
        </Col>
        <Col md="1">
            <input name="userName"id="userName" type="text" size="20" maxLength="20" value={this.state.userName} onChange={this.handleChange}/>
        </Col>
    </Row>
<br/>
<br/>
    <Row>
        <Col md="6">
            <h3>Password</h3>
        </Col>
        <Col md="1">
            <input name="password"id="password" type="password" size="20" maxLength="20" value={this.state.password} onChange={this.handleChange}/>
        </Col>
    </Row>
<br/>
<br/>
<Row>
            <Col md="4">
                <button name="submit" className="btn btn-block btn-success" onClick={this.reset}>Add User</button>
            </Col>
            <Col md="4">
              <button name="edit" className="btn btn-block btn-primary" onClick={this.reset}>Edit User</button>
            </Col>
            <Col md="4">
              <button id="getData" className="btn btn-block btn-primary" onClick={this.props.getData}>Get Data</button>
            </Col>

</Row>
</Container>
</div>
     ) ;
    }
    }

export default Form;