import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "swiper/swiper-bundle.css";
import './assets/css/style.css'
import ContextProvider from './components/context/ContextProvider.tsx'
import ROUTER from './components/router/Router.tsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={ROUTER} />
    </ContextProvider>
  </StrictMode>
)

// Unregister any existing service workers to avoid "navigation preload" errors from previous projects
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}
