import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Driver = ({ driver }) => {
    return (
        <Col xl="12" className="py-2">
            <Card className="lg-4 p-3 rounded-lg">
                <Row>
                    <Col>
                        <Row className="d-flex align-items-center">
                            <Col xl="4" lg="5" md="6" sm="12" className="d-flex align-items-center justify-content-center">
                                <div className="points mx-3">#{driver.position}</div>
                                <img src={`./images/drivers/${driver.Driver.driverId}.png`} height="103" width="103" className="mx-3" />
                                <div className="d-flex align-items-center ms-3"><img src={`./images/numbers/${driver.Driver.permanentNumber}.png`} height="42" width="75" alt="Driver number" /></div>
                            </Col>
                            
                            <Col xl="8" lg="7" md="6" sm="12" className={`team ${driver.Constructors[0].constructorId} p-3`}>
                                <Card.Title className="d-flex align-items-center mb-1">
                                    <img src={`./images/flags/${driver.Driver.nationality}.jpg`} height="18" width="27" className="border border-dark rounded me-2"/> {driver.Driver.givenName} {driver.Driver.familyName}
                                </Card.Title>
                                <div>{driver.wins} Wins</div>
                                <div>{driver.Constructors[0].name}</div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md="2">
                        <Row className="points text-center d-flex justify-content-end">
                            <Col>
                                {driver.points} Points
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>                
        </Col>
    );
  }
   
  export default Driver;