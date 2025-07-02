const memes = [
  { img: "https://i.imgur.com/abcd123.jpg", caption: "Draft günü yüz ifadesi 😂" },
  { img: "https://i.imgur.com/efgh456.jpg", caption: "Waiver hamlesi sonrası zafer" },
  { img: "https://i.imgur.com/ijkl789.jpg", caption: "Büyük takas sonrası grup chat" }
];

export default function Gallery() {
  return (
    <div className="card">
      <h2>Meme & Media Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {memes.map((meme, index) => (
          <div key={index} style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px' }}>
            <img src={meme.img} alt={`Meme ${index}`} style={{ width: '100%', borderRadius: '6px' }} />
            <p style={{ marginTop: '10px', textAlign: 'center' }}>{meme.caption}</p>
          </div>
        ))}
      </div>
      <p>Upload özelliği yakında eklenecek.</p>
    </div>
  );
}

