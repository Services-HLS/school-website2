import { waLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift hover:scale-110 active:scale-95 transition-all duration-300 animate-soft-pulse group"
    >
      <svg
        viewBox="0 0 24 24"
        width="38"
        height="38"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.77.46 3.44 1.28 4.91L2 22l5.25-1.38c1.41.77 3.01 1.2 4.76 1.2 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.99-9.99-9.99zm5.55 14.15c-.24.67-1.39 1.27-1.91 1.35-.53.08-1.06.1-3.03-.68-2.52-1-4.14-3.58-4.26-3.75-.12-.17-1-1.33-1-2.54 0-1.21.63-1.81.86-2.05.23-.24.51-.3.68-.3.17 0 .34 0 .48.01.15.01.35-.06.55.42.2.49.69 1.68.75 1.8.06.12.1.26.02.42-.08.17-.12.27-.24.41-.12.14-.26.31-.37.42-.12.12-.24.25-.1.49.14.24.62 1.03 1.33 1.66.92.81 1.69 1.06 1.93 1.18.24.12.38.1.52-.06.14-.17.61-.71.77-.96.16-.25.32-.21.55-.12.23.09 1.48.7 1.74.83.26.13.43.2.49.31.06.11.06.63-.18 1.3z" />
      </svg>
    </a>
  );
}
