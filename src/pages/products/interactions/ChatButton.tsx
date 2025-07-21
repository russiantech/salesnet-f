// src/components/product/ChatButton.tsx
import { useState } from 'react';
import { UsersService } from '../../../services/local/UsersService';
import { NotificationService } from '../../../services/local/NotificationService';

interface ChatButtonProps {
  businessId: string;
  className?: string;
}

export const ChatButton = ({ businessId, className = '' }: ChatButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChatOpen = () => {
    if (!UsersService.isAuthenticated()) {
      NotificationService.showDialog('Please sign in to start chatting', 'info');
      showSigninCanvas();
      return;
    }
    
    setIsLoading(true);
    // Simulate API call to initiate chat
    setTimeout(() => {
      openChatDrawer(businessId);
      setIsLoading(false);
    }, 500);
  };
  
  const showSigninCanvas = () => {
    const canvasElement = document.getElementById('quickSigninCanvas');
    if (canvasElement) {
      const existingBackdrops = document.querySelectorAll('.offcanvas-backdrop');
      existingBackdrops.forEach(backdrop => backdrop.remove());
      
      const offcanvas = new window.bootstrap.Offcanvas(canvasElement);
      offcanvas.show();
    }
  };
  
  const openChatDrawer = (businessId: string) => {
    // This would be replaced with your actual chat drawer implementation
    const chatDrawer = document.getElementById('chatDrawer');
    if (chatDrawer) {
      chatDrawer.setAttribute('data-business-id', businessId);
      chatDrawer.classList.add('show');
    }
    
    // Dispatch event to notify other components
    const event = new CustomEvent('open-chat', { detail: { businessId } });
    window.dispatchEvent(event);
  };

  return (
    <button
      className={`btn btn-sm btn-outline-dark rounded-pill ${className}`}
      onClick={handleChatOpen}
      disabled={isLoading}
    >
      {/* <i className="ci-chat me-1" /> */}
       <i className="ci-chat fs-base me-1 animate-target" />
      {isLoading ? 'Opening...' : 'Chat'}
    </button>
  );
};