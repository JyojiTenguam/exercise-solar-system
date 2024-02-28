import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      {
        missions.map((mission) => (
          <MissionsCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))
      }
    </div>
  );
}

export default Missions;
