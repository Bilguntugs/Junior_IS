import React from 'react';
import '../cssFiles/footer.css'; // Optional: create this if you want custom footer styling

export default function Footer() {
  return (
    <footer className="site-footer">
      <hr />
      <p>
        Created by <span className="highlight-name">Bilguuntugs Enkhbayar</span>
      </p>
    </footer>
  );
}
