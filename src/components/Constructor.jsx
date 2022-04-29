import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Constructor = ({ constructor }) => {
    return (
        <Col xl="6" className="py-2">
            <Card className="p-3 rounded-lg">
                <Row>
                    <Col>
                        <Row>
                            <Col xl="5" lg="4" md="6" className="d-flex justify-content-center gap-4">
                                <div className="d-flex align-items-center points">#{constructor.position}</div>
                                <div><img src={`./images/teams/${constructor.Constructor.constructorId}.png`} height="51" width="51" alt={`Logo of ${constructor.Constructor.name}`} /></div>
                            </Col>

                            <Col xl="7" lg="8" md="6" className={`team ${constructor.Constructor.constructorId}`}>
                                <Card.Title className="m-0">{constructor.Constructor.name}</Card.Title>
                                <div>{constructor.wins} wins </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col className="points d-flex align-items-center justify-content-end">
                                <div>{constructor.points} Points</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center">
                        <div><img src={`./images/cars/${constructor.Constructor.constructorId}.png`} className="img-fluid text-center" alt={`Car of ${constructor.Constructor.name}`} /></div>
                    </Col>
                </Row>
            </Card>
        </Col>
        );
    }
     
    export default Constructor;