const newsArticles = [
  {
    title: "Haftanın Takası: Team Ekin’den Şaşırtıcı Hamle",
    date: "2025-07-01",
    summary: "Team Ekin, son hamlesiyle ligde dengeleri değiştirdi...",
    link: "#"
  },
  {
    title: "Sakatlıklar ve Takım Performansları Üzerindeki Etkisi",
    date: "2025-06-29",
    summary: "Son sakatlık raporları lig performanslarını nasıl etkiledi?",
    link: "#"
  }
];

export default function News() {
  return (
    <div className="card">
      <h2>Lig Haberleri & Blog</h2>
      {newsArticles.map((article, idx) => (
        <div key={idx} style={{ marginBottom: '20px' }}>
          <h3>{article.title}</h3>
          <small>{article.date}</small>
          <p>{article.summary}</p>
          <a href={article.link} target="_blank" rel="noreferrer">Devamını oku</a>
        </div>
      ))}
    </div>
  );
}
