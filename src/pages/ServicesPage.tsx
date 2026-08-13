import { Link } from 'react-router-dom'
import { ArrowRight, Baby, Heart, Stethoscope, Shield } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useHeroEntrance } from '../hooks/useHeroEntrance'

const images = {
  pediatric: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  cosmetic: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
  general: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
  implants: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
}

const services = [
  {
    icon: <Baby size={32} />,
    title: 'Kid-Friendly Pediatric Care',
    desc: 'We make dental visits fun for kids. Gentle, patient, and designed to build healthy habits early. No tears, no fear — just a positive experience that sets them up for life.',
    features: ['Child-friendly clinic design', 'Gentle, anxiety-free treatment', 'Preventive care & education', 'Fun, rewarding visits'],
    price: '₹2,000 – ₹5,000',
    image: images.pediatric,
  },
  {
    icon: <Heart size={32} />,
    title: 'Cosmetic Dentistry',
    desc: 'Veneers, whitening, and smile makeovers — because everyone deserves to feel good about their smile. We use high-quality materials for natural-looking results.',
    features: ['Professional teeth whitening', 'Porcelain veneers', 'Smile makeovers', 'Bonding & contouring'],
    price: '₹15,000 – ₹1,50,000',
    image: images.cosmetic,
  },
  {
    icon: <Stethoscope size={32} />,
    title: 'General Dentistry',
    desc: 'Routine check-ups, cleanings, and preventive care for the whole family. We catch problems early and keep your teeth healthy for life.',
    features: ['Routine check-ups & cleanings', 'Fluoride treatments', 'Digital X-rays', 'Gum disease treatment'],
    price: '₹500 – ₹3,000',
    image: images.general,
  },
  {
    icon: <Shield size={32} />,
    title: 'Dental Implants',
    desc: 'Missing teeth? Implants look and feel like the real thing. Permanent, comfortable, and built to last. You\'ll forget which tooth is the implant.',
    features: ['Titanium implant placement', 'Natural-looking crowns', 'Bone grafting available', 'Full-arch solutions'],
    price: '₹25,000 – ₹1,50,000',
    image: images.implants,
  },
]

function ServiceRow({ s, index }: { s: typeof services[0]; index: number }) {
  const { ref: imageRef, visible: imageVisible } = useReveal(0.1)
  const { ref: textRef, visible: textVisible } = useReveal(0.1)

  return (
    <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
      <div style={{ order: index % 2 === 0 ? 0 : 1 }} ref={imageRef} className={`reveal-scale ${imageVisible ? 'visible' : ''}`}>
        <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '16/10', position: 'relative' }}>
          <img
            src={s.image}
            alt={s.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            background: 'rgba(196,129,61,0.95)',
            backdropFilter: 'blur(8px)',
            padding: '8px 16px',
            borderRadius: 8,
            fontFamily: 'Poppins, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            color: '#fff',
            boxShadow: '0 4px 16px rgba(196,129,61,0.3)',
          }}>
            Starting from {s.price}
          </div>
        </div>
      </div>
      <div ref={textRef} className={`${index % 2 === 0 ? 'reveal-left' : 'reveal-right'} ${textVisible ? 'visible' : ''}`}>
        <div style={{ color: '#C4813D', marginBottom: 20 }}>{s.icon}</div>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{s.title}</h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', marginBottom: 24 }}>{s.desc}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {s.features.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#C4813D', fontWeight: 600 }}>—</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(245,240,235,0.7)' }}>{f}</span>
            </div>
          ))}
        </div>
        <Link to="/contact" className="btn-outline">
          Book Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const ready = useHeroEntrance()

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a0f0a 0%, #2C1810 50%, #1a0f0a 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(196,129,61,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className={ready ? 'hero-entrance-ready' : ''} style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="hero-text-enter" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Everything your family<br /><span style={{ color: '#C4813D' }}>needs for healthy teeth</span>
          </h1>
          <p className="hero-text-enter hero-text-enter-delay-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', maxWidth: 600, margin: '0 auto' }}>
            From your child's first check-up to complete smile makeovers — we handle it all under one roof. <span style={{ color: '#C4813D' }}>Evenings and weekends available.</span>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {services.map((s, i) => (
              <ServiceRow key={s.title} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #2C1810 0%, #1a0f0a 50%, #2C1810 100%)', backgroundSize: '200% 200%', padding: '100px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Ready to get started?
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', maxWidth: 500, margin: '0 auto 32px' }}>
            Book a consultation — no pressure, no obligations. We'll listen to what you need and tell you honestly what we can do.
          </p>
          <Link to="/contact" className="btn-primary">
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
