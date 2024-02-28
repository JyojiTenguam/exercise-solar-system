import React from 'react';

type PlanetCardProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div data-testid="planet-card">
      <h1>{planetName}</h1>
      <p data-testid="planet-name">{ planetName }</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;
