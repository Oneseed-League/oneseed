import { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import players from '../data/players.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function StatsCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('All');
  const [sortKey, setSortKey] = useState('pointsPerGame');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredPlayers = useMemo(() => {
    return players.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.team.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPosition = positionFilter === 'All' || player.position === positionFilter;
      return matchesSearch && matchesPosition;
    });
  }, [searchTerm, positionFilter]);

  const sortedPlayers = useMemo(() => {
    const copy = [...filteredPlayers];
    copy.sort((a, b) => {
      if (sortAsc) return a[sortKey] - b[sortKey];
      else return b[sortKey] - a[sortKey];
    });
    return copy;
  }, [filteredPlayers, sortKey, sortAsc]);

  const chartData = {
    labels: sortedPlayers.map(p => p.name),
    datasets: [
      {
        label: 'Points Per Game',
        data: sortedPlayers.map(p => p.pointsPerGame),
        backgroundColor: 'rgba(245, 139, 0, 0.7)'
      },
      {
        label: 'Rebounds Per Game',
        data: sortedPlayers.map(p => p.reboundsPerGame),
        backgroundColor: 'rgba(27, 42, 58, 0.7)'
      },
      {
        label: 'Assists Per Game',
        data: sortedPlayers.map(p => p.assistsPerGame),
        backgroundColor: 'rgba(128, 128, 128, 0.7)'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Player Performance Chart', font: { size: 20 } }
    },
    scales: { y: { beginAtZero: true } }
  };

  const toggleSort = (key) => {
    if (key === sortKey) setSortAsc(!sortAsc);
    else {
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
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '15px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <select
        value={positionFilter}
        onChange={e => setPositionFilter(e.target.value)}
        style={{ marginBottom: '15px', padding: '6px', borderRadius: '5px' }}
      >
        <option value="All">All Positions</option>
        <option value="PG">PG</option>
        <option value="SG">SG</option>
        <option value="SF">SF</option>
        <option value="PF">PF</option>
        <option value="C">C</option>
      </select>

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
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '40px' }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
