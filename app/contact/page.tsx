"use client"

import { Mail, MapPin, Phone, Instagram, Facebook, InstagramIcon as Tiktok, Linkedin } from 'lucide-react'
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from 'next/dynamic'

const WorldMap = dynamic(() => import('@/components/world-map'), { ssr: false })

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss your requirements or learn more about our products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground">+62 811 666 8220</p>
                    <p className="text-muted-foreground">Monday - Friday, 9am - 5pm WIB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">Natureexquisitenusantara@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <Link href="https://www.instagram.com/Exquisitenusantara" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.facebook.com/share/1DfZ58J2Ku/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" /> Facebook
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.tiktok.com/@exquisite.nusanta?_t=8sP1W6spsyP&_r=1" target="_blank" rel="noopener noreferrer">
                  <Tiktok className="mr-2 h-4 w-4" /> TikTok
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/company/pt-nature-exquiste-nusantara" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="bg-background rounded-lg shadow-lg p-6">
            <WorldMap />
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Company Office</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              📍Infiniti Office, Indonesia Stock Exchange Tower 1 Level 3, Unit 304, Jl. Jendral Sudirman Kav 52-53, RT 05/ RW 03, Desa/Kelurahan Senayan, Kec. Kebayoran Baru, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta Kode Pos: 12190
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

