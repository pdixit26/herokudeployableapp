import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p>This project is a simple web application using PERN stack. I have used</p>
        <ul>
          <li>React.js as frontend framework.</li>
          <li>Node-Express for server-client communication.</li>
          <li>REST APIs to connect frontend to the backend.</li>
          <li>PostgreSQL as database for table storage.</li>
          <li>Heroku for deploying my web application to the cloud.</li>
        </ul>

        <h3>Please Note</h3>
        <ul>
        <li>Sourcecode of this project is available here: <a href="https://github.com/pdixit26/herokudeployableapp">https://github.com/pdixit26/herokudeployableapp </a></li>
        <li>The cells in the table are editable. Click on any table cell to make it editable and press ENTER to save the changes in the cell. </li>
        <li>The value for the cells are set as NOT NULL and numeric. Hence empty cell or value other than numeric will not be accepted.</li>
        <li>To see if data is inserted successfully please check Database tab and click on show database.</li>
        </ul>
      </div>
    );
  }
}
 
export default About;