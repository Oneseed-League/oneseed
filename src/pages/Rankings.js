import { useState, useMemo } from 'react';

const teams = [
  {
    name: 'Team Ekin',
    wins: 8,
    losses: 2,
    pointsFor: 10230,
    pointsAgainst: 9850,
    streak: 'W3'
  },
  {
    name: 'Team Shooter',
    wins: 7,
    losses: 3,
    pointsFor: 9980,
    pointsAgainst: 10100,
    streak: 'L1'
  },
  {
    name: 'Team Trash Talker',
    wins: 6,
    losses: 4,
    pointsFor: 9500,
    pointsAgainst: 9450,
    streak: 'W2'
  },
  {
    name: 'Team Underdog',
    wins: 4,
    losses: 6,
    pointsFor: 8800,
    pointsAgainst: 9200,
    streak: 'L2'
  }
];

export default function Rankings() {
  const [sortKey, setSortKey] = useState('wins');
  const [sortAsc, setSortAsc] = useState(false);

  const sortedTeams = useMemo(() => {
    const sorted = [...teams];
    sorted.sort((a, b) => {
      if (sortAsc) return a[sortKey] - b[sortKey];
      else return b[sortKey] - a[sortKey];
    });
    return sorted;
  }, [sortKey, sortAsc]);

  const toggleSort = (key) => {
    if (key === sortKey) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <div className="card">
      <h2>Lig Sıralaması & Takımlar</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSort('name')} style={{ cursor: 'pointer' }}>
              Takım {sortKey === 'name' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => toggleSort('wins')} style={{ cursor: 'pointer' }}>
              Galibiyet {sortKey === 'wins' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => toggleSort('losses')} style={{ cursor: 'pointer' }}>
              Mağlubiyet {sortKey === 'losses' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => toggleSort('pointsFor')} style={{ cursor: 'pointer' }}>
              Attığı Puan {sortKey === 'pointsFor' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th onClick={() => toggleSort('pointsAgainst')} style={{ cursor: 'pointer' }}>
              Yediği Puan {sortKey === 'pointsAgainst' ? (sortAsc ? '▲' : '▼') : ''}
            </th>
            <th>Seri</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, idx) => (
            <tr key={idx}>
              <td>{team.name}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.pointsFor}</td>
              <td>{team.pointsAgainst}</td>
              <td>{team.streak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
