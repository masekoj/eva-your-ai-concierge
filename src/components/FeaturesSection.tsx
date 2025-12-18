import { Bed, UtensilsCrossed, TreePine, Wifi, Car, Users } from "lucide-react";

const features = [
  {
    icon: Bed,
    title: "Elegant Rooms",
    description: "Comfortable accommodations with modern amenities and African-inspired décor",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Savor local and international cuisine at our award-winning restaurant",
  },
  {
    icon: TreePine,
    title: "Nature & Tours",
    description: "Explore Lake Malawi, wildlife sanctuaries, and cultural attractions",
  },
  {
    icon: Wifi,
    title: "Modern Amenities",
    description: "Complimentary WiFi, swimming pool, and 24-hour room service",
  },
  {
    icon: Car,
    title: "Airport Transfers",
    description: "Convenient shuttle service from Lilongwe International Airport",
  },
  {
    icon: Users,
    title: "Conference Facilities",
    description: "State-of-the-art meeting rooms for business events",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Experience Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect blend of comfort, convenience, and authentic Malawian hospitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
