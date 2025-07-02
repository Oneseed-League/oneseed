import matchupsData from '../data/matchups.json';

export default function Matchups() {
  return (
    <div className="card">
      <h2>Haftalık Karşılaşmalar & Analiz</h2>
      {matchupsData.map((weekData, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <h3>{weekData.week}</h3>
          <table>
            <thead>
              <tr>
                <th>Takım A</th>
                <th>Skor</th>
                <th>Takım B</th>
                <th>Skor</th>
                <th>Galip</th>
                <th>Notlar</th>
              </tr>
            </thead>
            <tbody>
              {weekData.matchups.map((match, idx) => (
                <tr key={idx}>
                  <td>{match.teamA}</td>
                  <td>{match.scoreA}</td>
                  <td>{match.teamB}</td>
                  <td>{match.scoreB}</td>
                  <td>{match.winner}</td>
                  <td>{match.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
