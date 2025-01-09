import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Indonesian vanilla unique?",
    answer: "Indonesian vanilla, particularly from regions like Papua, is known for its rich, creamy flavor profile with subtle notes of chocolate. The unique climate and soil conditions contribute to its distinctive taste and aroma."
  },
  {
    question: "How do you ensure the quality of your vanilla products?",
    answer: "We maintain strict quality control measures throughout our supply chain, from careful selection of vanilla plants to proper curing and processing techniques. Our products undergo rigorous testing to meet international standards."
  },
  {
    question: "Are your vanilla products organic?",
    answer: "Yes, we offer certified organic vanilla products. Our organic vanilla is grown without the use of synthetic pesticides or fertilizers, adhering to strict organic farming practices."
  },
  {
    question: "Do you offer bulk ordering options?",
    answer: "Yes, we cater to businesses of all sizes and offer bulk ordering options. Please contact our sales team for more information on bulk pricing and quantities."
  },
  {
    question: "How do you support local farmers?",
    answer: "We work directly with local farming communities, ensuring fair wages and sustainable farming practices. We also invest in education and infrastructure in these communities to promote long-term growth and development."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

