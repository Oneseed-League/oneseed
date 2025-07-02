import { useState, useMemo } from 'react';
import players from '../data/players.json';

export default function Players() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('pointsPerGame');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredPlayers = useMemo(() => {
    return players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sortedPlayers = useMemo(() => {
    const playersCopy = [...filteredPlayers];
    playersCopy.sort((a, b) => {
      if (sortAsc) {
        return a[sortKey] - b[sortKey];
      } else {
        return b[sortKey] - a[sortKey];
      }
    });
    return playersCopy;
  }, [filteredPlayers, sortKey, sortAsc]);

  const toggleSort = (key) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  };

  return (
    <div className="card">
      <h2>Advanced Player Stats & Rankings</h2>
      <input
        type="text"
        placeholder="Search by player or team..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '15px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleSort('name')} style={{ cursor: 'pointer' }}>Name {sortKey === 'name' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('team')} style={{ cursor: 'pointer' }}>Team {sortKey === 'team' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('position')} style={{ cursor: 'pointer' }}>Position {sortKey === 'position' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('gamesPlayed')} style={{ cursor: 'pointer' }}>GP {sortKey === 'gamesPlayed' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('minutesPerGame')} style={{ cursor: 'pointer' }}>MPG {sortKey === 'minutesPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('pointsPerGame')} style={{ cursor: 'pointer' }}>PPG {sortKey === 'pointsPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('reboundsPerGame')} style={{ cursor: 'pointer' }}>RPG {sortKey === 'reboundsPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('assistsPerGame')} style={{ cursor: 'pointer' }}>APG {sortKey === 'assistsPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('stealsPerGame')} style={{ cursor: 'pointer' }}>SPG {sortKey === 'stealsPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('blocksPerGame')} style={{ cursor: 'pointer' }}>BPG {sortKey === 'blocksPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('turnoversPerGame')} style={{ cursor: 'pointer' }}>TO {sortKey === 'turnoversPerGame' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('fieldGoalPercentage')} style={{ cursor: 'pointer' }}>FG% {sortKey === 'fieldGoalPercentage' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('threePointPercentage')} style={{ cursor: 'pointer' }}>3P% {sortKey === 'threePointPercentage' ? (sortAsc ? '▲' : '▼') : ''}</th>
            <th onClick={() => toggleSort('freeThrowPercentage')} style={{ cursor: 'pointer' }}>FT% {sortKey === 'freeThrowPercentage' ? (sortAsc ? '▲' : '▼') : ''}</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.position}</td>
              <td>{player.gamesPlayed}</td>
              <td>{player.minutesPerGame}</td>
              <td>{player.pointsPerGame}</td>
              <td>{player.reboundsPerGame}</td>
              <td>{player.assistsPerGame}</td>
              <td>{player.stealsPerGame}</td>
              <td>{player.blocksPerGame}</td>
              <td>{player.turnoversPerGame}</td>
              <td>{(player.fieldGoalPercentage * 100).toFixed(1)}%</td>
              <td>{(player.threePointPercentage * 100).toFixed(1)}%</td>
              <td>{(player.freeThrowPercentage * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
