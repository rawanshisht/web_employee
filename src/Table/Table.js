import React, { Component } from 'react';
import './Table.css';
import Employee from '../Employee/Employee';

class Table extends Component{
      
    render () {
  
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody id="table_data">
                    {this.props.data.map(emp =>{ 
                        return (
                                <Employee emp={emp} handleDelete={this.props.handleDelete}/>
                                    );
                                    })}
                    </tbody>
                </table>
            </div>
        ) ;
    }
}

export default Table;