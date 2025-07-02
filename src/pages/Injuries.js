const injuries = [
  {
    player: "LeBron James",
    team: "LAL",
    status: "Out",
    expectedReturn: "2025-08-15",
    notes: "Ankle sprain, rehabbing"
  },
  {
    player: "Stephen Curry",
    team: "GSW",
    status: "Questionable",
    expectedReturn: "2025-08-10",
    notes: "Mild hamstring tightness"
  },
  {
    player: "Giannis Antetokounmpo",
    team: "MIL",
    status: "Day-to-Day",
    expectedReturn: "N/A",
    notes: "Resting for minor fatigue"
  }
];

export default function Injuries() {
  return (
    <div className="card">
      <h2>Sakatlık ve Durum Güncellemeleri</h2>
      <table>
        <thead>
          <tr>
            <th>Oyuncu</th>
            <th>Takım</th>
            <th>Durum</th>
            <th>Tahmini Dönüş</th>
            <th>Notlar</th>
          </tr>
        </thead>
        <tbody>
          {injuries.map((item, idx) => (
            <tr key={idx}>
              <td>{item.player}</td>
              <td>{item.team}</td>
              <td>{item.status}</td>
              <td>{item.expectedReturn}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
