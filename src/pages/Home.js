import React from 'react';
import NotificationAndWhatsApp from '../components/NotificationAndWhatsApp';

export default function Home() {
  return (
    <div className="card">
      <h2>Welcome to One Seed!</h2>
      <p>
        Latest league news, matchup recaps, and fun updates. Stay tuned for new articles and league rumors!
      </p>

      {/* Bildirim ve WhatsApp butonu */}
      <NotificationAndWhatsApp />
    </div>
  );
}
