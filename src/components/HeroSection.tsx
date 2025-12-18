import { ArrowRight, Star, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.sunbirdmalawi.com/assets/hotels/Lilongwe/gallery/Lilongwe-4.jpg"
          alt="Sunbird Lilongwe Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="text-sm text-background/90">Lilongwe, Malawi</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Sunbird
          <span className="block text-accent">Lilongwe</span>
        </h1>

        <p className="text-xl md:text-2xl text-background/80 font-light mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Your <em className="font-display not-italic text-accent">Oasis</em> in the City
        </p>

        <p className="text-base text-background/70 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Experience warm African hospitality in the heart of Malawi's capital. 
          Elegant rooms, exquisite dining, and unforgettable adventures await.
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-accent fill-accent" />
          ))}
          <span className="text-background/70 text-sm ml-2">Award-Winning Hotel</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href="https://book.travelbookgroup.com/premium/index.html?id_stile=19015&tst_prntz=si&headvar=ok&lingua_int=eng&id_albergo=24951&dc=7807"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
          >
            Book Your Stay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => document.querySelector('.fixed.bottom-6')?.querySelector('button')?.click()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-background/10 text-background backdrop-blur-sm border border-background/30 font-semibold rounded-full hover:bg-background/20 transition-all duration-300"
          >
            Chat with Eva
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
