import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {Card, Col, Row, Button} from "react-bootstrap"
import './App.css';

import bigSheldon from './images/tbbt_logo.png'

function App() {

  const [currentEpisode, setCurrentEpisode] = useState(getEpisode(1));

  function getEpisode(x){
    return fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt363395/bbt/episode-index/" + x)
      .then((response) => response.json())

  };

  const onClick = (index) => {
    setCurrentEpisode(getEpisode(1))
  }

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
            <Button onClick={() => onClick(0)}> s</Button>
            <Button onClick={() => onClick(1)}> s</Button>
          </Card.Body>
        </Card> 
      </div>
  )
}

export default App;

