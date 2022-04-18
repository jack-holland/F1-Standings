import React from 'react'
import { useQuery } from 'react-query';
import Constructor from './Constructor';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const fetchConstructors = async () => {
  const res = await fetch(`https://ergast.com/api/f1/2022/constructorStandings.json`);
  return res.json();
}

const Constructors = () => {
  const { data, status } = useQuery('constructors', fetchConstructors);

  return (
    <div>
      {status === 'loading' && (
      <Card className="p-5 d-flex align-items-center">
        <div className="d-flex align-items-center">
          <Spinner animation="border" role="status" size="lg">
            <span className="visually-hidden">Loading...</span>
          </Spinner><span className="loading p-3">Loading Constructor Standings...</span>
        </div>
      </Card>
      )}

      {status === 'error' && (
      <Card className="p-5 d-flex align-items-center">
        <div className="d-flex align-items-center">
          <span className="loading p-3">Error fetching Constructor standings, please try again later.</span>
        </div>
      </Card>
      )}

      {status === 'success' && (
        <Row>
          { data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map(constructor => <Constructor key={constructor.Constructor.constructorId} constructor={constructor} />) }
        </Row>
      )}
    </div>
  );

}

export default Constructors;