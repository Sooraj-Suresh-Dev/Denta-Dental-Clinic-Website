import { useState, useRef, useEffect } from 'react'
import { Star, Quote, MapPin, ChevronDown, ChevronUp, Clock, CheckCircle } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { useHeroEntrance } from '../hooks/useHeroEntrance'

const testimonials = [
  {
    name: 'Luna Reyes',
    location: 'Kochi',
    title: 'My Smile Makeover Changed Everything',
    story: `For years, I hid my smile in every photo. My teeth were dull and uneven from years of tea and coffee, and I'd tried every whitening kit without results. When I visited Denta, Dr. Shanas suggested a professional cosmetic treatment plan.\n\nThe process was thorough — Dr. Shanas analyzed my facial structure, took photographs, and designed a smile that would complement my features naturally. Professional whitening combined with porcelain veneers transformed my teeth completely.\n\nThe results were immediate. Colleagues and family noticed the change right away. The only reason I'm not giving five stars is the follow-up appointment ran late and the billing was a bit confusing at first. But the work itself was excellent.`,
    rating: 4,
    treatment: 'Cosmetic Dentistry',
    duration: '6 weeks',
    initial: 'L',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Karthik Menon',
    location: 'Ernakulam',
    title: 'Dental Implants That Feel Like My Own Teeth',
    story: `I lost a molar in an accident years ago and had been dealing with a gap that made eating uncomfortable and my jaw ache. I tried bridges, but they never felt right. When Dr. Shanas suggested dental implants, I was nervous about the procedure.\n\nThe consultation was thorough — Dr. Shanas explained the titanium implant process, showed me 3D models, and walked me through the timeline. The surgery itself was surprisingly comfortable. The team checked on me that evening and the next day to make sure I was healing well.\n\nThree months later, the crown was placed. I honestly forget which tooth is the implant — it feels completely natural. I can eat crunchy foods again without worry. The whole experience changed how I think about dental care.`,
    rating: 5,
    treatment: 'Dental Implants',
    duration: '4 months',
    initial: 'K',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Maya Krishnan',
    location: 'Aluva',
    title: 'It Was Okay, Nothing Special',
    story: `I had been avoiding the dentist for years after a bad experience elsewhere. When a friend recommended Denta, I was nervous but decided to give it a try.\n\nThe clinic was clean and the staff were polite, but I waited almost 40 minutes past my appointment time. When I finally got in, Dr. Shanas was professional and did explain things clearly, which I appreciated. The cleaning itself was quick.\n\nI've been back a couple of times since. The dentistry is decent, but the long waits and occasionally rushed consultations keep this from being a five-star experience for me.`,
    rating: 2,
    treatment: 'General Dentistry',
    duration: 'Ongoing',
    initial: 'M',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
  {
    name: 'Finn O\'Brien',
    location: 'Kakkanad',
    title: 'Great Results, Minor Hiccups Along the Way',
    story: `Years of coffee and tea had left my teeth dull and stained. I tried whitening kits at home, but they barely made a difference and sensitivity was terrible. Dr. Shanas recommended a professional cosmetic treatment plan that included whitening and porcelain veneers for my front teeth.\n\nThe process was meticulous. Dr. Shanas took photographs, analyzed my facial structure, and designed a smile that complemented my features — not just white teeth, but a natural-looking transformation. The veneers were crafted to match my skin tone and face shape.\n\nThe results are genuinely good and I get compliments regularly. Took off one star because one veneer needed a minor adjustment at a follow-up visit, which added an extra trip. Not a big deal, but worth mentioning.`,
    rating: 4,
    treatment: 'Cosmetic Dentistry',
    duration: '6 weeks',
    initial: 'F',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    name: 'Nora Patel',
    location: 'Vytila',
    title: 'Finally, a Dentist My Kids Actually Love',
    story: `Getting my two kids to the dentist used to be a battle. They were terrified of the sounds, the smells, and the idea of someone working on their teeth. Every visit ended in tears — theirs and mine. I was dreading their check-ups.\n\nDenta was recommended by a friend, and from the first visit, everything was different. The waiting area had books and toys. The staff spoke to my children at their level, explaining what they were doing in fun terms. Dr. Meera was incredibly patient, letting them explore the tools and asking them about their favourite cartoons.\n\nNow my kids actually remind me about their dental appointments. They've had cleanings and minor fillings without a single tear. Finding a dentist who understands children is rare, and we're grateful to have found one.`,
    rating: 5,
    treatment: 'Family Dentistry',
    duration: 'Ongoing',
    initial: 'N',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
  },
]

const transformations = [
  {
    patient: 'Ethan K., 42',
    treatment: 'Full Mouth Rehabilitation',
    beforeText: 'Ethan came to us with severe wear on his front teeth and two missing molars. Years of neglect and fear of the dentist had left him avoiding social situations and struggling to eat his favourite foods.',
    afterText: 'After 8 months of treatment including dental implants, crowns, and professional whitening, Ethan\'s smile is completely restored. He says he feels like he got his life back.',
    duration: '8 months',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&auto=format',
  },
  {
    patient: 'Zara R., 28',
    treatment: 'Cosmetic Whitening & Veneers',
    beforeText: 'Zara had severely stained and worn teeth from years of tea and coffee consumption. She was self-conscious about smiling in photos and at social gatherings.',
    afterText: 'Professional whitening combined with porcelain veneers gave Zara a natural, bright smile. She now smiles freely at every occasion and says the treatment was far easier than she expected.',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop&auto=format',
  },
  {
    patient: 'Omar M., 55',
    treatment: 'Implant-Supported Bridge',
    beforeText: 'Omar had lost three teeth over the years and was wearing a partial denture that slipped while eating. He was embarrassed to eat out with his family.',
    afterText: 'We placed four implants to support a fixed bridge, giving him a permanent set of teeth that look and function naturally. He celebrated by taking his wife to their favourite restaurant.',
    duration: '6 months',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop&auto=format',
  },
]

const faqs = [
  {
    q: 'How long does cosmetic treatment take?',
    a: 'Treatment duration varies based on the procedures needed. Professional whitening typically takes 1-2 sessions, while veneers and smile makeovers may take 2-4 weeks. During your consultation, Dr. Shanas will provide a personalized timeline.',
  },
  {
    q: 'Is cosmetic dentistry painful?',
    a: 'Most cosmetic procedures are minimally invasive and performed under local anesthesia. Patients typically report mild discomfort for 1-2 days after treatment, which is easily managed with over-the-counter pain medication.',
  },
  {
    q: 'Is dental implant surgery painful?',
    a: 'The implant procedure is performed under local anesthesia, so you won\'t feel pain during surgery. Most patients report mild discomfort for 2-3 days afterward, which is easily managed with over-the-counter pain medication. We also provide detailed aftercare instructions to ensure smooth healing.',
  },
  {
    q: 'How often do I need to visit for check-ups?',
    a: 'We recommend regular check-ups every 6 months for optimal dental health. During these visits, we clean your teeth, check for any issues, and ensure your smile stays healthy. We work with your schedule and offer flexible appointment times, including after-hours slots.',
  },
  {
    q: 'What age should my child first visit the dentist?',
    a: 'We recommend bringing your child for their first dental visit by their first birthday or when their first tooth appears. Early visits help establish good oral habits, allow us to catch potential issues early, and help your child become comfortable with the dental environment.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes, we offer flexible payment options to make dental care accessible. We provide interest-free installment plans and work with most dental insurance providers. Our team will discuss all available options during your consultation so there are no surprises.',
  },
]

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const { ref, visible } = useReveal(0.1)
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ border: '1px solid rgba(245,240,235,0.06)', borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s ease', borderColor: open ? 'rgba(196,129,61,0.2)' : 'rgba(245,240,235,0.06)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          padding: '20px 24px',
          background: open ? 'rgba(196,129,61,0.08)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'background 0.2s ease',
        }}
      >
        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 600, color: open ? '#C4813D' : '#F5F0EB', transition: 'color 0.2s ease' }}>
          {faq.q}
        </span>
        <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: open ? 'rgba(196,129,61,0.15)' : 'rgba(245,240,235,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease' }}>
          {open ? (
            <ChevronUp size={16} color="#C4813D" />
          ) : (
            <ChevronDown size={16} color="rgba(245,240,235,0.4)" />
          )}
        </div>
      </button>
      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{ padding: '0 24px 20px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.8, color: 'rgba(245,240,235,0.6)', margin: 0 }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PatientStories() {
  const ready = useHeroEntrance()
  const scrollRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)

  const { ref: heroRef, visible: heroVisible } = useReveal(0.1)
  const { ref: featuredRef, visible: featuredVisible } = useReveal(0.1)
  const { ref: transRef, visible: transVisible } = useReveal(0.1)
  const { ref: faqRef, visible: faqVisible } = useReveal(0.1)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const interval = setInterval(() => {
      if (pausedRef.current) return
      el.scrollLeft += 2
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0
      }
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1a0f0a 0%, #2C1810 50%, #1a0f0a 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(196,129,61,0.15) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className={ready ? 'hero-entrance-ready' : ''} style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="hero-text-enter" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.1 }}>
            Real patients,<br /><span style={{ color: '#C4813D' }}>real results</span>
          </h1>
          <p className="hero-text-enter hero-text-enter-delay-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', maxWidth: 500, margin: '0 auto' }}>
            Hear from people who trusted us with their smile — in their own words.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div ref={featuredRef} className={`reveal ${featuredVisible ? 'visible' : ''}`} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              What our patients say
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(245,240,235,0.5)', maxWidth: 480 }}>
              Swipe through stories from people who trusted us with their smile.
            </p>
          </div>

          <div
            ref={scrollRef}
            className="testimonial-scroll"
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
          >
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial-scroll-card">
                <Quote size={36} color="#C4813D" style={{ opacity: 0.3, marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 17, fontWeight: 700, color: '#F5F0EB', margin: '0 0 14px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', margin: '0 0 20px', flex: 1 }}>
                  {item.story.split('\n\n')[0]}
                </p>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill={i < item.rating ? '#C4813D' : 'none'} color={i < item.rating ? '#C4813D' : 'rgba(245,240,235,0.2)'} />
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(245,240,235,0.06)', paddingTop: 16 }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#F5F0EB' }}>{item.name}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,240,235,0.4)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                      <MapPin size={11} /> {item.location} · {item.treatment}
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#C4813D', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                      <Clock size={11} /> {item.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section style={{ padding: '100px 24px', background: '#1a0f0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div ref={transRef} className={`reveal ${transVisible ? 'visible' : ''}`} style={{ marginBottom: 56 }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Real Patient Transformations
            </h2>
          </div>

          {/* Featured story */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={transformations[0].image} alt={transformations[0].treatment} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Clock size={14} color="#C4813D" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#C4813D', fontWeight: 600 }}>{transformations[0].duration}</span>
              </div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 700, color: '#F5F0EB', margin: '0 0 4px' }}>
                {transformations[0].patient}
              </h3>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#C4813D', fontWeight: 600, marginBottom: 20 }}>
                {transformations[0].treatment}
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', margin: '0 0 12px' }}>
                <strong style={{ color: '#F5F0EB' }}>Before:</strong> {transformations[0].beforeText}
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.8, color: 'rgba(245,240,235,0.5)', margin: 0 }}>
                <strong style={{ color: '#C4813D' }}>After:</strong> {transformations[0].afterText}
              </p>
            </div>
          </div>

          {/* Other stories - horizontal list */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }} className="services-grid">
            {transformations.slice(1).map((item) => (
              <div key={item.patient} className="transformation-card" style={{ background: 'rgba(245,240,235,0.03)', borderRadius: 12, padding: '24px', border: '1px solid rgba(245,240,235,0.06)', transition: 'border-color 0.2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(196,129,61,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={14} color="#C4813D" />
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#C4813D', fontWeight: 600 }}>{item.duration}</span>
                </div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 700, color: '#F5F0EB', margin: '0 0 4px' }}>
                  {item.patient}
                </h3>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#C4813D', fontWeight: 600, marginBottom: 16 }}>
                  {item.treatment}
                </div>
                <div style={{ height: 1, background: 'rgba(245,240,235,0.06)', margin: '0 0 16px' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(245,240,235,0.4)', margin: '0 0 12px' }}>
                  <strong style={{ color: 'rgba(245,240,235,0.6)' }}>Before:</strong> {item.beforeText}
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7, color: 'rgba(245,240,235,0.5)', margin: 0 }}>
                  <strong style={{ color: '#C4813D' }}>After:</strong> {item.afterText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 24px', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div ref={faqRef} className={`reveal ${faqVisible ? 'visible' : ''}`} style={{ marginBottom: 48, textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#F5F0EB', margin: '0 0 16px', lineHeight: 1.15 }}>
              Questions from<br /><span style={{ color: '#C4813D' }}>Our Patients</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(245,240,235,0.5)', maxWidth: 480, margin: '0 auto' }}>
              Common questions we hear from patients considering treatment.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
