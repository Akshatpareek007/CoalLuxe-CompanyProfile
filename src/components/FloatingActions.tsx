import React from 'react';
import { brandConfig } from '../config/brandConfig';
import { MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(brandConfig.whatsappMessage)}`;

  return (
    <aside className="floating-actions" aria-label="Direct Quick Contact">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat with our sales team on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="floating-btn-tooltip">Chat via WhatsApp</span>
      </a>
    </aside>
  );
};
