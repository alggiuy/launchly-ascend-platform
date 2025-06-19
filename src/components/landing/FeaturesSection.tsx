
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Bell, ArrowUp, Star } from "lucide-react";

const features = [
  {
    icon: <Settings className="w-8 h-8 text-blue-400" />,
    title: "No devs needed. Just launch.",
    description: "No more wrestling with setup. Jump straight into creating what matters."
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-400" />,
    title: "Know what's working instantly.",
    description: "Real-time insights that actually help you make better decisions."
  },
  {
    icon: <ArrowUp className="w-8 h-8 text-blue-400" />,
    title: "No stress when traffic spikes.",
    description: "Built to handle your success. Scale without breaking a sweat."
  },
  {
    icon: <Star className="w-8 h-8 text-blue-400" />,
    title: "Talk to people who've launched, failed, and won.",
    description: "Get advice from founders who've been there. You're not alone."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Zero to Launch in Minutes</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need — nothing you don't.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>  
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
