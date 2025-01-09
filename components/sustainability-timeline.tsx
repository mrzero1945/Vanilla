import { CheckCircle2 } from 'lucide-react'

const timelineEvents = [
  {
    year: 2010,
    title: "Sustainable Farming Initiative Launched",
    description: "Began partnership with local farmers to implement sustainable farming practices."
  },
  {
    year: 2015,
    title: "Organic Certification Achieved",
    description: "Obtained organic certification for our vanilla products, ensuring chemical-free cultivation."
  },
  {
    year: 2018,
    title: "Solar-Powered Processing Facility",
    description: "Opened our first solar-powered vanilla processing facility, reducing carbon footprint."
  },
  {
    year: 2020,
    title: "Fair Trade Certification",
    description: "Achieved Fair Trade certification, ensuring ethical treatment and fair wages for our farmers."
  },
  {
    year: 2023,
    title: "Carbon Neutral Operations",
    description: "Reached carbon neutrality across all our operations through offsetting and sustainable practices."
  }
]

export function SustainabilityTimeline() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Sustainability Journey</h2>
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle2 className="text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{event.year}: {event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary" />
        </div>
      </div>
    </section>
  )
}

