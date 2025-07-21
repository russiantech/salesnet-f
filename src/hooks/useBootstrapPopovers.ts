import { useEffect } from 'react';

export const useBootstrapPopovers = (watcher?: any) => {
  useEffect(() => {
    const initializePopovers = () => {
      if (typeof window !== 'undefined' && window.bootstrap) {
        // Dispose existing popovers
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
          const instance = window.bootstrap.Popover.getInstance(el);
          if (instance) instance.dispose();
        });

        // Re-initialize
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
          new window.bootstrap.Popover(el, {
            html: true,
            trigger: 'hover focus',
            placement: 'top',
          });
        });
      }
    };

    // Delay to allow DOM updates
    setTimeout(initializePopovers, 100);

    // Cleanup
    return () => {
      document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => {
        const instance = window.bootstrap.Popover.getInstance(el);
        if (instance) instance.dispose();
      });
    };
  }, [watcher]);
};


// 
/* 
DOCUMENTATION:

Usage Example Anywhere:
In your ProductDetails.tsx:

import { usePopovers } from '../../hooks/usePopovers';

const ProductDetails = () => {
  usePopovers(product);
};
Or on any page:

tsx

usePopovers();  // Runs once
// OR
usePopovers(data);  // Runs when data changes
Summary:
Centralized logic 

Optional dependency array 

Handles dynamic DOM updates 

No need to touch App.tsx 

You just call usePopovers() wherever needed without repeating the logic. Let me know if you want a combined version with tooltips + popovers.

*/