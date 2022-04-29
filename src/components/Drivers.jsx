import React from 'react'
import { useQuery } from 'react-query';
import Driver from "./Driver";
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const fetchDrivers = async () => {
  const res = await fetch(`https://ergast.com/api/f1/2022/driverStandings.json`);
  return res.json();
}

const Drivers = () => {
  const { data, status } = useQuery('drivers', fetchDrivers);

  return (
    <div>
      {status === 'loading' && (
      <Card className="p-5 d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Spinner animation="border" role="status" size="lg">
            <span className="visually-hidden">Loading...</span>
          </Spinner><span className="loading p-3">Loading Driver Standings...</span>
        </div>
      </Card>
      )}

      {status === 'error' && (
      <Card className="p-5 d-flex align-items-center">
        <div className="d-flex align-items-center">
          <span className="loading p-3">Error fetching Driver standings, please try again later.</span>
        </div>
      </Card>
      )}

      {status === 'success' && (
        <Row>
          { data.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(driver => <Driver key={driver.Driver.driverId} driver={driver} />) }
        </Row>
      )} 
    </div>
  );
}

export default Drivers;