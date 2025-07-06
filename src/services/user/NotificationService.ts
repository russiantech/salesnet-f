export const NotificationService = {
  showDialog: (message: string, type: 'success' | 'error' | 'info' | 'warning') => {
    // Implementation using your preferred notification library (Toast, Snackbar, etc.)
    // Example with Material-UI Snackbar:
    const notificationEvent = new CustomEvent('show-notification', {
      detail: { message, type }
    });
    window.dispatchEvent(notificationEvent);
  },

  // Additional notification methods
  showSuccess: (message: string) => {
    NotificationService.showDialog(message, 'success');
  },

  showError: (message: string) => {
    NotificationService.showDialog(message, 'error');
  },

  showInfo: (message: string) => {
    NotificationService.showDialog(message, 'info');
  },

  showWarning: (message: string) => {
    NotificationService.showDialog(message, 'warning');
  },

  // For form validation errors
  showValidationError: (errors: Record<string, string>) => {
    const message = Object.values(errors).join('\n');
    NotificationService.showError(message);
  },
};