import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import Logo from "@/resources/logo.png";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={Logo.src}
            alt="Nature Exquisite Nusantara"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-lg font-medium">
                About Us
              </Link>
              <Link href="/products" className="text-lg font-medium">
                Products
              </Link>
              <Link href="/sustainability" className="text-lg font-medium">
                Sustainability
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <Link href="/news" className="text-lg font-medium">
                News
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/sustainability"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sustainability
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <Link
            href="/news"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            News
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="default" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

