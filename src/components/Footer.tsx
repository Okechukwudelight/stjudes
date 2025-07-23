import { Button } from '@/components/ui/button';
import { Cross, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Contact', href: '#contact' },
  ];

  const ministries = [
    { name: 'Youth Fellowship', href: '#ministries' },
    { name: 'Women\'s Guild', href: '#ministries' },
    { name: 'Men\'s Fellowship', href: '#ministries' },
    { name: 'Children\'s Ministry', href: '#ministries' },
    { name: 'Choir Ministry', href: '#ministries' },
    { name: 'Prayer Ministry', href: '#ministries' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Cross className="h-8 w-8 text-accent" />
              <div className="text-xl font-bold">St Jude's Anglican</div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              A Spirit-filled Family of God, welcoming all to grow in faith, 
              fellowship, and service in the heart of Omole Phase 1, Lagos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Omole Phase 1, Ikeja, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+2348035063704</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">stjudesanglicanomole1@yahoo.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ministries</h3>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href={ministry.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Times</h3>
            <div className="space-y-3 mb-6">
              <div>
                <div className="font-medium text-accent">Holy Communion</div>
                <div className="text-sm text-primary-foreground/80">Sunday 7:00 AM & 10:00 AM</div>
              </div>
              <div>
                <div className="font-medium text-accent">Bible Study</div>
                <div className="text-sm text-primary-foreground/80">Sunday 9:00 AM & Tuesday 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-accent">Prayer Meeting</div>
                <div className="text-sm text-primary-foreground/80">Wednesday 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-accent">Youth Fellowship</div>
                <div className="text-sm text-primary-foreground/80">Saturday 5:00 PM</div>
              </div>
            </div>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} St Jude's Anglican Church, Omole Phase 1. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;