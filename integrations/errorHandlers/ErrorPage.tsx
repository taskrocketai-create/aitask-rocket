import { useRouteError } from "react-router";
import { ErrorOverlay } from "../../vite-error-overlay-plugin";

export default function ErrorPage() {
  const error = useRouteError() as Error;

  if (import.meta.env.DEV) {
    const overlay = new ErrorOverlay(error, 'runtime');
    overlay.connectedCallback?.();
    return <div dangerouslySetInnerHTML={{ __html: ErrorOverlay.getOverlayHTML() }} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Something went wrong</h1>
      <p style={{ color: '#666', maxWidth: '480px' }}>{error?.message || 'An unexpected error occurred. Please try refreshing the page.'}</p>
    </div>
  );
};
