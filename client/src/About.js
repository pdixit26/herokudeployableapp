import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This project is a simple page application using PERN stack. I have used</p>
        <ol>
          <li>React.js as frontend framework.</li>
          <li>Node-Express for database commnunication.</li>
          <li>REST APIs to connect frontend to the backend.</li>
          <li>PostgreSQL as database for table storage.</li>
        </ol>
        <ul>
        <li>Sourcecode of this project is available here: <a href="https://github.com/pdixit26/herokudeployableapp">https://github.com/pdixit26/herokudeployableapp </a></li>
        <li>This project is deployed on Heroku and hence using heroku postgres</li>
        <li>Please note: the cells in the table are editable. Click on any table cell to make it editable and press ENTER to save the changes in the cell. </li>
        <li>To see if data is inserted successfully please check Database tab and click on show database.</li>
         </ul>
      </div>
    );
  }
}
 
export default About;