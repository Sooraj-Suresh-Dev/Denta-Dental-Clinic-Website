import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Shield, Users, Clock } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useHeroEntrance } from '../hooks/useHeroEntrance'
import { useCountUp } from '../hooks/useCountUp'

const images = {
  dentist1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  dentist2: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
}

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Honest Care',
    desc: 'We tell you what you need — and what you don\'t. No unnecessary procedures, no surprise bills. Just good dentistry.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Your Comfort',
    desc: 'Dental anxiety is real. We work at your pace, explain everything, and make sure you feel safe before we proceed.',
  },
  {
    icon: <Users size={24} />,
    title: 'Family First',
    desc: 'From your child\'s first tooth to your parents\' dentures — we take care of the whole family under one roof.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Respect Your Time',
    desc: 'Evening and weekend appointments because life doesn\'t stop for dental visits. Flexible scheduling that works around you.',
  },
]

function ValueCard({ v, index }: { v: typeof values[0]; index: number }) {
  const { ref, visible } = useReveal(0.1)
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 12, padding: '32px 28px', border: '1px solid rgba(245,240,235,0.06)' }}>
      <div style={{ color: '#C4813D', marginBottom: 16 }}>{v.icon}</div>
      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 700, color: '#F5F0EB', margin: '0 0 10px' }}>{v.title}</h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7, color: 'rgba(245,240,235,0.5)', margin: 0 }}>{v.desc}</p>
    </div>
  )
}

export default function AboutPage() {
  const ready = useHeroEntrance()
  const { ref: storyRef, visible: storyVisible } = useReveal(0.1)
  const { ref: valuesRef, visible: valuesVisible } = useReveal(0.1)
  const { ref: ctaRef, visible: ctaVisible } = useReveal(0.15)
  const { ref: patientsRef, count: patientsCount } = useCountUp(2000, 1200)
  const { ref: ratingRef, count: ratingCount } = useCountUp(4.9, 1000, 1)

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a0f0a 0%, #2C1810 50%, #1a0f0a 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(196,129,61,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className={ready ? 'hero-entrance-ready' : ''} style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="hero-text-enter" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.1 }}>
            The person behind<br /><span style={{ color: '#C4813D' }}>the smile</span>
          </h1>
          <p className="hero-text-enter hero-text-enter-delay-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', maxWidth: 500, margin: '0 auto' }}>
            Modern, patient-centered dentistry for the whole family in Kochi, Kerala.
          </p>
        </div>
      </section>

      {/* Dr. Shanas's Story */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div ref={storyRef} className={`reveal hero-grid ${storyVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'start' }}>

            {/* Left: Story */}
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 24px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                The team behind<br /><span style={{ color: '#C4813D' }}>your smile</span>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', marginBottom: 20 }}>
                At Denta, we believe everyone deserves dental care that's honest, comfortable, and personalized. No surprise fees, no unnecessary procedures — just good dentistry in the heart of Kochi.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', marginBottom: 20 }}>
                Our team combines expertise with a genuine passion for patient care. We take the time to listen, explain every procedure in detail, and ensure you feel confident before any treatment begins.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', marginBottom: 32 }}>
                You'll always know what's happening with your teeth, and you'll always feel welcome here.
              </p>

              <div style={{ display: 'flex', gap: 48, paddingTop: 24, borderTop: '1px solid rgba(245,240,235,0.06)' }}>
                <div ref={patientsRef}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 36, fontWeight: 800, color: '#C4813D', lineHeight: 1 }}>{patientsCount.toLocaleString()}+</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)', marginTop: 6 }}>Patients Treated</div>
                </div>
                <div ref={ratingRef}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 36, fontWeight: 800, color: '#C4813D', lineHeight: 1 }}>{ratingCount}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)', marginTop: 6 }}>Google Rating</div>
                </div>
              </div>
            </div>

            {/* Right: Quote block */}
            <div>
              <div style={{ background: 'rgba(196,129,61,0.1)', borderRadius: 16, padding: '48px 36px', position: 'relative', border: '1px solid rgba(196,129,61,0.2)' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 72, color: '#C4813D', opacity: 0.3, lineHeight: 1, marginBottom: -20 }}>"</div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 500, color: '#F5F0EB', lineHeight: 1.6, margin: '0 0 24px', fontStyle: 'italic' }}>
                  I don't believe in quick fixes or upselling. I believe in telling you the truth about your dental health and letting you decide. That's what I'd want for my own family.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <img
                    src={images.dentist1}
                    alt="Dr. Shanas"
                    style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#F5F0EB' }}>Dr. Shanas P. M.</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.5)' }}>Cosmetic Dentist & Lead Dental Surgeon</div>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div style={{ marginTop: 24, background: 'rgba(245,240,235,0.03)', borderRadius: 12, padding: '28px 24px', border: '1px solid rgba(245,240,235,0.06)' }}>
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialties</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'Cosmetic Dentistry',
                    'Clear Aligners & Orthodontics',
                    'Smile Design',
                    'Restorative Dental Care',
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#C4813D', fontWeight: 600 }}>—</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(245,240,235,0.7)' }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Rashida K. */}
      <section style={{ padding: '100px 24px', background: '#1a0f0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }} className="hero-grid">
            <div style={{ order: 1 }}>
              <div style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 16, padding: '48px 36px', position: 'relative', border: '1px solid rgba(245,240,235,0.06)' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 72, color: '#C4813D', opacity: 0.3, lineHeight: 1, marginBottom: -20 }}>"</div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 500, color: '#F5F0EB', lineHeight: 1.6, margin: '0 0 24px', fontStyle: 'italic' }}>
                  Every child deserves a positive dental experience. I work to create a comforting, stress-free environment where kids feel safe and actually enjoy their visits.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <img
                    src={images.dentist2}
                    alt="Dr. Meera K."
                    style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#F5F0EB' }}>Dr. Meera K.</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.5)' }}>Dental Surgeon & Pediatric Specialist</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ order: 0 }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 24px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Dedicated to<br /><span style={{ color: '#C4813D' }}>every age</span>
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', marginBottom: 20 }}>
                Dr. Rashida brings dedicated expertise and a compassionate touch to the clinic, ensuring high standards of treatment for patients of all ages. With a focus on preventive dental health and pediatric care, she creates a comforting environment for kids and adults alike.
              </p>
              <div style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 12, padding: '28px 24px', border: '1px solid rgba(245,240,235,0.06)' }}>
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialties</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'General & Preventive Dentistry',
                    'Pediatric Dentistry (Pedodontics)',
                    'Periodontics',
                    'Laser Dental Surgery',
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#C4813D', fontWeight: 600 }}>—</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(245,240,235,0.7)' }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div ref={valuesRef} className={`reveal ${valuesVisible ? 'visible' : ''}`} style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              What we stand for
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(245,240,235,0.5)', maxWidth: 480 }}>
              The principles that guide every visit.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="services-grid">
            {values.map((v, i) => (
              <ValueCard key={v.title} v={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className={`reveal cta-gradient-animated ${ctaVisible ? 'visible' : ''}`} style={{ background: 'linear-gradient(135deg, #2C1810 0%, #1a0f0a 50%, #2C1810 100%)', backgroundSize: '200% 200%', padding: '100px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Ready to meet us?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', maxWidth: 500, margin: '0 auto 32px' }}>
            Come in for a consultation — no pressure, no obligations. We'll listen to what you need and tell you honestly what we can do.
          </p>
          <Link to="/contact" className="btn-primary">
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
