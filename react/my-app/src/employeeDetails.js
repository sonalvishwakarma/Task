import React, { Component } from 'react';
import Employees from './employee.json';

class Employee extends Component {

	constructor() {
    super();
    this.state = {
    	input: '' ,
    	EmpData : null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFilterdata = this.handleFilterdata.bind(this);
  }

  handleChange (e) {
    this.setState({ input: e.target.value });
  }

  handleFilterdata (){
    console.log(this.state.input);

  	Employees.forEach(function(val) {
  		console.log(val,'val')
  	})

  }

  render() {
  this.state.EmpData = Employees;
	 return(
	  <div>
	     <form>
        <input type="text" placeholder="Search by city" value={this.state.input} onChange={ this.handleChange }/>
        <p>
          <button type="button" onClick={this.handleFilterdata} >Filter</button>
        </p>
      </form>      
	   	<table>
	     	{  this.state.EmpData.map(function(user, i)
		     	{
		      	return <tbody key={i}><tr>
             	<td>{user.first_name}</td>
             	<td>{user.last_name}</td>
             	<td>{user.email}</td>
             	<td>{user.gender}</td>
             	<td>{user.language}</td> 
             	<td>{user.city}</td>
             	<td>{user.ip_address}</td>
             	<td>{user.country}</td>
             	<td>{user.ph_no}</td>
	            <td>{user.company_name}</td>
             	<td>{user.doj}</td>
             	<td>{user.job_title}</td>
             	<td>{user.salary}</td>
            </tr></tbody>
		      })
	     	}
	   	</table>
	  </div> 
	 );
	}
}

export default Employee;