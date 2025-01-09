import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Facebook, InstagramIcon as Tiktok, Linkedin } from 'lucide-react'
import Logo from "@/resources/logo.png"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src={Logo.src}
            alt="Nature Exquisite Nusantara"
            width={180}
            height={40}
            className="h-10 w-auto mb-4"
          />
          <p className="text-muted-foreground">
            Where Nature Whispers Flavor - Premium Indonesian agricultural products for global markets
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-muted-foreground hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="text-muted-foreground hover:text-primary">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/products/vanilla" className="text-muted-foreground hover:text-primary">
                Vanilla Beans
              </Link>
            </li>
            <li>
              <Link href="/products/coffee" className="text-muted-foreground hover:text-primary">
                Coffee Beans
              </Link>
            </li>
            <li>
              <Link href="/products/cocoa" className="text-muted-foreground hover:text-primary">
                Cocoa Beans
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">+62 811 666 8220</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Natureexquisitenusantara@gmail.com</span>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <Link href="https://www.instagram.com/Exquisitenusantara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://www.facebook.com/share/1DfZ58J2Ku/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://www.tiktok.com/@exquisite.nusanta?_t=8sP1W6spsyP&_r=1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Tiktok className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/pt-nature-exquiste-nusantara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Nature Exquisite Nusantara. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

