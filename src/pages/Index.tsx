
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowUp, Bell, Settings, Home, Calendar, Mail, Package, FileText, User, MessageSquare } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      title: "Lightning Setup",
      description: "Get your business online in minutes, not weeks. Our streamlined process handles the technical complexity."
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-400" />,
      title: "Smart Analytics",
      description: "Track what matters with intelligent insights that help you make data-driven decisions from day one."
    },
    {
      icon: <ArrowUp className="w-8 h-8 text-blue-400" />,
      title: "Scale Automatically",
      description: "Built to grow with you. Our infrastructure scales seamlessly as your business expands globally."
    },
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      title: "Expert Support",
      description: "Get guidance from successful founders who've built and sold companies. You're never alone."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for validating your first idea",
      features: [
        "1 Business Launch",
        "Basic Analytics",
        "Email Support",
        "Template Library",
        "Payment Processing"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Scale your business with advanced tools",
      features: [
        "5 Business Launches",
        "Advanced Analytics",
        "Priority Support",
        "Custom Branding",
        "A/B Testing",
        "API Access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For serious entrepreneurs and agencies",
      features: [
        "Unlimited Launches",
        "Custom Analytics",
        "24/7 Phone Support",
        "White-label Solution",
        "Team Collaboration",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "Launchly helped me validate and launch my SaaS in just 2 weeks. The analytics showed me exactly what my users wanted."
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, GrowthLab",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "From idea to first customer in 10 days. The support team guided me through every step of the process."
    },
    {
      name: "Emma Thompson",
      role: "Founder, DesignCo",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The dashboard insights are incredible. I can see exactly which features drive engagement and revenue."
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Here you would typically send the email to your backend
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Launchly
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight">
            Launch your next idea today
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop overthinking and start building. Join thousands of founders who've turned their ideas into profitable businesses with our proven launch system.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Try It Free
          </Button>
          <p className="text-sm text-gray-400 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need to launch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our platform handles the complexity so you can focus on what matters - building your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
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

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your command center</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Monitor your progress, track metrics, and make data-driven decisions with our intuitive dashboard.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 border-b border-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-300">Revenue</p>
                            <p className="text-2xl font-bold text-green-400">$12,450</p>
                          </div>
                          <ArrowUp className="text-green-400" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-300">Users</p>
                            <p className="text-2xl font-bold text-blue-400">2,847</p>
                          </div>
                          <User className="text-blue-400" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-300">Growth</p>
                            <p className="text-2xl font-bold text-purple-400">+23%</p>
                          </div>
                          <Star className="text-purple-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                              <Bell className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm">New user signed up</p>
                              <p className="text-xs text-gray-400">2 minutes ago</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm">Payment received</p>
                              <p className="text-xs text-gray-400">15 minutes ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <Button variant="outline" size="sm" className="border-gray-500 hover:border-blue-400">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-500 hover:border-blue-400">
                            <FileText className="w-4 h-4 mr-2" />
                            New Report
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your journey. Upgrade or downgrade at any time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 ${plan.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <Button className={`w-full mb-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}>
                    Get Started
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by founders worldwide</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who've launched with Launchly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
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
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay in the loop</h2>
          <p className="text-gray-300 text-lg mb-8">
            Get weekly insights, launch tips, and success stories delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 flex-1"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Launchly
              </div>
              <p className="text-gray-400 mb-4">
                Empowering founders to launch faster and smarter.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Dashboard</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Launchly. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
