"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { CheckCircle2, Users, Building2, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import VanillaPlant from "@/resources/plant-2.jpg";

const stats = [
  { icon: Globe2, value: "25+", label: "Countries Served" },
  { icon: Users, value: "1000+", label: "Farming Partners" },
  { icon: Building2, value: "15+", label: "Years Experience" },
  { icon: CheckCircle2, value: "100%", label: "Quality Assured" },
];

const values = [
  {
    icon: CheckCircle2,
    title: "Quality Excellence",
    description:
      "We maintain rigorous quality control throughout our supply chain, ensuring only the finest products reach our customers.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "We work closely with local farming communities, ensuring fair practices and sustainable development for all stakeholders.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    description:
      "We adhere to international quality standards and sustainable practices in all our operations.",
  },
];

const faqs = [
  {
    question: "What types of vanilla products do you offer?",
    answer:
      "We offer a range of premium vanilla products including whole vanilla beans, vanilla extract, and vanilla powder. All our products are sourced from sustainable farms in Indonesia.",
  },
  {
    question: "How do you ensure the quality of your products?",
    answer:
      "We maintain strict quality control measures throughout our supply chain. This includes careful selection of vanilla plants, proper curing and processing techniques, and rigorous testing before packaging.",
  },
  {
    question: "Do you offer bulk orders for businesses?",
    answer:
      "Yes, we cater to businesses of all sizes and offer bulk ordering options. Please contact our sales team for more information on bulk pricing and quantities.",
  },
  {
    question: "What makes Indonesian vanilla unique?",
    answer:
      "Indonesian vanilla, particularly from regions like Papua, is known for its rich, creamy flavor profile with subtle notes of chocolate. The unique climate and soil conditions contribute to its distinctive taste.",
  },
  {
    question: "How do you support local farmers?",
    answer:
      "We work directly with local farming communities, ensuring fair wages and sustainable farming practices. We also invest in education and infrastructure in these communities to promote long-term growth.",
  },
];

const timelineEvents = [
  {
    year: 2008,
    title: "Company Founded",
    description:
      "Nature Exquisite Nusantara was established with a vision to bring premium Indonesian vanilla to the global market.",
  },
  {
    year: 2010,
    title: "Sustainable Farming Initiative",
    description:
      "Launched our first partnership program with local farmers to implement sustainable farming practices.",
  },
  {
    year: 2015,
    title: "Expansion to Global Markets",
    description:
      "Began exporting our premium vanilla products to international markets, reaching 10+ countries.",
  },
  {
    year: 2018,
    title: "Organic Certification",
    description:
      "Achieved organic certification for our vanilla products, ensuring chemical-free cultivation.",
  },
  {
    year: 2020,
    title: "Launch of Research Center",
    description:
      "Opened our state-of-the-art vanilla research and development center to drive innovation in cultivation and processing.",
  },
  {
    year: 2023,
    title: "Carbon Neutral Operations",
    description:
      "Reached carbon neutrality across all our operations through offsetting and sustainable practices.",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src={VanillaPlant.src}
          alt="Our vanilla plantation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            ref={titleRef}
          >
            About Nature Exquisite
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            ref={subtitleRef}
          >
            Leading Indonesian exporter of premium vanilla products, committed
            to quality, sustainability, and excellence in global agricultural
            trade.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="story">Our Story</TabsTrigger>
              <TabsTrigger value="mission">Mission & Values</TabsTrigger>
              <TabsTrigger value="timeline">Company Timeline</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                  <p className="mb-4">
                    Nature Exquisite Nusantara was founded with a vision to bring Indonesia's finest
                    agricultural products to the global market. Our journey began with vanilla,
                    carefully cultivated in the rich soils of Indonesia.
                  </p>
                  <p>
                    Today, we are proud to be a trusted supplier to businesses worldwide, maintaining
                    the highest standards of quality while promoting sustainable farming practices
                    that benefit both our communities and the environment.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={VanillaPlant.src}
                    alt="Our farming process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 text-center">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="mission" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg">
                  To deliver the finest Indonesian vanilla products to the world, while fostering sustainable 
                  agricultural practices and empowering local farming communities.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <value.icon className="h-10 w-10 text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="timeline" className="space-y-8">
              <h2 className="text-3xl font-bold mb-4">Our Journey Through Time</h2>
              <div className="relative border-l border-gray-200 ml-3">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                      {event.title}
                      <span className="bg-primary-foreground text-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                        {event.year}
                      </span>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="faq" className="space-y-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Premium Indonesian Vanilla?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with us to discuss your requirements and get a customized quote for your business needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">Request a Quote</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

