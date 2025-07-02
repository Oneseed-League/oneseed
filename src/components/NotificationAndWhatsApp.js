import React from 'react';

export default function NotificationAndWhatsApp() {
  const askPermission = () => {
    if (!('Notification' in window)) {
      alert('Tarayıcınız bildirimleri desteklemiyor.');
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('One Seed Lig Bildirimi', {
          body: 'Lig güncellemeleri için bildirimleri açtınız!',
          icon: '/Oneseedlogo.png',
        });
      } else {
        alert('Bildirim izni reddedildi.');
      }
    });
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <button
        onClick={askPermission}
        style={{
          padding: '10px 20px',
          backgroundColor: '#f58b00',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginRight: '15px',
        }}
      >
        Bildirimleri Aç
      </button>

      <a
        href="https://chat.whatsapp.com/GRUP_LINKINIZ"
        target="_blank"
        rel="noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#25d366',
          color: 'white',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        WhatsApp Lig Grubumuza Katıl
      </a>
    </div>
  );
}

