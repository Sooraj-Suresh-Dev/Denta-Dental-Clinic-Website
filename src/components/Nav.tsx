import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logoImg from '@/imports/logo-1.jpg'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Stories', path: '/patient-stories' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      const timer = setTimeout(() => setMenuVisible(true), 30)
      return () => clearTimeout(timer)
    } else {
      setMenuVisible(false)
    }
  }, [menuOpen])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,129,61,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 32,
              height: 32,
              background: '#C4813D',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 22" />
                <path d="M8 6L8 18" />
                <path d="M16 6L16 18" />
                <path d="M4 10L4 14" />
                <path d="M20 10L20 14" />
              </svg>
            </div>
            <span style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 20,
              color: '#fff',
              letterSpacing: '-0.02em',
            }}>
              Denta
            </span>
          </Link>

          {/* Desktop Nav - Dot prefixed items */}
          <nav style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
            {links.map(l => {
              const isActive = location.pathname === l.path
              return (
                <Link
                  key={l.label}
                  to={l.path}
                  style={{
                    color: isActive ? '#C4813D' : 'rgba(245,240,235,0.6)',
                    textDecoration: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C4813D')}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#C4813D' : 'rgba(245,240,235,0.6)')}
                >
                  <span style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: isActive ? '#C4813D' : 'rgba(245,240,235,0.3)',
                    transition: 'background 0.2s ease',
                  }} />
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link
              to="/contact"
              style={{
                border: '1.5px solid rgba(245,240,235,0.3)',
                color: '#F5F0EB',
                padding: '10px 24px',
                borderRadius: 6,
                fontFamily: 'Poppins, sans-serif',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C4813D'
                e.currentTarget.style.color = '#C4813D'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(245,240,235,0.3)'
                e.currentTarget.style.color = '#F5F0EB'
              }}
            >
              Book Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#fff' }}
              className={`hamburger-btn show-mobile ${menuOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <div
              onClick={() => setMenuOpen(false)}
              className="mobile-overlay-enter"
              style={{ position: 'fixed', inset: 0, top: 72, background: 'rgba(0,0,0,0.6)', zIndex: 98 }}
            />
            <div
              className="mobile-menu-enter"
              style={{
                margin: '12px 16px 16px',
                borderRadius: 16,
                border: '1px solid rgba(245,240,235,0.06)',
                background: 'rgba(245,240,235,0.03)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,240,235,0.03)',
                position: 'relative',
                zIndex: 99,
                overflow: 'hidden',
              }}
            >

              {/* Section label */}
              <div style={{ padding: '20px 24px 0' }}>
                <span style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#C4813D',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  Menu
                </span>
              </div>

              {/* Staggered links */}
              <div
                className={`mobile-menu-stagger ${menuVisible ? 'visible' : ''}`}
                style={{ padding: '12px 16px 0' }}
              >
                {links.map(l => {
                  const isActive = location.pathname === l.path
                  return (
                    <Link
                      key={l.label}
                      to={l.path}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '13px 12px',
                        marginBottom: 2,
                        color: isActive ? '#C4813D' : 'rgba(245,240,235,0.7)',
                        textDecoration: 'none',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: 15,
                        fontWeight: 500,
                        borderRadius: 10,
                        transition: 'all 0.2s ease',
                        background: isActive ? 'rgba(196,129,61,0.08)' : 'transparent',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(196,129,61,0.08)'
                        e.currentTarget.style.color = '#C4813D'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = isActive ? 'rgba(196,129,61,0.08)' : 'transparent'
                        e.currentTarget.style.color = isActive ? '#C4813D' : 'rgba(245,240,235,0.7)'
                      }}
                    >
                      <span style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: isActive ? '#C4813D' : 'rgba(245,240,235,0.2)',
                        transition: 'background 0.2s ease',
                        flexShrink: 0,
                      }} />
                      {l.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
