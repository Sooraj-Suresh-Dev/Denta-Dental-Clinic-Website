import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useHeroEntrance } from '../hooks/useHeroEntrance'

type FormErrors = {
  name?: string
  phone?: string
  email?: string
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const ready = useHeroEntrance()

  const { ref: contactRef, visible: contactVisible } = useReveal(0.1)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name'
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(false)

    if (!validate()) return

    setSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      setSubmitted(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value })
    // Clear error on change
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a0f0a 0%, #2C1810 50%, #1a0f0a 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(196,129,61,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className={ready ? 'hero-entrance-ready' : ''} style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="hero-text-enter" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.1 }}>
            Let's talk about<br /><span style={{ color: '#C4813D' }}>your smile</span>
          </h1>
          <p className="hero-text-enter hero-text-enter-delay-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', maxWidth: 500, margin: '0 auto' }}>
            Book a consultation with Dr. Shanas. No pressure, no obligations — just honest advice about what's best for your teeth.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div ref={contactRef} className={`reveal hero-grid ${contactVisible ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

            {/* Left: Contact Info */}
            <div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 40px', lineHeight: 1.15 }}>
                Get in touch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginBottom: 48 }}>
                <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'flex-start', gap: 14, textDecoration: 'none' }}>
                  <Phone size={18} color="#C4813D" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#F5F0EB', marginBottom: 4 }}>+91 98765 43210</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)' }}>Call us anytime</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <MapPin size={18} color="#C4813D" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#F5F0EB', marginBottom: 4 }}>42, MG Road, Ernakulam</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)' }}>Kochi, Kerala 682016</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <Clock size={18} color="#C4813D" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#F5F0EB', marginBottom: 4 }}>Mon – Sat: 9AM – 7PM</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#C4813D' }}>After-hours by appointment</div>
                  </div>
                </div>

                <a href="mailto:hello@dentakochi.in" style={{ display: 'flex', alignItems: 'flex-start', gap: 14, textDecoration: 'none' }}>
                  <Mail size={18} color="#C4813D" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: 16, color: '#F5F0EB', marginBottom: 4 }}>hello@dentakochi.in</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)' }}>We reply within 24 hours</div>
                  </div>
                </a>
              </div>

              {/* Google Maps Embed */}
              <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '16/9', border: '1px solid rgba(245,240,235,0.06)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.7!2d76.267!3d9.931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNTEuNiJOIDc2wrAxNicwMS4yIkU!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 240, filter: 'grayscale(1) invert(0.9)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Denta Dental Studio, Kochi"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div style={{
              background: 'rgba(245,240,235,0.03)',
              border: '1px solid rgba(245,240,235,0.06)',
              borderRadius: 12,
              padding: '36px',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div className="success-icon" style={{ width: 64, height: 64, borderRadius: '50%', background: '#C4813D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle size={32} color="#fff" />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#F5F0EB', marginBottom: 12 }}>We got your message!</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(245,240,235,0.5)', lineHeight: 1.7, maxWidth: 320, margin: '0 auto' }}>
                    Dr. Shanas's team will call you within 24 hours to confirm. No spam — just a friendly confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: '#F5F0EB', margin: '0 0 6px' }}>Book an appointment</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(245,240,235,0.4)', margin: '0 0 24px' }}>We'll get back to you within 24 hours.</p>

                  {submitError && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8, marginBottom: 16 }}>
                      <AlertCircle size={16} color="#ef4444" />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#fca5a5' }}>Something went wrong. Please try again or call us directly.</span>
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 4 }}>
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className="input-field"
                        style={errors.name ? { borderColor: '#ef4444' } : undefined}
                      />
                      {errors.name && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#fca5a5', marginTop: 4, display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        className="input-field"
                        style={errors.phone ? { borderColor: '#ef4444' } : undefined}
                      />
                      {errors.phone && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#fca5a5', marginTop: 4, display: 'block' }}>{errors.phone}</span>}
                    </div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <input
                      type="email"
                      placeholder="Email Address (optional)"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className="input-field"
                      style={errors.email ? { borderColor: '#ef4444' } : undefined}
                    />
                    {errors.email && <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#fca5a5', marginTop: 4, display: 'block' }}>{errors.email}</span>}
                  </div>
                  <select
                    value={form.service}
                    onChange={e => handleChange('service', e.target.value)}
                    className="input-field"
                    style={{ marginBottom: 12, appearance: 'none' }}
                  >
                    <option value="" style={{ background: '#1a1a1a' }}>Select a Service</option>
                    <option value="pediatric" style={{ background: '#1a1a1a' }}>Pediatric Care</option>
                    <option value="cosmetic" style={{ background: '#1a1a1a' }}>Cosmetic Dentistry</option>
                    <option value="general" style={{ background: '#1a1a1a' }}>General Dentistry</option>
                    <option value="implants" style={{ background: '#1a1a1a' }}>Dental Implants</option>
                    <option value="other" style={{ background: '#1a1a1a' }}>Not sure yet</option>
                  </select>
                  <textarea
                    placeholder="Tell us what you need (optional)"
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    rows={3}
                    className="input-field"
                    style={{ marginBottom: 16, resize: 'vertical' }}
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '14px',
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin 1s linear infinite' }}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Book Appointment
                      </>
                    )}
                  </button>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(245,240,235,0.25)', textAlign: 'center', marginTop: 10 }}>
                    Your information is secure and confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
