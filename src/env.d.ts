/// <reference types="astro/client" />

interface Window {
  showToast: (message: string, type?: 'success' | 'error' | 'info', duration?: number) => void;
}
