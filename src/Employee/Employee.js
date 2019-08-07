import React, { Component } from 'react';
import './Employee.css';

const Employee = (props) => {
        return (
            <tr>
            <td>{props.emp.id}</td>
            <td>{props.emp.name}</td>
            <td>{props.emp.telephone}</td>
            <td>{props.emp.address}</td>
            <td>{props.emp.userName}</td>
            <td>{props.emp.password}</td>
            <td><button className="btn btn-block btn-danger" onClick={props.handleDelete(props.emp.id)}>Delete User <i className="fa fa-trash"></i> </button></td>
            </tr>
         )
}

// const Employee = (props) =>{

//     handleDelete = (id)=> (event) => {
//         const loadData = this.loadData;
//         const getData = this.getData;
//         event.preventDefault();
    
//         axios.delete(`http://employeesintern.azurewebsites.net/api/employees/${id}`)
//           .then(res => {
//             loadData();
//             getData(); 
//           })
//       }
//          return (
//             <tr>
//             <td>{props.emp.id}</td>
//             <td>{props.emp.name}</td>
//             <td>{props.emp.mobile}</td>
//             <td>{props.emp.address}</td>
//             <td>{props.emp.userName}</td>
//             <td>{props.emp.password}</td>
//             <td><button className="btn btn-block btn-danger" onClick={this.props.handleDelete(props.emp.id)}>Delete User <i className="fa fa-trash"></i> </button></td>
//             </tr>
//          )
    
// };
export default Employee;