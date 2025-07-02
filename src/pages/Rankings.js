export default function Rankings() {
  const rankings = [
    { team: "Team Ekin", points: 1200 },
    { team: "Team Shooter", points: 1120 },
    { team: "Team Trash Talker", points: 990 },
    { team: "Team Underdog", points: 860 }
  ];

  return (
    <div>
      <h2>Power Rankings</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #fff', textAlign: 'left' }}>Rank</th>
            <th style={{ borderBottom: '2px solid #fff', textAlign: 'left' }}>Team</th>
            <th style={{ borderBottom: '2px solid #fff', textAlign: 'left' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((team, index) => (
            <tr key={index}>
              <td style={{ padding: '8px 0' }}>{index + 1}</td>
              <td>{team.team}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Updated weekly with spicy commentary and stats!</p>
    </div>
  );
}
