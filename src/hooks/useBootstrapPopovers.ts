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



// NEW FOR GLOBAL WRAPPER BUT THE FORMER STILL WORKS BETTER
// export const useBootstrapPopovers = (watcher?: any) => {
//   useEffect(() => {
//     if (typeof window === 'undefined' || !window.bootstrap) return;

//     // Initialize popovers on specific elements
//     const initializePopovers = (element: Element) => {
//       const popoverElements = element.querySelectorAll<HTMLElement>(
//         '[data-bs-toggle="popover"]'
//       );
      
//       popoverElements.forEach(el => {
//         // Only initialize if not already initialized
//         if (!window.bootstrap.Popover.getInstance(el)) {
//           new window.bootstrap.Popover(el, {
//             html: true,
//             trigger: 'hover focus',
//             placement: 'top',
//             container: 'body',
//             // Add custom class for easier management
//             customClass: 'global-popover'
//           });
//         }
//       });
//     };

//     // Cleanup popovers on specific elements
//     const cleanupPopovers = (element: Element) => {
//       const popoverElements = element.querySelectorAll<HTMLElement>(
//         '[data-bs-toggle="popover"]'
//       );
      
//       popoverElements.forEach(el => {
//         const instance = window.bootstrap.Popover.getInstance(el);
//         if (instance) {
//           instance.dispose();
//         }
//       });
//     };

//     // Initialize on entire document
//     initializePopovers(document.body);

//     // Set up MutationObserver to handle dynamic content
//     const observer = new MutationObserver((mutations) => {
//       for (const mutation of mutations) {
//         // Handle added nodes
//         mutation.addedNodes.forEach(node => {
//           if (node.nodeType === Node.ELEMENT_NODE) {
//             cleanupPopovers(node as Element);
//             initializePopovers(node as Element);
//           }
//         });

//         // Handle attribute changes
//         if (mutation.type === 'attributes' && 
//             mutation.target instanceof HTMLElement &&
//             mutation.target.matches('[data-bs-toggle="popover"]')) {
//           const instance = window.bootstrap.Popover.getInstance(mutation.target);
//           if (instance) instance.dispose();
//           initializePopovers(mutation.target);
//         }
//       }
//     });

//     // Configure and start observer
//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//       attributes: true,
//       attributeFilter: ['data-bs-toggle', 'title', 'data-bs-content']
//     });

//     // Cleanup function
//     return () => {
//       observer.disconnect();
      
//       // Cleanup all popovers on unmount
//       document.querySelectorAll<HTMLElement>('[data-bs-toggle="popover"]').forEach(el => {
//         const instance = window.bootstrap.Popover.getInstance(el);
//         if (instance) instance.dispose();
//       });
//     };
//   }, [watcher]); // Re-run when watcher changes
// };



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