"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { CheckCircle2, Users, Building2, Globe2, InfoIcon } from "lucide-react";
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
    "question": "What products does PT Nature’s Exquisite Nusantara specialize in?",
    "answer": "We specialize in exporting vanilla beans, with plans to expand our portfolio to include coffee, cocoa, and spices."
  },
  {
    "question": "Where do you source your products?",
    "answer": "Our products are sourced directly from trusted farmers across Indonesia. We prioritize sustainability, ethical practices, and premium quality."
  },
  {
    "question": "Which countries do you export to?",
    "answer": "We currently export to markets in Asia and Europe, partnering with businesses such as shops, factories, and industries."
  },
  {
    "question": "How do you ensure product quality?",
    "answer": "We have strict quality control measures at every stage of the process—from sourcing and processing to packaging—to ensure our products meet international standards."
  },
  {
    "question": "Are your products sustainably sourced?",
    "answer": "Absolutely! Sustainability is at the heart of our operations. We work closely with farmers to promote eco-friendly farming methods and ethical trade practices."
  },
  {
    "question": "Do you offer customized packaging?",
    "answer": "Yes, we provide tailored packaging solutions to meet the unique needs of our clients and their industries."
  },
  {
    "question": "Can I request samples of your products?",
    "answer": "Of course! Contact us directly to discuss your requirements, and we’ll arrange samples based on availability."
  },
  {
    "question": "How can I place an order or inquire about your products?",
    "answer": "You can reach out to us through our website or email, and our team will guide you through the process step by step."
  }
];

const timelineEvents = [
  {
    "year": 2024,
    "title": "Company Establishment",
    "description": "PT Nature’s Exquisite Nusantara was officially established as a sole private company."
  },
  {
    "year": 2024,
    "title": "Export Initiation",
    "description": "Began exporting premium vanilla beans to Asia and Europe."
  },
  {
    "year": 2025,
    "title": "Product Expansion",
    "description": "Expanded product offerings to include coffee and cocoa beans."
  },
  {
    "year": 2025,
    "title": "Sustainability Initiatives",
    "description": "Launched sustainability initiatives to strengthen partnerships with local farmers."
  },
  {
    "year": 2026,
    "title": "New Products Introduction",
    "description": "Introduced spices and other premium agricultural products to our export portfolio."
  }
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
            While vanilla beans are our flagship product, we are actively expanding our product offerings to include coffee, cocoa, and spices. Our mission is to supply not only premium raw materials but also to support the growth and success of our global partners through personalized service and exceptional quality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="story">Our Story</TabsTrigger>
              <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
              <TabsTrigger value="timeline">Company Timeline</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Company Journey</h2>
                  <p className="mb-4">
                  At PT Nature’s Exquisite Nusantara, our journey began with a deep passion for Indonesia’s rich agricultural heritage. Walking through lush vanilla plantations and connecting with local farmers, we saw an opportunity to share these treasures with the world. Founded in 2024, our company started with a focus on premium vanilla beans, showcasing their superior quality and distinctive flavor.
                  </p>
                  <p className="mb-4">
                  As we grew, we expanded our product offerings to include coffee, cocoa, and spices, reflecting our commitment to providing the finest agricultural products. Our journey is about more than exports; it’s about building strong partnerships, empowering farming communities, and championing sustainable practices.
                  </p>
                  <p>
                  Today, PT Nature’s Exquisite Nusantara is proud to serve clients across Asia and Europe, representing Indonesia’s agricultural excellence on a global scale. As we look to the future, we remain dedicated to innovation, sustainability, and creating lasting value for our partners and communities.
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
                • To deliver premium-quality raw materials, including vanilla beans, coffee, cocoa, and spices, to global markets.<br/>
 • To empower Indonesian farmers through sustainable and ethical trade practices.<br/>
 • To support the growth and success of our global partners with personalized service and exceptional quality.<br/>
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg">
                • To be a globally recognized leader in the export of Indonesia’s finest agricultural products.<br/>
 • To inspire a future where quality, sustainability, and trust define global trade.<br/>
 • To represent Indonesia’s agricultural excellence, bringing its unique flavors and traditions to the world.<br/>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="timeline" className="space-y-8">
              <h2 className="text-3xl font-bold mb-4">Our Journey Through Time</h2>
              <div className="relative border-l border-gray-200 ml-3">
              {timelineEvents.map((event, index) => (
                  <div key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white">
                      {index === 3 || index === 4 ? (
                        <InfoIcon className="w-3 h-3 text-white" />
                      ) : (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      )}
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

