// src/components/GlobalNotifications.tsx
import { useEffect, useRef, useState } from 'react';
import { NotificationService } from '../../services/local/NotificationService';

export const GlobalNotifications = () => {
  const [notification, setNotification] = useState<{ message: string, type: string } | null>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleNotification = (message: { message: string, type: string }) => {
      setNotification(message);
    };

    NotificationService.subscribe(handleNotification);
    return () => NotificationService.unsubscribe(handleNotification);
  }, []);

  // useEffect(() => {
  //   if (notification && toastRef.current) {
  //     const toastEl = toastRef.current;
  //     const bsToast = new (window as any).bootstrap.Toast(toastEl);
  //     bsToast.show();

  //     const timer = setTimeout(() => setNotification(null), 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [notification]);
  // 
    useEffect(() => {
    if (!notification || !toastRef.current) {
      return; // Early return, no cleanup needed
    }

    const toastEl = toastRef.current;
    const bsToast = new (window as any).bootstrap.Toast(toastEl);
    bsToast.show();

    const timer = setTimeout(() => setNotification(null), 5000);
    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <div className="toast-container position-fixed bottom-0 p-3 start-0">
      {notification && (
        <div
          className={`toast border-end border-${notification.type} show`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastRef}
        >
          <div className="toast-header">
            <i className={`ci-bell text-${notification.type} fs-base mt-1 me-2`} />
            <strong className={`me-auto text-capitalize text-${notification.type}`}>Response</strong>
            <small className="text-muted">Just now</small>
            <button
              type="button"
              className="btn-close ms-2"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className={`toast-body text-${notification.type}`}>
            {notification.message}
          </div>
        </div>
      )}
    </div>
  );
};
