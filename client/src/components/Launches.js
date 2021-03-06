import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return <Fragment>
    <div className="display-4 my-3">Launches</div>
    <MissionKey />
    { data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch} />
    ))}</Fragment>
  }

export default Launches