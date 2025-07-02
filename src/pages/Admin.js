import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = 'oneseedadmin'; // İstersen bunu .env dosyasından yönetebilirsin

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Yanlış şifre, tekrar deneyin.');
    }
  };

  if (!loggedIn) {
    return (
      <div className="card">
        <h2>Admin Girişi</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Şifre girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '15px', borderRadius: '5px' }}
          />
          <button type="submit">Giriş Yap</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Admin Paneli</h2>
      <p>Burada yönetimsel işlemler yapabilirsiniz. (İleride özelleştirilebilir)</p>
      {/* Örnek: Projeksiyon güncelleme, duyuru gönderme, kullanıcı yönetimi */}
    </div>
  );
}
