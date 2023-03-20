import React, { useEffect } from 'react';
import {Card, Col, Row, Button} from "react-bootstrap"

function EpisodeList(props) {
    useEffect(() => {
      
    }, [])
  
    return (
      <Card className="Episode-List-Card">
        <Card.Header className="Card-Header">
            <Card.Title style={{fontSize:"20px"}}>Episode List</Card.Title>
        </Card.Header>
        <div className="episode-list" id="episode-list">
            {
                <h4> {props.episodeIndex}</h4>
            }
    
        </div>
      </Card>
    )
  }
  
  export default EpisodeList;
  