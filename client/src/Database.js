import React, { Component } from "react";
import {Button} from 'reactstrap';
import Table1 from './Table1';

 
class Database extends Component {
  constructor(){
    super();
    this.state ={rows:[]}
  }

  showDB(event){
    console.log("in show DB");    var that = this;
    var request = new Request('/api/rows',{
      method: 'GET',
      headers: new Headers({ 'Content-Type':'application/json'})
    });
    fetch(request)
      .then(function(respose){
        respose.json()
        .then(function(data){
          that.setState({rows:data})
          console.log(data);
        })
      })

  }
  render() {
      return (
      <div>
      <Button color="success" onClick={this.showDB.bind(this)}> Show Database </Button>
      <br/>
      <br/>
       <Table1 data={this.state.rows}/>
      
      </div>
    );
  }
}
 
export default Database;