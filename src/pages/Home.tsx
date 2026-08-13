import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, Baby, Heart, Stethoscope } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useHeroEntrance } from '../hooks/useHeroEntrance'
import { useCountUp } from '../hooks/useCountUp'

// Stock images from Unsplash
const images = {
  dentalImplant: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
  dentalOffice: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  pediatric: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
  cosmetic: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80',
  general: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80',
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const ready = useHeroEntrance()

  return (
    <section
      id="home"
      style={{
        background: 'linear-gradient(135deg, #1a0f0a 0%, #2C1810 50%, #1a0f0a 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Background gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(196,129,61,0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '100px 32px 60px', position: 'relative', zIndex: 1 }}>
        <div className={`hero-grid ${ready ? 'hero-entrance-ready' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>

          {/* Left: Text */}
          <div>
            <p className="hero-text-enter" style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'rgba(245,240,235,0.7)', maxWidth: 320, margin: '0 0 32px' }}>
              From preventive care to complex restorations, a comprehensive approach to your dental health.
            </p>

            <h1 className="hero-text-enter hero-text-enter-delay-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(42px, 5vw, 72px)', fontWeight: 700, color: '#F5F0EB', lineHeight: 1.05, margin: '0 0 40px', letterSpacing: '-0.03em' }}>
              Modern <br />Dental Care<br />
              To Create Your <br />
              <span style={{ color: '#C4813D', fontWeight: 800 }}>Perfect</span> Smile
            </h1>

            {/* Bottom stats bar */}
            <div className="hero-text-enter hero-text-enter-delay-2" style={{
              display: 'flex',
              gap: 40,
              paddingTop: 24,
              borderTop: '1px solid rgba(245,240,235,0.1)',
            }}>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#F5F0EB' }}>Trusted by 2000+ Patients</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.5)', marginTop: 4 }}>Kochi, Kerala</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#F5F0EB' }}>Advanced Technology</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.5)', marginTop: 4 }}>Digital X-rays & 3D Scanning</div>
              </div>
            </div>
          </div>

          {/* Center: Dental Visual */}
          <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="hero-image-enter" style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 20,
              overflow: 'hidden',
            }}>
              <img
                src={images.dentalImplant}
                alt="Patient receiving modern dental treatment in a bright clinic setting"
                width={800}
                height={600}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(26,15,10,0.8) 0%, transparent 50%)',
              }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Services Preview ─────────────────────────────────────────────────────────

const services = [
  { title: 'Pediatric Care', desc: 'Gentle, fun dental experiences for kids. We build healthy habits early with patience and care.', icon: <Baby size={28} />, image: images.pediatric },
  { title: 'Cosmetic Dentistry', desc: 'Veneers, whitening, and smile makeovers. Feel confident about your smile again.', icon: <Heart size={28} />, image: images.cosmetic },
  { title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth. Built to last a lifetime.', icon: <Stethoscope size={28} />, image: images.general },
]

function ServicesPreview() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.1)
  const { ref: gridRef, visible: gridVisible } = useReveal(0.1)

  return (
    <section id="services" style={{ padding: '100px 24px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={sectionRef} className={`reveal ${sectionVisible ? 'visible' : ''}`} style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            What we do
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(245,240,235,0.65)', maxWidth: 480 }}>
            Everything your family needs — from routine cleanings to complete smile transformations.
          </p>
        </div>

        <div ref={gridRef} className={`services-grid reveal-stagger ${gridVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {services.map(s => (
            <Link
              key={s.title}
              to="/services"
              style={{
                textDecoration: 'none',
                display: 'block',
              }}
            >
              <div className="service-card" style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 16, border: '1px solid rgba(245,240,235,0.06)' }}>
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="service-card-image"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)',
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    color: '#C4813D',
                    background: 'rgba(10,10,10,0.6)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 8,
                    padding: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {s.icon}
                  </div>
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 700, color: '#F5F0EB', margin: '0 0 8px' }}>
                      {s.title}
                    </h3>
                    <div className="service-card-arrow" style={{ flexShrink: 0, marginTop: 2 }}>
                      <ArrowRight size={16} color="rgba(245,240,235,0.3)" />
                    </div>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.6, color: 'rgba(245,240,235,0.65)', margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link to="/services" className="btn-outline" style={{ padding: '12px 24px', fontSize: 13 }}>
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── About Preview ────────────────────────────────────────────────────────────

function AboutPreview() {
  const { ref: textRef, visible: textVisible } = useReveal(0.15)
  const { ref: imageRef, visible: imageVisible } = useReveal(0.15)
  const { ref: patientsRef, count: patientsCount } = useCountUp(2000, 1200)
  const { ref: ratingRef, count: ratingCount } = useCountUp(4.9, 1000, 1)

  return (
    <section style={{ padding: '100px 24px', background: '#1a0f0a', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
        <div ref={textRef} className={`reveal-left ${textVisible ? 'visible' : ''}`}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Meet our team
            </h2>
          </Link>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.65)', marginBottom: 24 }}>
            Our team combines expertise with a genuine passion for patient care. We take the time to listen, explain every procedure in detail, and ensure you feel confident before any treatment begins.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.65)', marginBottom: 32 }}>
            From cosmetic dentistry to pediatric care — we handle it all under one roof with honesty and compassion.
          </p>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            <div ref={patientsRef}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 32, fontWeight: 800, color: '#C4813D', lineHeight: 1 }}>{patientsCount.toLocaleString()}+</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.5)', marginTop: 4 }}>Patients Treated</div>
            </div>
            <div ref={ratingRef}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 32, fontWeight: 800, color: '#C4813D', lineHeight: 1 }}>{ratingCount}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.5)', marginTop: 4 }}>Google Rating</div>
            </div>
            <Link to="/about" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#C4813D', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div ref={imageRef} className={`reveal-right ${imageVisible ? 'visible' : ''}`} style={{ position: 'relative' }}>
          <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
            <img
              src={images.dentalOffice}
              alt="Inside the Complete Dental Clinic reception and treatment area"
              width={800}
              height={600}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials Preview ─────────────────────────────────────────────────────

const testimonials = [
  { name: 'Priya Menon', location: 'Kochi', text: "I'd been hiding my smile for years because of dull, stained teeth. Dr. Shanas's cosmetic treatment plan — whitening and veneers — completely transformed my look. The results are natural and I can't stop smiling now.", rating: 5, treatment: 'Cosmetic Dentistry', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { name: 'Rahul Nair', location: 'Ernakulam', text: "My kids used to cry at the dentist. Now they actually ask when their next appointment is. That says everything about the environment here.", rating: 4, treatment: 'Pediatric Care', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
  { name: 'Anjali Krishnan', location: 'Aluva', text: "Waited over 30 minutes past my appointment time. The cleaning itself was fine, but the communication about delays could be better. Decent clinic overall, just not great on the scheduling side.", rating: 2, treatment: 'General Dentistry', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
  { name: 'Sarah Thomas', location: 'Kakkanad', text: "The dental implant procedure was much easier than I expected. Dr. Mason explained everything clearly and the results look completely natural. Best investment in my health.", rating: 5, treatment: 'Dental Implants', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
  { name: 'Michael Abraham', location: 'Vytila', text: "Professional, caring, and truly skilled. The team made me feel comfortable throughout my entire smile makeover. Highly recommend to anyone looking for quality dental care.", rating: 4, treatment: 'Cosmetic Dentistry', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
]

function TestimonialsPreview() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.1)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActive(prev => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 350)
    }, 2500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  const handleSelect = (i: number) => {
    if (i === active) return
    if (timerRef.current) clearInterval(timerRef.current)
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(i)
      setIsTransitioning(false)
    }, 350)
  }

  const t = testimonials[active]

  return (
    <section id="patient-stories" style={{ background: '#0a0a0a', padding: '100px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={sectionRef} className={`reveal ${sectionVisible ? 'visible' : ''}`} style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: 0, letterSpacing: '-0.02em' }}>
            What our patients say
          </h2>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'start' }}>
          <div style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 16, padding: '40px', border: '1px solid rgba(245,240,235,0.06)', minHeight: 280 }}>
            <div className={`testimonial-content ${isTransitioning ? 'testimonial-exit' : ''}`}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 500, color: '#F5F0EB', lineHeight: 1.55, margin: '0 0 32px', fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill={i < t.rating ? '#C4813D' : 'none'} color={i < t.rating ? '#C4813D' : 'rgba(245,240,235,0.2)'} />
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <img
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#F5F0EB' }}>{t.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.5)' }}>{t.location} · {t.treatment}</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => handleSelect(i)}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '20px 24px',
                  background: active === i ? 'rgba(196,129,61,0.15)' : 'rgba(245,240,235,0.03)',
                  border: '1px solid',
                  borderColor: active === i ? 'rgba(196,129,61,0.3)' : 'rgba(245,240,235,0.06)',
                  borderRadius: 12,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: active === i ? '#C4813D' : '#F5F0EB', transition: 'color 0.25s ease' }}>{item.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: active === i ? 'rgba(196,129,61,0.7)' : 'rgba(245,240,235,0.5)', marginTop: 2, transition: 'color 0.25s ease' }}>{item.treatment}</div>
                </div>
                {active === i && <div style={{ marginLeft: 'auto' }}><ArrowRight size={16} color="#C4813D" /></div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── First Visit ──────────────────────────────────────────────────────────────

const steps = [
  { num: '01', title: 'Book Online or Call', desc: 'Fill out the form or call us. We\'ll find a time that works for your schedule — including evenings and weekends.' },
  { num: '02', title: 'Arrive & Settle In', desc: 'Walk into a calm, welcoming space. No cold waiting rooms. We\'ll make sure you\'re comfortable from the moment you arrive.' },
  { num: '03', title: 'Consultation & Examination', desc: 'Dr. Shanas listens first. Then a thorough check-up with digital X-rays — no surprises, no pressure.' },
  { num: '04', title: 'Your Treatment Plan', desc: 'You\'ll leave knowing exactly what your teeth need, what it costs, and what to expect. Your decision, your timeline.' },
]

function FirstVisit() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.1)
  const { ref: gridRef, visible: gridVisible } = useReveal(0.1)

  return (
    <section style={{ padding: '100px 24px', background: '#1a0f0a' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div ref={sectionRef} className={`reveal ${sectionVisible ? 'visible' : ''}`} style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Your first visit,<br /><span style={{ color: '#C4813D' }}>explained simply</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(245,240,235,0.65)', maxWidth: 480 }}>
            No surprises. No judgment. Just a clear path to healthier teeth.
          </p>
        </div>

        <div ref={gridRef} className={`services-grid reveal-step-chain ${gridVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {steps.map((s, i) => (
            <div key={s.num} className="step-card" style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 12, padding: '32px 24px', border: '1px solid rgba(245,240,235,0.06)', position: 'relative' }}>
              {i < steps.length - 1 && <div className="step-connector" />}
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 48, fontWeight: 800, color: '#C4813D', opacity: 0.5, lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 700, color: '#F5F0EB', margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(245,240,235,0.6)', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/contact" className="btn-primary">
            Book Your First Visit <ArrowRight size={16} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <CheckCircle size={16} color="#C4813D" />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.65)' }}>No surprise fees — ever</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  const { ref, visible } = useReveal(0.2)

  return (
    <section ref={ref} className={`reveal cta-gradient-animated ${visible ? 'visible' : ''}`} style={{ background: 'linear-gradient(135deg, #2C1810 0%, #1a0f0a 50%, #2C1810 100%)', backgroundSize: '200% 200%', padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Let's get your smile<br />looking the way you want
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.8, color: 'rgba(245,240,235,0.65)', maxWidth: 500, margin: '0 auto 32px' }}>
          Book a consultation — no pressure, no obligations. We'll listen to what you need and tell you honestly what we can do.
        </p>
        <Link to="/contact" className="btn-primary">
          Book Appointment <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsPreview />
      <FirstVisit />
      <CTASection />
    </>
  )
}
