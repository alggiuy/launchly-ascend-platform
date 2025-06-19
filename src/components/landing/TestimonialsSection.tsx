
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amina Davis",
    role: "Founder, Creativo",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    quote: "Launchly saved me weeks of dev work and got me to market 3x faster."
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO, GrowthLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "Using Launchly felt like having a technical co-founder by my side."
  },
  {
    name: "Emma Thompson",
    role: "Founder, DesignCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "From idea to live product in 48 hours. Absolutely game-changing."
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by founders worldwide</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who've launched with Launchly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 animate-slide-up hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20" style={{ animationDelay: `${index * 0.3}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-700"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=374151&color=fff&size=48`;
                    }}
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
