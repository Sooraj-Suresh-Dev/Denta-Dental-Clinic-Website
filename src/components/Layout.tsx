import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const responsiveCSS = `
  @media (max-width: 1024px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
    .hero-visual { order: -1; max-width: 480px; margin: 0 auto; width: 100%; }
    .about-grid { grid-template-columns: 1fr !important; }
    .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .footer-grid { grid-template-columns: 1fr 1fr !important; }
    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .stat-cell { border-right: none !important; border-bottom: 1px solid rgba(245,240,235,0.06); }
    .dentist-scroll { overflow-x: auto; padding-bottom: 8px; }
  }
  @media (max-width: 640px) {
    .services-grid { grid-template-columns: 1fr !important; }
    .footer-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .trust-row { gap: 20px !important; }
    .hidden-mobile { display: none !important; }
    .show-mobile { display: flex !important; }
  }
  @media (min-width: 641px) {
    .show-mobile { display: none !important; }
  }

  /* Focus styles for accessibility */
  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 2px solid #C4813D;
    outline-offset: 2px;
  }

  /* Smooth transitions for interactive elements */
  a, button {
    transition: all 0.2s ease;
  }

  /* Custom scrollbar for dark theme */
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-track { background: #1a1a1a; }
  ::-webkit-scrollbar-thumb { background: #C4813D; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #A86B2F; }

  /* Placeholder styling */
  ::placeholder {
    color: rgba(245,240,235,0.3);
  }
`

export default function Layout() {
  return (
    <>
      <style>{responsiveCSS}</style>
      <ScrollToTop />
      <Nav />
      <main style={{ paddingTop: 0 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
