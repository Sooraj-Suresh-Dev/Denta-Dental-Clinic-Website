import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock } from 'lucide-react'
import logoImg from '@/imports/logo-1.jpg'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', padding: '60px 24px 32px', borderTop: '1px solid rgba(196,129,61,0.1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 28,
                height: 28,
                background: '#C4813D',
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L12 22" />
                  <path d="M8 6L8 18" />
                  <path d="M16 6L16 18" />
                  <path d="M4 10L4 14" />
                  <path d="M20 10L20 14" />
                </svg>
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', color: '#C4813D', fontWeight: 700, fontSize: 18 }}>Denta</div>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.8, color: 'rgba(245,240,235,0.4)', maxWidth: 280, marginBottom: 24 }}>
              Modern dental care for the whole family. Advanced technology, compassionate service, and beautiful results in Kochi, Kerala.
            </p>
            <div style={{ fontFamily: 'Caveat, cursive', fontSize: 20, color: '#C4813D', opacity: 0.7 }}>
              happy smiles always!
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01' },
                { label: 'Youtube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={social.label}
                  className="social-icon"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: '#F5F0EB', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Quick Links
            </div>
            {[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'Patient Stories', path: '/patient-stories' },
              { label: 'About', path: '/about' },
              { label: 'Contact', path: '/contact' },
            ].map(l => (
              <Link key={l.path} to={l.path} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: '#F5F0EB', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Services
            </div>
            {['Pediatric Care', 'Cosmetic Dentistry', 'General Dentistry', 'Dental Implants'].map(s => (
              <Link key={s} to="/services" className="footer-link">
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 13, color: '#F5F0EB', marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Contact
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)', lineHeight: 1.7, marginBottom: 16, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <MapPin size={16} style={{ marginTop: 4, flexShrink: 0, color: '#C4813D' }} />
              <span>42, MG Road, Ernakulam<br />Kochi, Kerala 682016</span>
            </div>
            <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 14, color: '#C4813D', textDecoration: 'none', marginBottom: 8 }}>
              <Phone size={16} />
              +91 98765 43210
            </a>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.35)', lineHeight: 1.7, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <Clock size={14} style={{ marginTop: 2, flexShrink: 0, color: '#C4813D' }} />
              <span>Mon – Sat: 9:00 AM – 7:00 PM<br />After-Hours: By Appointment</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 24,
          borderTop: '1px solid rgba(245,240,235,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.25)' }}>
            &copy; {new Date().getFullYear()} Denta Dental Studio. All rights reserved.
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.25)' }}>
            Kochi, Kerala
          </div>
        </div>
      </div>
    </footer>
  )
}
