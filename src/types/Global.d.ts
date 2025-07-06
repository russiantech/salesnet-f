// Extend Window interface to include bootstrap
declare global {
  interface Window {
    bootstrap: {
      Offcanvas: {
        new (element: HTMLElement, options?: any): {
          show(): void;
          hide(): void;
          toggle(): void;
        };
        getInstance(element: HTMLElement): {
          show(): void;
          hide(): void;
          toggle(): void;
        } | null;
      };
      Modal: {
        new (element: HTMLElement, options?: any): {
          show(): void;
          hide(): void;
          toggle(): void;
        };
        getInstance(element: HTMLElement): {
          show(): void;
          hide(): void;
          toggle(): void;
        } | null;
      };
    };
  }
}

export {};