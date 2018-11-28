import React, { Component } from "react";
import {Button} from 'reactstrap';
 
class Database extends Component {
  constructor(){
    super();
    this.state ={data:[]}
  }

  showDB(event){
    console.log("in show DB");    var that = this;
    fetch('/api/rows')
      .then(function(respose){
        respose.json()
        .then(function(data){
          that.setState({data:data})
          console.log(data);
        })
      })

  }
  render() {
    let data = this.state.data;
    return (
      <div>
      <Button color="success" onClick={this.showDB.bind(this)}> Show Database </Button>
        <ul> {this.state.data.map(person => <li key={person.tableid}> {person.tableid},{person.devicetype},{person.c0r0},{person.c1r0},{person.c2r0},{person.c0r1},{person.c1r1},{person.c2r1},{person.c0r2},{person.c1r2},{person.c2r2}</li>)}</ul>
      </div>
    );
  }
}
 
export default Database;