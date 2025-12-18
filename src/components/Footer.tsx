import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Sunbird<span className="text-accent">.</span>
            </h3>
            <p className="text-background/70 text-sm mb-6">
              Your Oasis in the City. Experience warm African hospitality in the heart of Malawi's capital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">Accommodation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Restaurants & Bars</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Activities</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Meetings & Events</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Special Offers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Kamuzu Procession Road,<br />P.O. Box 44, Lilongwe</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+265 888 965 758</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>lilongwehotelres@sunbirdmalawi.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-background/70 mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-sm placeholder:text-background/50 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Sunbird Tourism. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Virtual Assistant Eva • Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
