import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <>
      <div data-testid="solar-system" />
      <Title headline="Planetas" />
      {
        Planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))
      }
    </>
  );
}

export default SolarSystem;
