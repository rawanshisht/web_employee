import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Form from './Form/Form';
import Table from './Table/Table';
import axios from 'axios';
import { Button, Row, Col } from 'reactstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        continue: false,
        showData: false,
        employees:[]
        };
    }
    componentDidMount() {
      this.loadData();
    }
  
    loadData = ()=>{
      axios.get(`http://employeesintern.azurewebsites.net/api/employees`)
      .then(res => {
        const employees = res.data;
        this.setState({ employees:employees });
      })
    }
    

    handleSubmit = (data) => {
     
      
      const loadData = this.loadData;

      delete(data.id);
  
      axios.post(`http://employeesintern.azurewebsites.net/api/employees`, data)
        .then(() => {
          loadData();


        })
    }
    handleDelete = (id) => (event) => {
      const loadData = this.loadData;

  
      axios.delete(`http://employeesintern.azurewebsites.net/api/employees/${id}`)
        .then(()=> {
          loadData();

        })
    }


    getData =()=>{
        this.setState({showData: true});      
    }

    handleClick =(username, password) => (event) => {
      const emp = this.state.employees;
      const o = emp.find((o) =>  o.userName === username && o.password === password );
      
      if(o===undefined){
        alert('Please enter a valid username and password');
      }
      else{
        this.setState({continue: true});
      }
      event.preventDefault();
    }

    handleEdit = (id, data) => {
      const loadData = this.loadData;

      axios.put(`http://employeesintern.azurewebsites.net/api/employees/${id}`,data)
      .then(function (response) {
        loadData();
      })
    }

    render() {
      let table = null;
      let output = null;
      if (this.state.continue=== false){
        output = <Login handleClick={this.handleClick}/>
      }
      else{
        output = <Form getData={this.getData} handleSubmit={this.handleSubmit} handleEdit={this.handleEdit}/>
      }
      if(this.state.showData===true){
        table = <Table data ={this.state.employees} handleDelete={this.handleDelete} />
      }
      return (
        <div className="App">
        {output}
        {table}
      </div>
    );
  }
}

export default App;
