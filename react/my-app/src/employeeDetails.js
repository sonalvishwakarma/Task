import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';
import Employees from './employee.json';
import Perf from 'react-addons-perf';
window.Perf = Perf;

var searchInput;

class Employee extends Component {

	constructor() {
    super();
    this.state = {
    	input: '' ,
      sortInput : '',
    	empData : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    //this.handleSorting = this.handleSorting.bind(this);
    //this.handleSearching = this.handleSearching.bind(this)
  }

  handleChange (e) {
    this.setState({ input: e.target.value });
  }

  handleChanges (e) {
    this.setState({ sortInput: e.target.value });
  }

  /*handleSearching () {
    var searchInput = this.state.input;
    var EmpJson = this.state.empData;
      if(searchInput.length > 0){
        this.state.empData = EmpJson.filter(v => {
          return v.job_title.match(searchInput) || v.city.match(searchInput) || v.country.match(searchInput) || v.language.match(searchInput) || v.company_name.match(searchInput);
      });
    }
  }*/

  /*handleSorting () {
    var sortIn = this.state.sortInput;
    var first = 'first name' ;
    var dd = _.sortBy(this.state.empData, [function(o) { if(first === sortIn) return  o.first_name }]);
    this.setState({empData : dd})
  }*/

  render() {
    this.state.empData = Employees;
    var sortIn = this.state.sortInput;
    var first = 'first name' ;
    this.state.empData = _.sortBy(Employees, [function(o) { if(first === sortIn) return  o.first_name }]);

    searchInput = this.state.input;
    var EmpJson = this.state.empData;
      if(searchInput.length > 0){
        this.state.empData = EmpJson.filter(v => {
          return v.job_title.match(searchInput) || v.city.match(searchInput) || v.country.match(searchInput) || v.language.match(searchInput) || v.company_name.match(searchInput);
      });
    }
	  return(
	    <div>
        <div>
          <form>
            <input className="input" type="text" placeholder="Search by city/country/language/company name/job title" value={this.state.input} onChange={ this.handleChange }/>
            <button type="button" onClick={this.handleSearching}>search</button>
            <br></br><br></br>
            <input type="text" placeholder="sorting by first name" value={this.state.sortInput} onChange={ this.handleChanges }/>
            <button type="button" onClick={this.handleSorting}>sort</button>
          </form>
          <hr></hr>
        </div>
	   	  <table>
	     	{  this.state.empData.map(function(user, i)
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