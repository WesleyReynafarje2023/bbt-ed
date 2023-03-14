import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {Card, Col, Row} from "react-bootstrap"
import './App.css';

import bigSheldon from './images/tbbt_logo.png'

//https://www.pluralsight.com/guides/how-to-set-up-a-react-bootstrap-app

function App() {

  const [data, setdata] = useState(fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt363395/bbt/episode-index/0"));

  useEffect(() => {
    fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt363395/bbt/episode-index/0")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return(
      <div className="App">
        <Card className="Card">
          <Card.Header className="Card-Header">
            <Row>
              <Col>
                <Card.Title style={{fontSize:"30px", marginTop:20 }}>The Big Bang Theory</Card.Title>
                <Card.Title style={{fontSize:"20px"}}>Episode Directory</Card.Title>
              </Col>
              <Col>
                <img src={bigSheldon} alt="TBBT Logo" width="300"/>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body className="Card-Body">
            s
          </Card.Body>
        </Card> 
      </div>
  )
}

export default App;

