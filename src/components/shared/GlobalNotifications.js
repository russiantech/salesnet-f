import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/GlobalNotifications.tsx
import { useEffect, useRef, useState } from 'react';
import { NotificationService } from '../../services/local/NotificationService';
export const GlobalNotifications = () => {
    const [notification, setNotification] = useState(null);
    const toastRef = useRef(null);
    useEffect(() => {
        const handleNotification = (message) => {
            setNotification(message);
        };
        NotificationService.subscribe(handleNotification);
        return () => NotificationService.unsubscribe(handleNotification);
    }, []);
    useEffect(() => {
        if (notification && toastRef.current) {
            const toastEl = toastRef.current;
            const bsToast = new window.bootstrap.Toast(toastEl);
            bsToast.show();
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);
    return (_jsx("div", { className: "toast-container position-fixed bottom-0 p-3 start-0", children: notification && (_jsxs("div", { className: `toast border-end border-${notification.type} show`, role: "alert", "aria-live": "assertive", "aria-atomic": "true", ref: toastRef, children: [_jsxs("div", { className: "toast-header", children: [_jsx("i", { className: `ci-bell text-${notification.type} fs-base mt-1 me-2` }), _jsx("strong", { className: `me-auto text-capitalize text-${notification.type}`, children: "Response" }), _jsx("small", { className: "text-muted", children: "Just now" }), _jsx("button", { type: "button", className: "btn-close ms-2", "data-bs-dismiss": "toast", "aria-label": "Close" })] }), _jsx("div", { className: `toast-body text-${notification.type}`, children: notification.message })] })) }));
};
